/**
 * @param {number[]} prices
 * @return {number}
 * Time:    O(n)
 * Space:   O(1)
 */
var thefunc = function(prices) {
    if (!prices || prices.length < 2) return 0;
    let max = 0, ld = prices[0];
    // gemini approach
    for (let i = 1; i < prices.length; i++) {
        if( ld > prices[i] ) ld = prices[i];
        if( max < prices[i]-ld ) max = prices[i]-ld; 
    }return max
    // my aproach
    // for (let i = 1; i < prices.length; i++) {
    //     if(prices[i+1] > ld){
    //         if(max< prices[i+1] - ld )
    //         max = prices[i+1] - ld;
    //     }
    //     else {
    //         ld = prices[i+1];
    //     }
    // }
    return max ;
};
/**
 * Local testing
 */
function test() {
    console.log(thefunc([7,1,5,3,6,4], "5"));     
    console.log(thefunc([7,6,4,3,1], "0"));         
    // console.log(thefunc([3,3], 6));           
    // console.log(thefunc([], 1));             
}
test();