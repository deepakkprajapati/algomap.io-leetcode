#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    // Strategy: Binary search
    // Time:     O(log(N*M))
    // Space:    O(1)

    int solve(vector<vector<int>>& matrix, int target) {
        if(matrix.size() == 0 || matrix[0].size() == 0) return false;
        int n = matrix[0].size();
        int low = 0;
        int high = (n * matrix.size())  -1;
        int mid = 0;
        int val = 0;
        while(low <= high){
            mid = low + (high-low)/2;
            val = matrix[mid/n][mid%n];
            if(target == val) return true;
            else if(target > val)
                low = mid +1;
            else
                high = mid -1;
        }
        return false;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<vector<int>> input1;
    int target;
    bool expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, 3 , true}, 
        {{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}, 13 , false}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1, testCases[i].target);
        bool isCorrect = (result == testCases[i].expected);
        cout << (isCorrect ? "✅" : "❌") << " Test #" << i;
        cout << " | Expected: " << testCases[i].expected 
             << " | Result: " << result << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
