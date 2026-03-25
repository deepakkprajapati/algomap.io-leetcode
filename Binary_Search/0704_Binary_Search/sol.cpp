#include <iostream>
#include <vector>

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Binary search implementation
    // Time:     O(log N)
    // Space:    O(1)

    int solve(const vector<int>& arr, int target) {
        int low = 0;
        int high = arr.size() -1;
        int mid = 0;
        while( low <= high ){
            mid = low + (high-low)/2;
            if( target > arr[mid] )
                low = mid + 1;
            else if ( target < arr[mid] )
                high = mid - 1;
            else 
                return mid;
        }
        return -1;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<int> input1;
    int target;
    int expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{-1,0,3,5,9,12}, 9, 4}, 
        {{-1,0,3,5,9,12}, 2, -1},
        {{-1,0,3,5,9,12}, 0, 1}
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
