/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 * Strategy: Two-Pointer In-Place Swap
 * Time:    O(N)
 * Space:   O(1)
 */
var func = function(s) {
    "use strict";

    let j = s.length - 1;
    for (let i = 0; i < j; j--, i++) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"] },
        { args: [["H","a","n","n","a","h"]], expected: ["h","a","n","n","a","H"] }
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