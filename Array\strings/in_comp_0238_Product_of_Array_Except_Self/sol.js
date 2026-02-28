/**
 * @param {number[]} nums
 * @return {number[]}
 * Time:    O(n)
 * Space:   O(1)
 */
var func = function(nums) {
    // nums = [0,0]
    if(!nums.length) return nums;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let temparr = nums.filter((_, index) => index !== i)
        console.log(temparr);
        result.push( temparr.reduce((acc, cur) => acc * cur, 1) );       
    }
    return result;
};
/**
 * Local testing
 */
function test() {
    // console.log(func(long));
    console.log(func([1,2,3,4]),[24,12,8,6]);     
    console.log(func([-1,1,0,-3,3]), [0,0,9,0,0]);         
}
test();