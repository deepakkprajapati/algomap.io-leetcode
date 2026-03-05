#include <iostream>
#include <vector>
#include <unordered_map>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: [hash_Map ]
    // Time:     O(N + M)
    // Space:    O(N)

    // UPDATE: Change function signature and return type as needed
    int solve(string s, string t) {
        // Early exit: Anagrams must have identical lengths
        if (s.size() != t.size()) return false;

        // ----- approach 3. freq counter(unicode) (Hash_map)

        // Map to store character frequencies (supports Unicode/char32_t)
        unordered_map<char32_t, int> hashmap;
        // Count occurrences of each character in the first string
        for (char32_t c : s) hashmap[c]++;
        // Subtract counts using the second string
        for (char32_t c : t) {
            // If a character in 't' isn't in 's' or appears more often, return false
            if (--hashmap[c] < 0) return false; 
        }
        return true;

        // ----- approach 2. freq counter(english) (array)
        // int sarr[256] = {0};
        // for (char x : s)  sarr[(unsigned char )x]++;

        // for (char c : t) {
        //     sarr[c - 'a']--;
        //     if (--sarr[(unsigned char)c] < 0) return false;
        // }return true;

        // ----- approach 1: sorting
        // sort(s.begin(), s.end());
        // sort(t.begin(), t.end());
        // if (s != t) return false;
        // return true;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    string input1;
    string input2; 
    bool expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {"anagram", "nagaram", true}, 
        {"rat", "car", false}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1, testCases[i].input2);
        
        cout << "Test #" << (i + 1) << " | Expected: " << testCases[i].expected 
             << " | Result: " << result 
             << (result == testCases[i].expected ? " [PASS]" : " [FAIL]") << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
