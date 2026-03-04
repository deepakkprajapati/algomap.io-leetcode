#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <numeric> // For std::accumulate

using namespace std;

// 1. YOUR LOGIC CONTAINER
class Solution {
public:
    // Strategy: [HashMap]
    // Time:     O(N+M)
    // Space:    O(N+M)

    // UPDATE: Change function signature and return type as needed
    int solve(string input1, string input2 ) {
        // --- Your solution starts here ---
        if(input2.size() == 0 && input1.size() == 0 ) return true;
        if(input2.size() == 0) return false; 
        // ----- using Array
        // A simple frequency array for 'a'-'z'
        int counts[26] = {0};
        // Fill the inventory from the magazine
        for (char c : input2) { counts[c - 'a']++; }
        // "Spend" the letters for the ransom note
        for (char c : input1) {
            counts[c - 'a']--;
            // If we drop below zero, the magazine didn't have enough of this letter
            if (counts[c - 'a'] < 0) { return false; }
        }
        return true;

        // ----- HashMap approach
        // unordered_map<char, int>rn_map;
        // unordered_map<char, int>mg_map;
        // for( char c : input1){
        //     rn_map[c]++;
        // }
        // for( char c : input2){
        //     mg_map[c]++;
        // }
        // for ( const auto& [k, v] : rn_map){
        //     if( mg_map.find(k) == mg_map.end() ) return false;
        //     if(rn_map[k] > mg_map[k]) return false;
        // }
        // return true;
        // for(const auto& kv : rn_map ){
        //     cout<<kv.first<<kv.second;
        // }cout<<endl;
        // for(const auto& kv : mg_map ){
        //     cout<<kv.first<<kv.second;
        // }cout<<endl;

    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    // UPDATE: Change input types based on the problem signature
    string input1;
    string input2;
    // int input2; // Example: Add more parameters if the function needs them
    
    // UPDATE: Change this to match the return type of your function
    bool expected;
};

void run_tests() {
    Solution sol;
    // UPDATE: Add your test cases here
    // Format: { {input1, input2...}, expected_output }
    vector<TestCase> testCases{
        {"a", "b", false}, 
        {"aa", "ab", false},
        {"aa", "aab", true}
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        // UPDATE: Update the arguments passed to sol.solve()
        int result = sol.solve(testCases[i].input1, testCases[i].input2);
        
        cout << "Test #" << (i + 1) << " | Expected: " << testCases[i].expected 
             << " | Result: " << result 
             << (result == testCases[i].expected ? " [PASS]" : " [FAIL]") << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
