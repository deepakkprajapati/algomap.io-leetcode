package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: modifies Binary search
 * Time:     O(log N)
 * Space:    O(1)
 */

func solve(nums []int, target int) int {
	low := 0
	high := len(nums) - 1
	mid := 0
	for low <= high {
		mid = low + (high-low)/2
		if target == nums[mid] {
			return mid
		}
		if nums[low] <= nums[mid] {
			if nums[low] <= target && target < nums[mid] {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else {
			if nums[mid] < target && target <= nums[high] {
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
	}
	return -1
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
		{input1: []int{4, 5, 6, 7, 0, 1, 2}, input2: 0, expect: 4},
		{input1: []int{4, 5, 6, 7, 0, 1, 2}, input2: 3, expect: -1},
		{input1: []int{1}, input2: 0, expect: -1},
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
