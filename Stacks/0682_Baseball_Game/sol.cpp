#include <iostream>
#include <vector>
#include <string>

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Stack
    // Time:     O(N)
    // Space:    O(N)

    // UPDATE: Change function signature and return type as needed
    int solve(vector<string>& ops) {
        // --- Your solution starts here ---
        int sum = 0;
        int len = ops.size();
        vector<int> stack = {};

        for(int i=0; i<len; i++){
            if(ops[i] == "+" ){
                int val = stack.at(stack.size() -1) + stack.at(stack.size() -2);
                stack.push_back(val);
                sum += val;
            }
            else if(ops[i] == "C"){
                int val = stack.back();
                stack.pop_back();
                sum -= val;
            }
            else if(ops[i] == "D"){
                int val = stack.back() *2;
                stack.push_back(val);
                sum += val;
            }
            else {
                int val = stoi(ops[i]);
                stack.push_back(val);
                sum += val;
            }
        }
        return sum;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<string> input1;
    int expected;
};

void run_tests() {
    Solution sol;
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{"5","2","C","D","+"}, 30}, 
        {{"5","-2","4","C","D","9","+","+"}, 27},   
        {{"1", "C"}, 0}
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
