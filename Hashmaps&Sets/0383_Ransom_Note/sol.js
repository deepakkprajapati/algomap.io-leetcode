/**
 * @param {string} args1
 * @param {string} args2
 * @return {number}
 * Time:    O(N + M + N)
 * Space:   O(N)
 * Strategy: [HashMap]
 */
var func = function(args1, args2) {
    let rn_map = new Map();
    let mg_map = new Map();
    // --------------- approach 2: using 1 hashmap 
    for (let char of args2) { // create hashmap of args2
        mg_map.set(char, (mg_map.get(char) || 0) + 1); }
    for (let c of args1) {
        if (mg_map.get(c) === undefined) { return false; }
        else if ( mg_map.has(c) ) { 
            mg_map.set(c , (mg_map.get(c) -1));
        }
        if ( mg_map.get(c) < 0 ) { return false; }
    } return true;


    // --------------- approach 1: using hashmap for both
    // for (let char of args1) { // create hashmap of args1
    //     rn_map.set(char, (rn_map.get(char) || 0) + 1); }
    // for (let char of args2) { // create hashmap of args2
    //     mg_map.set(char, (mg_map.get(char) || 0) + 1); }
    // for (let [key, v] of rn_map) { // return false if args2 has less no of char or no char
    //     if (mg_map.get(key) === undefined) { return false; }
    //     else if (rn_map.get(key) > mg_map.get(key)) { return false }
    // }
    // return true; 
    
    return 0
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: ["a", "b"], expected: false },
        { args: ["aa", "ab"], expected: false },
        { args: ["aa", "aab"], expected: true }
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