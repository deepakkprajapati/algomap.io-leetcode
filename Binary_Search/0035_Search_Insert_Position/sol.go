package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: low Binary search
 * Time:     O(log N)
 * Space:    O(1)
 */
func solve(arr []int, target int) int {
	low := 0
	high := len(arr) - 1
	mid := 0
	for low <= high {
		mid = low + (high-low)/2
		if target > arr[mid] {
			low = mid + 1
		} else if target < arr[mid] {
			high = mid - 1
		} else {
			return mid
		}
	}
	return low
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
		{input1: []int{1, 3, 5, 6}, input2: 5, expect: 2},
		{input1: []int{1, 3, 5, 6}, input2: 2, expect: 1},
		{input1: []int{1, 3, 5, 6}, input2: 7, expect: 4},
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
