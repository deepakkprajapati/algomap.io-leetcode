/**
 * @param {number[]} height
 * @return {number}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(height) {
    let i =0;
    let j = height.length -1;
    longstreak = 0
    
    while(i<j){
        let length= height[i] < height[j] ?  height[i] : height[j];
        let breath = j-i;
        let curr_area = length * breath;
        if (curr_area > longstreak) longstreak = curr_area;

        if (height[i] < height[j]){ i++; }
        else {j--}
    }
    return longstreak
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [1,8,6,2,5,4,8,3,7], expected: 49 },
        { args: [1,1], expected: 1 },
        // { args: ["a", "aaaaa"], expected: 5 }
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