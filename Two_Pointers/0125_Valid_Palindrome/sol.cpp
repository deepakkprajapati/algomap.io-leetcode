#include <iostream>
#include <vector>
#include <cctype>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Two Pointer
    // Time:     O(N)
    // Space:    O(1)

    bool solve(const string s) {
        // --- Your solution starts here ---
        int i = 0;
        int j = s.size()-1;
        while (i<j){
            if (!(s[i]>= '0' && s[i] <= '9' || s[i] >= 'A' && s[i] <= 'Z' || s[i] >= 'a' && s[i] <= 'z')) { i++; continue;}
            if (!(s[j]>= '0' && s[j] <= '9' || s[j] >= 'A' && s[j] <= 'Z' || s[j] >= 'a' && s[j] <= 'z')) { j--; continue;}
            if ((char)tolower(static_cast<unsigned char>(s[i])) != (char)tolower(static_cast<unsigned char>(s[j]))){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    string input1;
    bool expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {"A man, a plan, a canal: Panama" , true}, 
        {"race a car", false},
        {" ", true}
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
