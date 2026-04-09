package main

import (
	"fmt"
	"math"
	"reflect"
)

/**
 * Strategy: Variable Sliding Window (min)
 * Time:     O(N)
 * Space:    O(N)
 */

func solve(nums []int, target int) int {
	l, summ := 0, 0
	result := math.MaxInt32

	for r := 0; r < len(nums); r++ {
		summ += nums[r]

		for target <= summ {
			result = min(result, r-l+1)
			summ -= nums[l]
			l++
		}
	}
	if result == math.MaxInt32 {
		return 0
	}
	return result
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 []int
		input2 int
		expect int
	}
	tests := []testCase{
		{input1: []int{2, 3, 1, 2, 4, 3}, input2: 7, expect: 2},
		{input1: []int{1, 4, 4}, input2: 4, expect: 1},
		{input1: []int{1, 1, 1, 1, 1, 1, 1, 1}, input2: 11, expect: 0},
	}

	for i, tc := range tests {
		got := solve(tc.input1, tc.input2)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v, %v | Got: %v, Want: %v\n",
				i, tc.input1, tc.input2, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed | Input: %v, %v | Got: %v, Want: %v\n",
				i, tc.input1, tc.input2, got, tc.expect)
		}
	}
}
