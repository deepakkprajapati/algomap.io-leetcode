/**
 * @param {number[]} nums
 * @return {number} bestIdx
 * Time:    O(n)
 * Space:   O(1)
 */
var closestToZero = function(nums) {
    if (nums == null) return -1;
    let bestIdx = 0;

    for (let i = 1; i < nums.length; i++) {
        if(Math.abs(nums[bestIdx]) > Math.abs(nums[i]))
            bestIdx = i;
        else if (Math.abs(nums[bestIdx]) == Math.abs(nums[i]) && nums[i] > nums[bestIdx]){
            bestIdx = i;
        }
    }
    return nums[bestIdx];
};
/**
 * Local testing
 */
function test() {
    console.log(closestToZero([-4,-2,1,4,8]));     // 
    console.log(closestToZero([2,-1,1]));         // 
    // console.log(closestToZero([3,3], 6));           // 
    // console.log(closestToZero([], 1));             // 
}
test();