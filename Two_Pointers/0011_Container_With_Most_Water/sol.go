package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Two Pointer
 * Time:     O(N)
 * Space:    O(1)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(height []int) int {
	// --- Your implementation here ---
	max_area := 0
	left := 0
	right := len(height) - 1

	for left < right {
		length := min(height[right], height[left])
		curr_area := length * (right - left)
		max_area = max(max_area, curr_area)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return max_area
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		expect int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{1, 8, 6, 2, 5, 4, 8, 3, 7}, expect: 49},
		{input1: []int{1, 2}, expect: 1},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v, | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
