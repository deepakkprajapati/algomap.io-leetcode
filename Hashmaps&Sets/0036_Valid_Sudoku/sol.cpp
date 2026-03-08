#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <numeric> // For std::accumulate
using namespace std;
class Solution {
public:
    // Strategy: Single-Pass Hash Tracking (Transposed Indexing)
    // Time:     O(N^2)
    // Space:    O(N^2)
    bool solve(const vector<vector<char>>& board) {
        // --- Your solution starts here ---

        // Create 9 sets to track numbers in each 3x3 Sudoku box
        vector<unordered_set<char>> boxes(9);
        for (int r = 0; r < 9; r++) {
            unordered_set<char> mycset; // Set to track elements in the current column
            unordered_set<char> myrset; // Set to track elements in the current row
            bool flag = true;
            
            for (int c = 0; c < 9; c++) {
                // row check
                // Check if current row already contains this number
                if('.' != board[r][c] ) {
                    if(myrset.find(board[r][c]) == myrset.end() ){
                        myrset.insert(board[r][c]); // Insert number if not already present
                    }
                    else flag = false;  // If duplicate detected, Sudoku is invalid
                }
                if(!flag) return false;
                // column check
                // Check if current column already contains this number
                if('.' != board[c][r] ) {
                    if(mycset.find(board[c][r]) == mycset.end() ){
                        mycset.insert(board[c][r]); // Insert number if not already present
                    }
                    else flag = false;
                }
                if(!flag) return false;
                // 3x3 box check
                // Determine which 3x3 box the cell belongs to
                int index = ((r/3)*3+(c/3));
                if('.' != board[r][c] ) {
                    if(boxes[index].find(board[r][c]) == boxes[index].end() ){
                        boxes[index].insert(board[r][c]);
                        // Insert number into corresponding box set
                    }
                    else flag = false;
                    // Duplicate found in the 3x3 box
                }
                if(!flag) return false;
            }
        }
        // If no duplicates found in rows, columns, or boxes → Sudoku is valid
        return true;
    }
};

// 2. LOCAL TEST SUITE
struct TestCase {
    vector<vector<char>> input1;
    bool expected;
};
void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {
            {{'5','3','.','.','7','.','.','.','.'},
             {'6','.','.','1','9','5','.','.','.'},
             {'.','9','8','.','.','.','.','6','.'},
             {'8','.','.','.','6','.','.','.','3'},
             {'4','.','.','8','.','3','.','.','1'},
             {'7','.','.','.','2','.','.','.','6'},
             {'.','6','.','.','.','.','2','8','.'},
             {'.','.','.','4','1','9','.','.','5'},
             {'.','.','.','.','8','.','.','7','9'}}, true}, 
        {
            {{'8','3','.','.','7','.','.','.','.'},
             {'6','.','.','1','9','5','.','.','.'},
             {'.','9','8','.','.','.','.','6','.'},
             {'8','.','.','.','6','.','.','.','3'},
             {'4','.','.','8','.','3','.','.','1'},
             {'7','.','.','.','2','.','.','.','6'},
             {'.','6','.','.','.','.','2','8','.'},
             {'.','.','.','4','1','9','.','.','5'},
             {'.','.','.','.','8','.','.','7','9'}}, false},
    };

    for(size_t i = 0; i < testCases.size(); ++i) {
        cout << "\n--- Running Test #" << (i + 1) << " ---" << endl;
        bool result = sol.solve(testCases[i].input1);
        
        cout << "Expected: " << boolalpha << testCases[i].expected 
             << " | Result: " << result 
             << (result == testCases[i].expected ? " [PASS]" : " [FAIL]") << endl;
    }
}

int main() {
    run_tests();
    return 0;
}