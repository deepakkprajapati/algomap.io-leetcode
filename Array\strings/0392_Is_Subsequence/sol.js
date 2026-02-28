/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time:    O(n)
 * Space:   O(1)
 */
var thefunc = function(s,t) {
    if(s === t) return true;
    
    for (let i = 0,j=0; i < t.length; i++) {
        if(s[j] === t[i]){
            j++
        }
        if(s.length === j) return true;
    }
    return false;
};
/**
 * Local testing
 */
function test() {
    console.log(thefunc("abc", "ahbgdc"));     
    console.log(thefunc("axc", "ahbgdc"));      
    console.log(thefunc("",""));              
}
test();