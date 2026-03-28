package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: SQRT Binary search
 * Time:     O(logN)
 * Space:    O(1)
 */

func solve(n int) bool {
	num := int64(n)
	if num < 1 {
		return false
	}
	if num == 1 {
		return true
	}
	low := int64(1)
	high := int64(num / 2)
	var mid int64
	for low <= high {
		mid = low + (high-low)/2
		if num > mid*mid {
			low = mid + 1
		} else if num < mid*mid {
			high = mid - 1
		} else if num == mid*mid {
			return true
		}
	}
	return false
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 int
		expect bool
	}
	tests := []testCase{
		{input1: 16, expect: true},
		{input1: 14, expect: false},
		{input1: 520984950, expect: false},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v, | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed | Input: %v, | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		}
	}
}
