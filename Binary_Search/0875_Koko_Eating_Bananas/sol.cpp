#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    // Strategy: Binary search application
    // Time:     O(N logM)
    // Space:    O(1)

    int solve(const vector<int>& piles, int h) {
        int low = 1;
        int high = *max_element(piles.begin(), piles.end());
        int mid = 0;
        int result = high;
        while(low <= high){
            mid = low + (high-low)/2;
            long curhrs = 0;
            for(int p: piles)
                curhrs += (p + mid -1) /mid;
            
            if(curhrs <= h){
                result = mid;
                high = mid -1;
            }else{
                low = mid +1;
            }
        }
        return result;
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
    vector<TestCase> testCases{
        {{3, 6, 7, 11}, 8, 4}, 
        {{30, 11, 23, 4, 20}, 5, 30},
        {{30, 11, 23, 4, 20}, 6, 23}
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
