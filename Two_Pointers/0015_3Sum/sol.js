/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time:    O(N*N)
 * Space:   O(1)
 * Strategy: Two Pointers (with Sorting)
 */
var func = function(nums) {
    let result = [];
    //sort array for 2-pointer approach
    nums.sort((a,b)=> a-b); //typeerror nums.sort is not a function
    let len = nums.length;

    for(let i=0; i<len; i++){
        // skip duplicate
        if(i>0 && nums[i]=== nums[i-1]) continue;
        let left = i+1;
        let right = len-1;
        
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0){
                result.push( [nums[i], nums[left], nums[right]] );
                left = left + 1;
                right = right - 1;
                // check for duplicates
                while(left<right && nums[left] === nums[left -1]) left = left + 1;
                while(left<right && nums[right] === nums[right +1]) right = right - 1;
            }
            else if (sum > 0){
                right = right - 1;
            }
            else {
                left = left + 1;
            }
        }
    }
    return result;
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: [-1,0,1,2,-1,-4], expected: [[-1,-1,2],[-1,0,1]] },
        { args: [0,1,1], expected: [] },
        { args: [0,0,0], expected: [[0,0,0]] }
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