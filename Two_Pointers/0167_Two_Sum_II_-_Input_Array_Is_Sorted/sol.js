/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Time:    O(N)
 * Space:   O(1)
 * Strategy: Two-Pointers
 */
var func = function (numbers, target) {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ using Two-pointers
    
    let j = numbers.length -1;
    let i=0;
    while( i<j ){
        if (target === numbers[i] + numbers[j] ){
            return [i+1, j+1];
        }
        else if ( target < numbers[i] + numbers[j] ){j--;}
        else {i++;}
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ using hashmap
    // let map = new Map();
    // for (let i = 0; i < numbers.length; i++) {
    //     if (map.has(target - numbers[i])) {
    //         return [(map.get(target - numbers[i]) + 1) , (i + 1)];
    //     }
    // else    map.set( numbers[i], i);
    // }
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [[2,7,11,15], 9 ], expected: [1,2] },
        { args: [[2,3,4], 6 ], expected: [1,3] },
        { args: [[-1,0], -1 ], expected: [1,2] }
        
    ];
    testCases.forEach(({ args, expected }, index) => {
        // Use spread syntax (...) to pass array elements as separate arguments
        const result = func(...args);

        const status = (JSON.stringify(result) === JSON.stringify(expected)) ? "✅ PASS" : "❌ FAIL";
        console.log(
            `${status} | Test #${index + 1}: ` +
            `Input: ${JSON.stringify(args)} | ` +
            `Expected: ${expected} | ` +
            `Result: ${result}`
        );
    });
}
test();