#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// vector printing overloaing
template <typename T>
ostream& operator<<(std::ostream& os, const std::vector<T>& v) {
    os << "[";
    for (size_t i = 0; i < v.size(); ++i)
        os << (i ? ", " : "") << v[i];
    return os << "]";
}
// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// invertTree using iterative method
TreeNode* invertTree(TreeNode* root){
    if(!root) return nullptr;
    queue<pair<TreeNode*, TreeNode*>> q;
    TreeNode* res_root = new TreeNode(root->val);
    q.push({root,res_root});
    while(!q.empty()){
        auto [o,c] = q.front();
        q.pop();
        if(o->left) {
            c->right = new TreeNode(o->left->val);
            q.push({o->left, c->right});
        }
        if(o->right){ 
            c->left = new TreeNode(o->right->val);
            q.push({o->right, c->left});
        }
    }
    return res_root;
}

// Node* to array(BSF) type Binary-tree
vector<int> nodetoarray(TreeNode* root){
    vector<int> result = {};
    if(!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while(!q.empty()){
        TreeNode* current = q.front();
        result.push_back(current->val);
        if(current->left)
            q.push(current->left);
        if(current->right)
            q.push(current->right);
        q.pop();
    }return result;
}

// array(BSF) to Node* Binary-tree
TreeNode* arraytonode(vector<int> arr){
    if(!arr.size()) return nullptr;
    queue<TreeNode*> q;
    TreeNode* root = new TreeNode(arr[0]);
    q.push(root);
    int i =1;
    while(!q.empty()){
        TreeNode* curr = q.front();
        q.pop();
        if(i < arr.size()){
            curr->left = new TreeNode(arr[i]);
            q.push(curr->left);
            i++;
        }
        if(i < arr.size()){
            curr->right = new TreeNode(arr[i]);
            q.push(curr->right);
            i++;
        }
    }return root;
}

// ***SOLUTION*** invertTree using Recursion method
TreeNode* invertTree_rec(TreeNode* root){
    if(root == nullptr) return nullptr;
    swap(root->left, root->right);
    invertTree_rec(root->left);
    invertTree_rec(root->right);
    return root;
}

class Solution {
public:
    // Strategy: Binary Tree
    // Time:     O(N)
    // Space:    O(N)

    vector<int> solve(const vector<int>& input1) {
        vector<int> result = {};
        TreeNode* root = arraytonode(input1);

        
        TreeNode* res_root = invertTree_rec(root);
        result = nodetoarray(res_root);
        return result;
    }
};

struct TestCase {
    vector<int> input1;
    vector<int> expected;
};

void run_tests() {
    Solution sol;
    vector<TestCase> testCases{
        {{4,2,7,1,3,6,9}, {4,7,2,9,6,3,1}}, 
        {{2,1,3}, {2,3,1}},
        {{}, {}}
    };
    for(size_t i = 0; i < testCases.size(); ++i) {
        vector<int> result = sol.solve(testCases[i].input1);
        bool isCorrect = (result == testCases[i].expected);
        cout << (isCorrect ? "✅" : "❌") << " Test #" << i;
        cout << " | Input: " << testCases[i].input1
             << " | Expected: " << testCases[i].expected 
             << " | Result: " << result << endl;
    }
}

int main() {
    run_tests();
    return 0;
}
