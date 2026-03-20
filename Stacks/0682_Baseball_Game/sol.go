package main

import (
	"fmt"
	"reflect"
	"strconv"
)

/**
 * Strategy: Stacks
 * Time:     O(N)
 * Space:    O(N)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(ops []string) int {
	// --- Your implementation here ---
	sum := 0
	var stack []int
	length := len(ops)

	for i := 0; i < length; i++ {
		if ops[i] == "+" {
			val := stack[len(stack)-1] + stack[len(stack)-2]
			stack = append(stack, val)
			sum += val
		} else if ops[i] == "C" {
			val := stack[len(stack)-1]
			sum -= val
			stack = stack[:len(stack)-1]
		} else if ops[i] == "D" {
			val := stack[len(stack)-1] * 2
			sum += val
			stack = append(stack, val)
		} else {
			i, err := strconv.Atoi(ops[i])
			if err != nil {
				panic(err)
			}
			stack = append(stack, i)
			sum += i
		}
	}
	return sum
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 []string
		expect int
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: []string{"5", "2", "C", "D", "+"}, expect: 30},
		{input1: []string{"5", "-2", "4", "C", "D", "9", "+", "+"}, expect: 27},
		{input1: []string{"1", "C"}, expect: 0},
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
