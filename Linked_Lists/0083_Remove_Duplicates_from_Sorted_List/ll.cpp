#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    struct ListNode {
        int val;
        ListNode *next;
        ListNode() : val(0), next(nullptr) {}
        ListNode(int x) : val(x), next(nullptr) {}
        ListNode(int x, ListNode *next) : val(x), next(next) {}
    };

    // Remove duplicates from sorted list
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* temp = head;

        while (temp != nullptr && temp->next != nullptr) {
            if (temp->val == temp->next->val) {
                ListNode* duplicate = temp->next;
                temp->next = temp->next->next;
                delete duplicate;
            } else {
                temp = temp->next;
            }
        }
        return head;
    }
};


// 🔧 Helper: vector → linked list
Solution::ListNode* buildList(const vector<int>& v) {
    Solution::ListNode dummy;
    Solution::ListNode* tail = &dummy;

    for (int x : v) {
        tail->next = new Solution::ListNode(x);
        tail = tail->next;
    }

    return dummy.next;
}


// 🔧 Helper: linked list → vector
vector<int> toVector(Solution::ListNode* head) {
    vector<int> result;

    while (head) {
        result.push_back(head->val);
        head = head->next;
    }

    return result;
}


// 🔧 Helper: print vector
void printVector(const vector<int>& v) {
    cout << "[ ";
    for (int x : v) cout << x << " ";
    cout << "]";
}


// 🔧 Helper: free memory
void freeList(Solution::ListNode* head) {
    while (head) {
        Solution::ListNode* temp = head;
        head = head->next;
        delete temp;
    }
}


// 🧪 Test Case struct
struct TestCase {
    vector<int> input;
    vector<int> expected;
};


void run_tests() {
    Solution sol;

    vector<TestCase> testCases{
        {{1, 1, 2}, {1, 2}},
        {{1, 1, 2, 3, 3}, {1, 2, 3}},
        {{}, {}},
        {{1}, {1}},
        {{1,1,1,1}, {1}}
    };

    for (size_t i = 0; i < testCases.size(); ++i) {

        // Build list
        Solution::ListNode* head = buildList(testCases[i].input);

        // Run solution
        Solution::ListNode* result = sol.deleteDuplicates(head);

        // Convert result
        vector<int> resultVec = toVector(result);

        // Check correctness
        bool isCorrect = (resultVec == testCases[i].expected);

        // Output
        cout << (isCorrect ? "✅" : "❌") << " Test #" << i << "\n";

        cout << "Expected: ";
        printVector(testCases[i].expected);

        cout << "\nResult:   ";
        printVector(resultVec);

        cout << "\n\n";

        // Free memory
        freeList(result);
    }
}


int main() {
    run_tests();
    return 0;
}