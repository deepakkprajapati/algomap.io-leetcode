package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Two-Pointer way
 * Time:     O(N)
 * Space:    O(1)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(numbers []int, target int) []int {
	// --- Your implementation here ---
	i, j := 0, len(numbers)-1 // two pointers: start and end

	for i < j {
		sum := numbers[i] + numbers[j] // current pair sum
		if sum == target {
			return []int{i + 1, j + 1} // return 1-based indices
		}
		if sum < target {
			i++ // move left pointer right to increase sum
		} else {
			j-- // move right pointer left to decrease sum
		}
	}
	return nil // return nil slice if no pair found
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 []int
		input2 int
		expect []int
	}
	tests := []testCase{
		{input1: []int{2, 7, 11, 15}, input2: 9, expect: []int{1, 2}},
		{input1: []int{2, 3, 4}, input2: 6, expect: []int{1, 3}},
		{input1: []int{-1, 0}, input2: -1, expect: []int{1, 2}},
	}

	for i, tc := range tests {
		got := solve(tc.input1, tc.input2)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %s, %s | Got: %v, Want: %v\n",
				i, tc.input1, tc.input2, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
