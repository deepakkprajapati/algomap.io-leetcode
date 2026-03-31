#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    // Strategy: modifies Binary search
    // Time:     O(log N)
    // Space:    O(1)

    int solve(vector<int>& nums, int target) {
        if(nums.size() == 0) return -1;
        int low = 0;
        int high = nums.size();
        int mid = 0;
        while(low <= high){
            mid = low + (high-low)/2;
            if(target == nums[mid]) return mid;
            if(nums[low] <= nums[mid]){
                if(nums[low] <= target && target < nums[mid])
                    high = mid -1;
                else 
                    low = mid +1;
            }else{
                if(nums[mid] < target && target <= nums[high])
                    low = mid +1;
                else 
                    high = mid -1;
            }
        }
        return -1;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<int> input1;
    int target;
    int expected;
};

void run_tests() {
    Solution sol;
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{4,5,6,7,0,1,2}, 0, 4}, 
        {{4,5,6,7,0,1,2}, 3, -1},
        {{1}, 0, -1}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
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
