package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: [Insert Strategy Name]
 * Time:     O(...)
 * Space:    O(...)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(input1 string, input2 string) int {
	// --- Your implementation here ---

	return nil
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 string
		input2 string
		expect int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: "aA", input2: "aAAbbbb", expect: 3},
		{input1: "z", input2: "ZZ", expect: 0},
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
