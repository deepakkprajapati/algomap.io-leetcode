import java.util.*;

class Solution {
    /**
     * Time:    O(log N)
     * Space:   O(1)
     * Strategy: Binary search implementation
     */
    public int solve(int[] arr, int target) {
        int low = 0;
        int high = arr.length -1;
        int mid = 0;
        while( low <= high ){
            mid = low + (high-low)/2;
            if( target > arr[mid])
                low = mid +1;
            else if( target < arr[mid] )
                high = mid -1;
            else 
                return mid;
        }
        return -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Defining test cases
        int[][] inputs = {
            {-1, 0, 3, 5, 9, 12},
            {-1, 0, 3, 5, 9, 12}
        };
        int[] targets = {9, 2};
        int[] expected = {4, -1};

        // Easy to swap types here based on problem requirements
        // String[][] testInputs = {{"data1", "data2"}};
        // int[] expectedOutputs = {0};
        System.out.println("Running Tests...");
        for (int i = 0; i < inputs.length; i++) {
            int result = sol.solve(inputs[i], targets[i]);
            
            String status = (result == expected[i]) ? "✅ PASS" : "❌ FAIL";
            
            System.out.printf("%s | Test #%d: Input: %s, Target: %d | Expected: %d | Result: %d%n",
                status, 
                i + 1, 
                Arrays.toString(inputs[i]), 
                targets[i], 
                expected[i], 
                result
            );
        }
    }
}
