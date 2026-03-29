package main

import (
	"fmt"
)

/**
 * Strategy: Binary Search (Convergence)
 * Time:     O(log N)
 * Space:    O(1)
 */

// mockBadVersion stores the actual answer for the current test case
var mockBadVersion int

// isBadVersion simulates the LeetCode API
func isBadVersion(version int) bool {
	return version >= mockBadVersion
}

func solve(n int) int {
	low := 1
	high := n
	mid := 0
	for low != high {
		mid = low + (high-low)/2
		if isBadVersion(mid) {
			high = mid
		} else {
			low = mid + 1
		}
	}
	return low
}

// Internal Testing Suite
func main() {
	type testCase struct {
		n      int // Total versions
		bad    int // The first bad version (used for the mock)
		expect int // What the function should return
	}

	tests := []testCase{
		{n: 5, bad: 4, expect: 4},
		{n: 1, bad: 1, expect: 1},
		{n: 2, bad: 2, expect: 2},
		{n: 10, bad: 7, expect: 7},
		{n: 2126753390, bad: 1702766719, expect: 1702766719}, // Large input test
	}

	for i, tc := range tests {
		// Update the global mock so isBadVersion knows the "truth" for this run
		mockBadVersion = tc.bad

		got := solve(tc.n)

		if got != tc.expect {
			fmt.Printf("❌ Test %d Failed | n: %v, bad: %v | Got: %v, Want: %v\n",
				i+1, tc.n, tc.bad, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed | n: %v, bad: %v | Got: %v, Want: %v\n",
				i+1, tc.n, tc.bad, got, tc.expect)
		}
	}
}
