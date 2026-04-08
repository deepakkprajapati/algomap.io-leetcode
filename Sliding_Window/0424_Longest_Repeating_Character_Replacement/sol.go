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

func solve(s string, k int) int {
	result := 0
	l := 0
	freq := make([]int, 26)
	maxfq := 0

	for r := 0; r < len(s); r++ {
		freq[int(s[r])-65]++
		maxfq = max(maxfq, freq[int(s[r])-65])

		for ((r - l + 1) - maxfq) > k {
			freq[int(s[l])-65]--
			l++
		}
		result = max(result, r-l+1)
	}
	return result
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 string
		input2 int
		expect int
	}
	tests := []testCase{
		{input1: "ABAB", input2: 2, expect: 4},
		{input1: "AABABBA", input2: 1, expect: 4},
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
