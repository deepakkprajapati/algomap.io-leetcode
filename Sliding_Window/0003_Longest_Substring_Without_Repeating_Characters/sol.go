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

func solve(s string) int {
	l := 0
	result := 0
	set := make(map[byte]struct{})

	for r := 0; r < len(s); r++ {
		for {
			if _, exists := set[s[r]]; !exists {
				break
			}
			delete(set, s[l])
			l = l + 1
		}
		set[s[r]] = struct{}{}
		result = max(result, r-l+1)
	}
	return result
}

// Internal Testing Suite
func main() {

	type testCase struct {
		input1 string
		expect int
	}
	tests := []testCase{
		{input1: "abcabcbb", expect: 3},
		{input1: "bbbbb", expect: 1},
		{input1: "pwwkew", expect: 3},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed | Input: %v | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		}
	}
}
