package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Hash_set.
 * Time: O(N + M)
 * Space: O(1)
 */
func thefunc(jewels string, stones string) int {
	counter := 0
	// ------------- using hash_Sets with struct{}{}
	my_j := make(map[rune]struct{})
	for _, j := range jewels {
		my_j[j] = struct{}{}
	}
	for _, s := range stones {
		if _, exists := my_j[s]; exists {
			counter++
		}
	}
	// ------------- using hash_Sets with bool
	// my_j := make(map[rune]bool)
	// for _, j := range jewels {
	// 	my_j[j] = true
	// }
	// for _, s := range stones {
	// 	if my_j[s] {
	// 		counter += 1
	// 	}
	// }
	return counter
}

// Internal Testing Suite
func main() {
	type testCase struct {
		input1 string
		input2 string
		expect int
	}

	tests := []testCase{
		{input1: "aA", input2: "aAAbbbb", expect: 3},
		{input1: "z", input2: "ZZ", expect: 0},
		// {input: [][]int{3, 2, 4}, expect: 6, want: []int{1, 2}},
	}

	for i, tc := range tests {
		got := thefunc(tc.input1, tc.input2)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed: Got %v, Want %v\n", i, got, tc.expect)
		} else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}

	}
}
