package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Binary Search
 * Time:     O(log(m*n))
 * Space:    O(1)
 */

func solve(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	n := len(matrix[0])
	m := len(matrix)
	low := 0
	high := (m * n) - 1
	mid := 0
	for low <= high {
		mid = low + (high-low)/2
		val := matrix[mid/n][mid%n]
		if target > val {
			low = mid + 1
		} else if target < val {
			high = mid - 1
		} else {
			return true
		}
	}
	return false
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 [][]int
		input2 int
		expect bool
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, input2: 3, expect: true},
		{input1: [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, input2: 13, expect: false},
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
