/**
 * @param {string} s
 * @return {boolean}
 * Time:    O(N)
 * Space:   O(1)
 * Strategy: Two-Pointer
 */
var func = function(s) {
    // ~~~~~~~~~~~~~~~~~~ O(N) approach
    // 'j' pointer to end and 'i' pointer to start
    let j = s.length - 1;
    let i = 0;
    // loop until both pointer meet
    while (i < j) {
        // skip if current pointer are not characters
        if (!(/[a-zA-Z0-9]/.test(s[i]))) { i++; continue;}
        if (!(/[a-zA-Z0-9]/.test(s[j]))) { j--; continue;}
        // if current character are not equal return false
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        // increse iterations
        i++
        j--;
        
    } return true;
    // ~~~~~~~~~~~~~~~~~~~~~ 3N approach
    // // convert string to lowercase then replace non-alphanumeric charcters
    // let str = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
    // // 'j' pointer to end and 'i' pointer to start
    // let j = str.length -1;
    // let i = 0;
    // // loop until both pointer meet
    // while (i<j){
    //     // return false as soon as two values dont match
    //     if (str[i] !== str[j]) {return false;}
    //     i++;
    //     j--;
    // }
    // return true;
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: ["A man, a plan, a canal: Panama"], expected: true },
        { args: ["race a car"], expected: false },
        { args: [" "], expected: true }
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