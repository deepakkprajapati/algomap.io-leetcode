package main

import (
	"fmt"
	"math"
	"reflect"
	"slices"
)

/**
 * Strategy: Binary search application
 * Time:     O(N LogM)
 * Space:    O(1)
 */

func solve(piles []int, h int) int {
	low := 1
	high := slices.Max(piles)
	result := high
	mid := 0

	for low <= high {
		mid = low + (high-low)/2
		currhrs := 0
		for i := 0; i < len(piles); i++ {
			currhrs += int(math.Ceil(float64(piles[i]) / float64(mid)))
		}
		if currhrs <= h {
			result = mid
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return result
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 []int
		input2 int
		expect int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{3, 6, 7, 11}, input2: 8, expect: 4},
		{input1: []int{30, 11, 23, 4, 20}, input2: 5, expect: 30},
		{input1: []int{30, 11, 23, 4, 20}, input2: 6, expect: 23},
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
