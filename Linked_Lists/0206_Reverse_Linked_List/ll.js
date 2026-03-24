/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time:    O(N)
 * Space:   O(N)
 * Strategy: Delete duplicates 
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
var func = function(head) {
    // iterative approach
    let prev = null;
    let current = head;
    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
    // //     recursive method
    // if(head === null || head.next === null)
    //     return head;
    // let newhead = func(head.next);
    // head.next.next = head;
    // head.next = null;
    // return newhead;
};

/**
 * 🔧 HELPER FUNCTIONS (DO NOT MODIFY)
 */
// Array → Linked List
function buildList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Linked List → Array
function toArray(head) {
    let result = [];
    let curr = head;
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

// Compare arrays
function isEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}


/**
 * 🧪 TEST SUITE
 */
function test() {
    // 🔁 Modify test cases per problem
    const testCases = [
        { args: [[1,2,3,4,5]], expected: [5,4,3,2,1] },
        { args: [[3,2,1]], expected: [1,2,3] },
        { args: [[]], expected: [] }
        ];
    testCases.forEach(({ args, expected }, index) => {
        const head = buildList(args[0]);
        // Run solution
        const resultHead = func(head);
        // Convert result
        const result = toArray(resultHead);
        const status = isEqual(result, expected)
            ? "✅ PASS"
            : "❌ FAIL";

        console.log(
            `${status} | Test #${index + 1}\n` +
            `Input: ${JSON.stringify(args[0])}\n` +
            `Expected: ${JSON.stringify(expected)}\n` +
            `Result: ${JSON.stringify(result)}\n`
        );
    });
}

test();