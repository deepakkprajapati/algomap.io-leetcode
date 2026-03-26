/**
 * @param {string} args1
 * @param {string} args2
 * @return {number}
 * Time:    O(log N)
 * Space:   O(1)
 * Strategy: Binary search implementation
 */
var func = function(arr, target) {
    let low = 0;
    let high = arr.length-1;
    let mid = 0;
    while(low <= high){
        mid = low + Math.floor( (high-low)/ 2 );
        if( target === arr[mid] ) 
            return mid;
        else if( target > arr[mid] )
            low = mid + 1;
        else if( target < arr[mid] )
            high = mid - 1;
    } 
    return -1
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [[-1,0,3,5,9,12], 9], expected: 4 },
        { args: [[-1,0,3,5,9,12], 2], expected: -1 }
        // { args: [], expected: 5 }
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
