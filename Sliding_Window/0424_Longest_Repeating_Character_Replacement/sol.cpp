#include <iostream>
#include <vector>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: [Insert Strategy Name]
    // Time:     O(...)
    // Space:    O(...)

    // UPDATE: Change function signature and return type as needed
    int solve(const vector<int>& input1) {
        // --- Your solution starts here ---

        return accumulate(input1.begin(), input1.end(), 0);
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    vector<int> input1;
    // int input2; // Example: Add more parameters if the function needs them
    
    // UPDATE: Change this to match the return type of your function
    int expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{-4, -2, 1, 4, 8}, 7}, 
        {{10, 20}, 30},
        {{0, 0, 0}, 0}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1);
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
