#include<iostream>
#include <vector>
#include<algorithm>
#include <unordered_set>
using namespace std;

int thefunc(string jewels, string stones){
    int counter =0;
    unordered_set<char> my_j ;
    for(char j : jewels ) {my_j.insert(j);}
    for(char s : stones ){
        if (my_j.find(s) != my_j.end()) counter++;
    }
    return counter;
}
// struct of test cases
struct TestCase {
    string input1;
    string input2;
    int expected;
};
void run_tests(){
    vector<TestCase> testCases{
        {"aA", "aAAbbbb", 3}, 
        {"z", "ZZ", 0},
        {"a", "aaaaa", 5}
    };
    for(const auto& test : testCases){
        int result = thefunc(test.input1, test.input2);
        // verbose Output
        cout<<" | Input: ["<< test.input1<<" "<< test.input2;
        cout<< "] | Expected: " << test.expected <<" | Result: "<<result<<endl;
    }
}

int main(){
    run_tests();
    return 0;
}