/**
 * @param {string} word1
 * @param {string} word2
 * @return {string} result
 * Time:    O(n)
 * Space:   O(1)
 */
var mergeAlternately = function(word1, word2) {
    if ( !word1 && !word2 ) return "no";
    let result = '';
    let len = word1.length + word2.length;
    for (let i=0,j=0,r=0; r < len;) {
        if(i<word1.length){
            result += word1[i];
            i++;
            r++;
        }
        if(j<word2.length){
            result += word2[j];
            j++;
            r++;
        }   
    }
    return result;
};
/**
 * Local testing
 */
function test() {
    console.log(mergeAlternately("abc","pqr"));     // 
    // console.log(mergeAlternately("",""));         // 
    // console.log(mergeAlternately([3,3], 6));           // 
    // console.log(mergeAlternately([], 1));             // 
}
test();