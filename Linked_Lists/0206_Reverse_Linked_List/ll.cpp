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

    ListNode* reverseList(ListNode* head) {
        // iterative approach
        ListNode* prev = nullptr;
        ListNode* current = head;
        while(current != nullptr){
            ListNode* next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        return prev;
        // recursive method
        if(head == nullptr || head->next == nullptr)
            return head;
        ListNode* newhead = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return newhead;

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
        {{1, 2, 3, 4, 5}, {5, 4, 3, 2, 1}},
        {{1, 2}, {2, 1}},
        {{}, {}}
    };

    for (size_t i = 0; i < testCases.size(); ++i) {

        // Build list
        Solution::ListNode* head = buildList(testCases[i].input);

        // Run solution
        Solution::ListNode* result = sol.reverseList(head);

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