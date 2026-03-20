/**
 * @param {string[]} ops
 * @return {number}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(ops) {
    let arr = [];
    let sum = 0;
    let len = ops.length;
    for(let i=0; i<len; i++){
        if (ops[i] === "+" ){
            let val = (arr.at(-1) + arr.at(-2));
            arr.push( val );
            sum += val;
        }
        else if (ops[i] === "C"){
            sum -= arr.pop();

        }
        else if (ops[i] === "D"){
            let val = (arr.at(-1) * 2);
            arr.push( val );
            sum += val;
        }
        else {
            arr.push(Number(ops[i]));
            sum += Number(ops[i]);
        }
    }
    return sum;
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: ["5","2","C","D","+"], expected: 30 },
        { args: ["5","-2","4","C","D","9","+","+"], expected: 27 },
        { args: ["1","C"], expected: 0 }
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