#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    // Strategy: SQRT Binary search
    // Time:     O(logN)
    // Space:    O(1)

    int solve(const int num) {
        if(num <1) return false;
        if(num == 1) return true;
        int low = 1;
        int high = num/2;
        unsigned long long mid = 0;
        while(low <= high){
            mid = low + (high-low)/2;
            if(num > mid*mid)
                low = mid+1;
            else if(num < mid*mid)
                high= mid-1;
            else if(num == mid*mid)
                return true;        
        }
        return false;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    int input1;
    bool expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{16}, true}, 
        {{14}, false},
        {{8502845}, false}
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
