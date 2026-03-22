#include <iostream>
#include <vector>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Monotonic Decreasing Stack
    // Time:     O(N)
    // Space:    O(N)

    vector<int> solve(const vector<int>& temps) {
        // --- Your solution starts here ---
        vector<int> result(temps.size());
        vector<int> stk ;
        for(int i=0; i<temps.size(); i++){
            while(stk.size() > 0 && temps[stk.back()] < temps[i]){
                result[stk.back()] = i - stk.back();
                stk.pop_back();
            }
            stk.push_back(i);
        }
        return result;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<int> input1;
    vector<int> expected;
};

void run_tests() {
    Solution sol;
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{73, 74, 75, 71, 69, 72, 76, 73}, {1, 1, 4, 2, 1, 1, 0, 0}}, 
        {{30, 40, 50, 60}, {1, 1, 1, 0}},
        {{30, 60, 90}, {1, 1, 0}}
    };
    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        vector<int> result = sol.solve(testCases[i].input1);
        bool isCorrect = (result == testCases[i].expected);
        cout << (isCorrect ? "✅" : "❌") << " Test #" << i;
        // cout << " | Expected: " << testCases[i].expected 
        //      << " | Result: " << result << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
