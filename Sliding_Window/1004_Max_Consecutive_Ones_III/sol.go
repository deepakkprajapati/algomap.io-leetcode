package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Variable Sliding Window
 * Time:     O(N)
 * Space:    O(N)
 */

func solve(nums []int, k int) int {
	l := 0
	long_subseq := 0
	z_counter := 0

	for r := 0; r < len(nums); r++ {
		if nums[r] == 0 {
			z_counter++
		}
		for z_counter > k {
			if nums[l] == 0 {
				z_counter--
			}
			l++
		}
		long_subseq = max(long_subseq, r-l+1)
	}
	return long_subseq
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 []int
		input2 int
		expect int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, input2: 2, expect: 6},
		{input1: []int{0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1}, input2: 3, expect: 10},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
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
