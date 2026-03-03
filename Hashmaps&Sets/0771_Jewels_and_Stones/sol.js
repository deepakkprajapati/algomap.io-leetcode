/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * Time:    O(N + M)
 * Space:   O(N)
 */
var func = function(jewels, stones) {
    let counter = 0;
    let my_jewel = new Set(jewels);
    for (let stone of stones){
        if (my_jewel.has(stone)) counter++;
    }
    // stones.forEach((stone) => {if (my_jewel.has(stone)) counter++; });
    return counter
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
    // console.log(`Input: ${JSON.stringify(args)} | Expected: ${expected} | Result: ${result}`);         
}
test();