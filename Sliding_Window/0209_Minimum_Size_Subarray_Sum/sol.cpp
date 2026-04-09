#include <iostream>
#include <vector>

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Variable Sliding Window (min)
    // Time:     O(N)
    // Space:    O(N)

    int solve(const vector<int>& nums, int target) {
        int l = 0;
        int result = 1e9;
        int summ = 0;

        for(int r=0; r<nums.size(); r++){
            summ += nums[r];

            while(target <= summ){
                result = min(result, r-l+1);
                summ -= nums[l];
                l++;
            }   
        }
        return result == 1e9 ? 0 : result;
    }
};

struct TestCase {
    vector<int> input1;
    int target;
    int expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{2,3,1,2,4,3}, 7, 2}, 
        {{1, 4, 4}, 4, 1},
        {{1,1,1,1,1,1,1,1}, 11, 0}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        int result = sol.solve(testCases[i].input1, testCases[i].target);
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
