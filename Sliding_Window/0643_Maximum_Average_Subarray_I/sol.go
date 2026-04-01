package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Sliding Window
 * Time:     O(N)
 * Space:    O(1)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(nums []int, k int) float64 {
	maxsum := 0
	windowsum := 0
	for i := 0; i < k; i++ {
		windowsum += nums[i]
	}
	maxsum = windowsum
	for i := k; i < len(nums); i++ {
		windowsum += -nums[i-k] + nums[i]
		if windowsum > maxsum {
			maxsum = windowsum
		}
	}
	return float64(maxsum) / float64(k)
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		input2 int
		expect float64
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{1, 12, -5, -6, 50, 3}, input2: 4, expect: 12.75},
		{input1: []int{5}, input2: 1, expect: 5.0},
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
