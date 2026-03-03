/**
 * @param {string} args1
 * @param {string} args2
 * @return {number}
 * Time:    O(N)
 * Space:   O(N)
 * Strategy: [Hash_map]
 */
var func = function(...args1) {
    // ------ approach 1 basic
    // my_set = new Set();
    // for(let i of args1){
    //     if (my_set.has(i)) return true;
    //     else my_set.add(i);
    // }
    // return false
    // ---- approach 2 using size comparison
    my_set = new Set(args1)
    if (my_set.size != args1.length) return true;
    else return false
    
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [1,2,3,1], expected: true },
        { args: [1,2,3,4], expected: false },
        { args: [1,1,1,3,3,4,3,2,4,2], expected: true }
    ];
    testCases.forEach(({ args, expected }, index) => {
        // Use spread syntax (...) to pass array elements as separate arguments
        const result = func(...args);
        const status = (result === expected) ? "✅ PASS" : "❌ FAIL";
        console.log(
            `${status} | Test #${index + 1}: ` +
            `Input: ${JSON.stringify(args)} | ` +
            `Expected: ${expected} | ` +
            `Result: ${result}`
        );
    });
}
test();