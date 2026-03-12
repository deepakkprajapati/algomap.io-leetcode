/**
 * @param {number[]} nums
 * @return {number[]}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(nums) {
    // let nums = [-4, -1, 0, 3, 10];
    let len = nums.length;
    let result = new Array(len);
    let r = len - 1;
    let j = len - 1;

    for (let i = 0; i <= j;) {
        let left = nums[i] * nums[i];
        let right = nums[j] * nums[j];
        if (left  < right ) {
            result[r] = right;
            j--;
        } else {
            result[r] = left;
            i++;
        }
        r--;
    }
    return result;
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [[-4,-1,0,3,10]], expected: [[0,1,9,16,100]] },
        { args: [[-7,-3,2,3,11]], expected: [[4,9,9,49,121]] }
        // { args: ["a", "aaaaa"], expected: 5 }
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