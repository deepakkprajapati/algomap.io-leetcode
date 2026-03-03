#include <iostream>
#include <vector>
#include <unordered_set>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: [Hashmap]
    // Time:     O(N)
    // Space:    O(N)

    // UPDATE: Change function signature and return type as needed
    int solve(const vector<int>& input1) {
        // --- Your solution starts here ---
        unordered_set<int> my_set;
        for(int i : input1){
            if (my_set.find(i) != my_set.end()) return true;
            else my_set.insert(i);
        }
        return false;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    vector<int> input1;
    // int input2; // Example: Add more parameters if the function needs them
    
    // UPDATE: Change this to match the return type of your function
    bool expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{1,2,3,1}, true}, 
        {{1,2,3,4}, false},
        {{1,1,1,3,3,4,3,2,4,2}, true}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1);
        
        cout << "Test #" << (i + 1) << " | Expected: " << testCases[i].expected 
             << " | Result: " << result 
             << (result == testCases[i].expected ? " [PASS]" : " [FAIL]") << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
