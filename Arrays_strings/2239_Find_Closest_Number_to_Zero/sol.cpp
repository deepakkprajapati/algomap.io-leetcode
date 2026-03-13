#include<iostream>
#include <vector>
#include<algorithm>
using namespace std;

int thefunc(){
    vector<int> nums = {-4,-2,1,4,8};
    
    // APPROACH 1
    // for (int i = 0; i < num2.size(); i++){
    //     if(nums[i] < 0)
    //         num2[i] = num2[i]*-1; }
    // stable_sort(num2.begin(), num2.end());
    // APPROACH 2
    // for (int i = 0; i < nums.size(); i++){
    //     if(abs(nums[i]) <= abs(nums[i+1])){
    //         cout << "compared " << nums[i] << " and " << nums[i+1] <<endl;
    //         if(abs(small_index) > abs(nums[i])){
    //             small_index = nums[i];
    //             cout<< " and stored " << nums[i] << endl;
    //         }}}
    // APPROACH 3
    int best_small_index = 0;
    for (int i = 1; i < nums.size(); i++){
        if(abs(nums[best_small_index]) > abs(nums[i])){
            best_small_index = i;   
        }
        else if (abs(nums[best_small_index]) == abs(nums[i]) && nums[i] > nums[best_small_index]){
            best_small_index = i;
        }
        
    }
    
    //print array
    for (const auto& num : nums) { 
        cout << num << " ";
    }
    cout<<endl<<nums[best_small_index]<<endl;
    return 0;
}
int main(){
    cout<<"The Program is working.."<<endl;
    thefunc();
    return 0;
}