package main

import (
	"fmt"
	"reflect"
)

/**
 * Strategy: Stack with Hashmap
 * Time:     O(N)
 * Space:    O(N)
 */
// EDIT HERE: Change function signature and return type as needed
func solve(input1 string) bool {
	// --- Your implementation here ---
	stk := []string{}
	var mymap = map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}
	for _, char := range input1 {\
		// If it's a closing bracket
		// go-way of looking and checking
		// if open, found := pairs[char]; found {
        //     if len(stk) > 0 && stk[len(stk)-1] == open {
        //         stk = stk[:len(stk)-1] // Pop
        //     }
		// above login in more easy way
		_, ok := mymap[string(char)]
		if ok {
			if len(stk) > 0 && mymap[string(char)] == stk[len(stk)-1] {
				stk = stk[:len(stk)-1]
			} else {
				return false
			}
		} else {
			stk = append(stk, string(char))
		}
	}
	return len(stk) == 0
}

// Internal Testing Suite
func main() {
	// EDIT HERE: Change struct fields to match your function signature
	type testCase struct {
		input1 string
		expect bool
	}
	// EDIT HERE: Add your test cases
	tests := []testCase{
		{input1: "()", expect: true},
		{input1: "(){}[]", expect: true},
		{input1: "(]", expect: false},
		{input1: "([])", expect: true},
		{input1: "([)]", expect: false},
	}

	for i, tc := range tests {
		// EDIT HERE: Update arguments to match your function signature
		got := solve(tc.input1)
		if !reflect.DeepEqual(got, tc.expect) {
			fmt.Printf("❌ Test %d Failed | Got: %v, Want: %v, | Input: %v\n",
				i, got, tc.expect, tc.input1)
		} else {
			fmt.Printf("✅ Test %d Passed | Got: %v, Want: %v, | Input: %v\n",
				i, got, tc.expect, tc.input1)
		}
	}
}
