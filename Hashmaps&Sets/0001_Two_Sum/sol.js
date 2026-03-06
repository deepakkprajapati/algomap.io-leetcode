/**
 * @param {string} args1
 * @param {string} args2
 * @return {number}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(args1, args2) {
    
    
    return 0
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: ["aA", "aAAbbbb"], expected: 3 },
        { args: ["z", "ZZ"], expected: 0 },
        { args: ["a", "aaaaa"], expected: 5 }
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