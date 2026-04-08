#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    // Strategy: Variable Sliding Window
    // Time:     O(N)
    // Space:    O(N)

    int solve(string s, int k) {
        int result = 0;
        int l = 0;
        vector<int> freq(26, 0);
        int maxfq = 0;

        for(int r=0; r<s.size(); r++){
            freq[int(s[r]) -65]++;
            maxfq = max(maxfq, freq[int(s[r]) -65]);

            while((r-l+1-maxfq) > k){
                freq[int(s[l]) -65]--;
                l++;
            }
            result = max(result, r-l+1);
        }
        return result;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    string s;
    int k;
    int expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {"ABAB", 2 , 4}, 
        {"AABABBA", 1 , 4},
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        int result = sol.solve(testCases[i].s, testCases[i].k);
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
