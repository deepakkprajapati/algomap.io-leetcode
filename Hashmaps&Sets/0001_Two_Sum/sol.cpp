#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    /**
     * Strategy: One-pass Hash Map
     * We store each number's value and its index as we iterate.
     * For every new number, we check if its "complement" (target - current) 
     * already exists in our map.
     * * Time Complexity:  O(n) - We traverse the list once.
     * * Space Complexity: O(n) - In the worst case, we store n elements in the map.
     */
    vector<int> solve(const vector<int>& nums, int target) {
        // Key: The number value, Value: The index of that number
        unordered_map<int, int> numMap; 

        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];

            // If the complement exists in the map, we found our pair!
            if (numMap.find(complement) != numMap.end()) {
                // Return the index of the complement and the current index
                return {numMap[complement], i}; 
            }

            // Otherwise, store the current number and its index for future lookups
            numMap[nums[i]] = i; 
        }

        // Return empty vector if no solution is found (per problem constraints)
        return {}; 
    }
};

// --- Test Infrastructure ---

struct TestCase {
    vector<int> nums;
    int target;    
    vector<int> expected;
};

// Helper to print vectors since C++ doesn't do this natively with cout
void printVec(const vector<int>& v) {
    cout << "{";
    for(size_t i = 0; i < v.size(); ++i) {
        cout << v[i] << (i == v.size() - 1 ? "" : ", ");
    }
    cout << "}";
}

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{2, 7, 11, 15}, 9, {0, 1}}, 
        {{3, 2, 4}, 6, {1, 2}},
        {{3, 3}, 6, {0, 1}}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // Call solve with both required arguments
        vector<int> result = sol.solve(testCases[i].nums, testCases[i].target);
        
        cout << "Test #" << (i + 1) 
             << " | Expected: "; printVec(testCases[i].expected);
             cout << " | Result: "; printVec(result);
             
        // Vector comparison in C++ compares values/order automatically
        cout << (result == testCases[i].expected ? " [PASS]" : " [FAIL]") << endl;
    }
}

int main() {
    run_tests();
    return 0;
}