/**
 * @param {number[]} nums
 * @return {string[]}
 * Time:    O(n)
 * Space:   O(1)
 */
var func = function(nums) {
    let result = []; //["0","2->4","6","8->9"]
    let start = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]+1 != nums[i+1]){
            if(start === nums[i])
                result.push(`${start}`);
            else 
                result.push(`${start}->${nums[i]}`);
            start = nums[i+1];
        }
    }
    // console.log(result);
    return result;
};
/**
 * Local testing
 */
function test() {
    console.log(func([0,1,2,4,5,7]),["0->2","4->5","7"]);     
    console.log(func([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"]);         
}
test();