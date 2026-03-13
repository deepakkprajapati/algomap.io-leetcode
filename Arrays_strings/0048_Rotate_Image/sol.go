package main

import (
	"reflect"
	"fmt"
)
/**
 * Strategy: Transpose the matrix, then reverse each row.
 * Time: O(N^2)
 * Space: O(1)
 */
func thefunc(matrix [][]int ) [][]int {
    s := len(matrix)
	// edge case
	if s == 0 { return matrix	}
	// transpose the matrix
	for i := 0; i < s; i++ {
		for j := i + 1; j < s; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i] , matrix[i][j]
			// temp := matrix[i][j]
			// matrix[i][j] = matrix[j][i]
			// matrix[j][i] = temp
		}
	}
	// swap matix Horizontally
	for i := 0; i < s; i++ {
		for j := 0; j < s/2; j++ {
			matrix[i][j], matrix[i][s-1-j] = matrix[i][s-1-j] , matrix[i][j]
			// temp := matrix[i][j]
			// matrix[i][j] = matrix[i][s-1-j]
			// matrix[i][s-1-j] = temp
		}
	}

    return matrix
}

// Internal Testing Suite
func main() {
    type testCase struct {
        input   [][]int
        expect [][]int
        // want   []int
    }

    tests := []testCase{
        {input: [][]int{{1, 2, 3},{4, 5, 6},{7, 8, 9}}, expect: [][]int{{7, 4, 1}, {8, 5, 2}, {9, 6, 3}} },
        {input: [][]int{{5,1,9,11},{2,4,8,10},{13,3,6,7},{15,14,12,16}}, expect: [][]int{{15,13,2,5},{14,3,4,1},{12,6,8,9},{16,7,10,11}} },
		// {input: [][]int{3, 2, 4}, expect: 6, want: []int{1, 2}},
    }

    for i, tc := range tests {
        got := thefunc(tc.input)
        if !reflect.DeepEqual(got, tc.expect) {
            fmt.Printf("❌ Test %d Failed: Got %v, Want %v\n", i, got, tc.expect)
        }else {
			fmt.Printf("✅ Test %d Passed\n", i)
		}

    }
}