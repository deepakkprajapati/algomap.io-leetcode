#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Variable Sliding Window
    // Time:     O(N)
    // Space:    O(N)

    int solve(string s) {
        int result = -1e9;
        int l = 0;
        unordered_set<char> sett;

        for(int r=0; r<s.size(); r++){
            while(sett.find(s[r]) != sett.end()){
                sett.erase(s[l]);
                l++;
            }
            sett.insert(s[r]);
            result = max(result, r-l+1);
        }
        return result;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    string input1;
    int expected;
};

void run_tests() {
    Solution sol;
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{"abcabcbb"}, 3}, 
        {{"bbbbb"},  1},
        {{"pwwkew"},  3}
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
