/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Time:    O(Nlog(n))
 * Space:   O(N)
 */
var func = function(intervals) {
    if(!intervals.length) return intervals;
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        if(res.length === 0 || intervals[i][0] > res.at(-1)[1]){
            res.push(intervals[i]);
        }
        else{ 
            res.at(-1)[1] = Math.max(res.at(-1)[1], intervals[i][1]); 
        }    
    }return res;

    //----------- Approach 1
    // for (let i = 0; i < intervals.length; i++) {
    //     if (intervals[i][0 + 1] > intervals[i + 1][0])
    //         res.push([intervals[i][0], intervals[i + 1][i + 1]])
    //     else res.push(intervals[i + 1])
    //     if (i + 2 === intervals.length) break;
    // }
    // return res;
};
/**
 * Local testing
 */
function test() {
    console.log(func( [[1,3],[2,6],[8,10],[15,18]] )+" correct is "+[[1,6],[8,10],[15,18]] );     
    console.log(func( [[4,7],[1,4]] )+" correct is "+[[1,7]] );         
}
test();