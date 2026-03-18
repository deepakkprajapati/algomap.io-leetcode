package main

import (
	"fmt"
	"reflect"
	"slices"
)

/**
 * Strategy: Two Pointers (with Sorting)
 * Time:     O(N*N)
 * Space:    O(1)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(nums []int) [][]int {
	// --- Your implementation here ---
	result := [][]int{}
	// Sort to use two-pointer technique and easily skip duplicates
	slices.Sort(nums)
	leng := len(nums)

	for i := 0; i < leng; i++ {
		// If the smallest number is > 0, a zero sum is impossible
		if nums[i] > 0 {
			break
		}
		// Skip the same value to avoid duplicate triplets in the result
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left := i + 1
		right := leng - 1

		for left < right {
			sum := nums[i] + nums[left] + nums[right]
			if sum == 0 {
				result = append(result, []int{nums[i], nums[left], nums[right]})
				left++
				right--
				// Skip duplicate values for the left and right pointers
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			} else if sum > 0 {
				right-- // Sum too large; move the right pointer inward
			} else {
				left++ // Sum too small; move the left pointer inward
			}
		}
	}
	return result
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []int
		expect [][]int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []int{-1, 0, 1, 2, -1, -4}, expect: [][]int{{-1, -1, 2}, {-1, 0, 1}}},
		{input1: []int{0, 1, 1}, expect: [][]int{}},
		{input1: []int{0, 0, 0}, expect: [][]int{{0, 0, 0}}},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Input: %v, %v | Got: %v, Want: %v\n",
				i, tc.input1, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}
	}
}
