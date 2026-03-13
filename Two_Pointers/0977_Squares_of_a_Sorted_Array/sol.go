package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: [2 pointer converging]
 * Time:     O(N)
 * Space:    O(N)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(nums []int) []int {
	// --- Your implementation here ---
	// nums := []int{-4, -1, 0, 3, 10}
	lent := len(nums)
	result := make([]int, lent)
	i := 0
	r := lent - 1
	j := lent - 1
	for i <= j {
		left := nums[i] * nums[i]
		right := nums[j] * nums[j]

		if left < right {
			result[r] = right
			j--
		} else {
			result[r] = left
			i++
		}
		r--
	}
	// fmt.Println(result)
	// fmt.Println(nums)
	return result
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		expect []int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{-4, -1, 0, 3, 10}, expect: []int{0, 1, 9, 16, 100}},
		{input1: []int{-7, -3, 2, 3, 11}, expect: []int{4, 9, 9, 49, 121}},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %s, %s | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
