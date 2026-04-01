#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    // Strategy: Sliding Window
    // Time:     O(N)
    // Space:    O(1)

    int solve(const vector<int>& nums, int k) {
        int maxsum = 0;
        int windowsum = 0;
        for(int i=0; i<k; i++){
            windowsum += nums[i];
        }
        maxsum = windowsum;
        for(int i=k; i<nums.size(); i++){
            windowsum += -nums[i-k] + nums[i];
            if(windowsum > maxsum) maxsum = windowsum;
        }
        return maxsum/double(k);
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<int> input1;
    int input2; 
    float expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{1, 12, -5, -6, 50, 3},4 , 12.75}, 
        {{5},1 , 5.0},
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
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
