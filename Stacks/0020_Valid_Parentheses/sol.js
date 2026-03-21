/**
 * @param {string} args1
 * @return {number}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(args1) {
    let stack = [];
    let paren = new Map([
        [ ")" , "(" ],
        [ "]" , "[" ],
        [ "}" , "{" ]
    ]);
    
    for(let char of args1){
        if (paren.has(char)){
            if (stack.pop() !== paren.get(char)){
                return false;
            }
        }
        else {  stack.push(char);  }
    }
    return (stack.length ===0);
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: "()", expected: true },
        { args: "()[]{}", expected: true },
        { args: "(]", expected: false },
        { args: "([])", expected: true },
        { args: "([)]", expected: false }
    ];
    testCases.forEach(({ args, expected }, index) => {
        // Use spread syntax (...) to pass array elements as separate arguments
        const result = func(args);
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