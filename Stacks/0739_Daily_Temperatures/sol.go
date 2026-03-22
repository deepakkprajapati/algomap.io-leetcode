package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Monotonic Decreasing Stack
 * Time:     O(N)
 * Space:    O(N)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(temps []int) []int {
	// --- Your implementation here ---
	result := make([]int, 0, len(temps)) //withou 0 is fine as go creates element as 0
	stk := []int{}
	for i := 0; i < len(temps); i++ {
		for len(stk) > 0 && temps[stk[len(stk)-1]] < temps[i] {
			result[stk[len(stk)-1]] = i - stk[len(stk)-1]
			stk = stk[:len(stk)-1]
		}
		stk = append(stk, i)
	}
	return result
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		expect []int
	}
	tests := []testCase{
		{input1: []int{73, 74, 75, 71, 69, 72, 76, 73}, expect: []int{1, 1, 4, 2, 1, 1, 0, 0}},
		{input1: []int{30, 40, 50, 60}, expect: []int{1, 1, 1, 0}},
		{input1: []int{30, 60, 90}, expect: []int{1, 1, 0}},
	}
	for i, tc := range tests {
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed Input: %v | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		}
	}
}
