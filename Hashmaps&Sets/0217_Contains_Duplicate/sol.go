package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: [Hash_set]
 * Time:     O(N)
 * Space:    O(N)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(input1 []int) bool {
	// --- Your implementation here ---
	my_set := make(map[int]struct{})
	for _, value := range input1 {
		if _, exists := my_set[value]; exists {
			return true
		} else {
			my_set[value] = struct{}{}
		}
	}
	// if len(my_set) != len(input1) {
	// 	return true
	// }
	return false
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		// input2 string
		expect bool
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{1, 2, 3, 1}, expect: true},
		{input1: []int{1, 2, 3, 4}, expect: false},
		{input1: []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, expect: true},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input:  %s | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
