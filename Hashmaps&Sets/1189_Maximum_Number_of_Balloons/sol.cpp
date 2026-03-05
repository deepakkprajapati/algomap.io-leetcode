#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: [Hashmap]
    // Time:     O(N)
    // Space:    O(N)

    // UPDATE: Change function signature and return type as needed
    int solve(string text) {
        // --- Your solution starts here ---
        // ------ approach 2: 
        int counts[26] = {0};
        for (char c : text) {
            counts[c - 'a']++;
        }
        // "balloon" requirements: b:1, a:1, l:2, o:2, n:1
        int b = counts['b' - 'a'];
        int a = counts['a' - 'a'];
        int l = counts['l' - 'a'] / 2;
        int o = counts['o' - 'a'] / 2;
        int n = counts['n' - 'a'];
        // The answer is the smallest of these
        return min({b, a, l, o, n});

        // ---- approach 1: ----------- 
        // string bl = "balon";
        // int b[5] = {0};
        // for (int i = 0; i < 5; i++) {
        //     int counter = 0;
        //     for (char t : text) { if (t == bl[i]) counter++; }
        //     b[i] = counter;
        // }
        // b[2] = b[2] / 2;
        // b[3] = b[3] / 2;
        // sort(b, b + 5);
        // return b[0];
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    string input1;
    // int input2; // Example: Add more parameters if the function needs them
    
    // UPDATE: Change this to match the return type of your function
    int expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {"nlaebolko", 1}, 
        {"loonbalxballpoon", 2},
        {"leetcode", 0}
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
