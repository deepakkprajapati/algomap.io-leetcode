#include <iostream>
#include <vector>

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Variable Sliding Window
    // Time:     O(N)
    // Space:    O(N)

    int solve(const vector<int>& nums, int k) {
        int l = 0;
        int z_counter = 0;
        int len = 0;

        for(int r=0; r<nums.size(); r++){
            if(nums[r] == 0) z_counter++;
            while(z_counter > k){
                if(nums[l] == 0) z_counter--;
                l++;
            }
            len = max(len, r-l+1);
        }
        return len;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<int> input1;
    int input2;
    int expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{1,1,1,0,0,0,1,1,1,1,0}, 2, 6}, 
        {{0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1}, 3, 10},
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
