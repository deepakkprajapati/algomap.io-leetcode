#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <functional>

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: Hashmap + Stacks
    // Time:     O(N)
    // Space:    O(N)

    // UPDATE: Change function signature and return type as needed
    int solve(const vector<string>& input1) {
        // Hashmap approach
        unordered_map<string, function<long(long, long)>> ops = {
            {"+", [](long a, long b){return a+b;}  },
            {"*", [](long a, long b){return a*b;}  },
            {"-", [](long a, long b){return a-b;}  },
            {"/", [](long a, long b){return a/b;}  }
        };
        vector<long> stk;
        for(const string s : input1){
            if(ops.count(s)){
                long b = stk.back(); stk.pop_back();
                long a = stk.back(); stk.pop_back();
                stk.push_back(ops[s](a,b));
            }else{
                stk.push_back(stol(s));
            }
        }
        return stk.back();
        // if-else approach
        // vector<int> stk ;
        // for(string i : input1){
        //     if ( i == "+" || i == "/" || i == "-" || i == "*" ){
        //         int val1 = stk.back();
        //         stk.pop_back();
        //         int val2 = stk.back();
        //         stk.pop_back();
        //         if ( i == "+"){ stk.push_back( val2 + val1 ); }
        //         else if ( i == "/" ){ stk.push_back( val2 / val1 ); }
        //         else if ( i == "-" ){ stk.push_back( val2 - val1 ); }
        //         else if ( i == "*" ){ stk.push_back( val2 * val1 ); }
        //     }
        //     else {
        //         stk.push_back(stoi(i));
        //     }
        // }
        // return stk[0];
    }
};
// 2. LOCAL TEST SUITE
struct TestCase {
    vector<string> input1;
    int expected;
};
void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {{"2","1","+","3","*"}, 9}, 
        {{"4","13","5","/","+"}, 6},
        {{"10","6","9","3","+","-11","*","/","*","17","+","5","+"}, 22}
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
