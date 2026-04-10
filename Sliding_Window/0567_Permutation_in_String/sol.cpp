#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    // Strategy: Fixed Sliding Window
    // Time:     O(N)
    // Space:    O(N)

    int solve(string s1, string s2) {
        if(s1.size() > s2.size()) return false;

        vector<int> freqs1(26,0);
        vector<int> win_freq(26,0);

        for(int i=0; i<s1.size(); i++){
            freqs1[int(s1[i]) -97]++;
            win_freq[int(s2[i]) -97]++;
        }
        if(freqs1 == win_freq)
            return true;
        
        for(int i=s1.size(); i<s2.size(); i++){
            win_freq[ int(s2[i]) -97]++;
            win_freq[ int(s2[i - s1.size()]) -97]--;
        
        if(freqs1 == win_freq)
            return true;
        }
        return false;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    string input1;
    string input2; 
    bool expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {"ab", "eidbaooo", true}, 
        {"ab", "eidboaoo", false},
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1, testCases[i].input2);
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
