package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Two-Pointer In-Place Swap
 * Time:     O(N)
 * Space:    O(N)
 */

func solve(s []string) []string {
	// --- Your implementation here ---
	j := len(s) - 1
	for i := 0; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}
	return s
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 []string
		expect []string
	}
	tests := []testCase{
		{input1: []string{"h", "e", "l", "l", "o"}, expect: []string{"o", "l", "l", "e", "h"}},
		{input1: []string{"H", "a", "n", "n", "a", "h"}, expect: []string{"h", "a", "n", "n", "a", "H"}},
	}

	for i, tc := range tests {
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %s, %s | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
