/**
 * @param {string} s
 * @return {number}
 * Time:    O(n)
 * Space:   O(1)
 */
var thefunc = function(s) {
    // fast approach
    // const roman = {
    //     'I': 1, 'V': 5, 'X': 10, 'L': 50,
    //     'C': 100, 'D': 500, 'M': 1000
    // };
    // let result = 0;
    // let lastValue = 0;
    // // Loop from right to left
    // for (let i = s.length - 1; i >= 0; i--) {
    //     let current = roman[s[i]];   
    //     if (current < lastValue) {result -= current;
    //     } else {
    //         result += current;
    //         lastValue = current; // Update the threshold
    //     }
    // }
    // return result;
    //////////// my best approach
    if ( !s ) return -1;
    let result = 0;
    const roman = new Map([
        ["I", 1], ["V", 5], ["X", 10], ["L", 50],
        ["C", 100], ["D", 500], ["M", 1000]
    ]);
    if ( s.length ===1 ) return roman.get(s[0]);
    for (let i = 0; i < s.length; i++) {
        let current = roman.get(s[i]);
        let next = roman.get(s[i + 1]);
        if(next > current){
            result -= roman.get(s[i]);    
        }else{
            result += roman.get(s[i]);
        }
    }
    return result;
};
/**
 * Local testing
 */
function test() {
    console.log(thefunc(""));    
    console.log(thefunc("III"));        
    console.log(thefunc("LVIII"));          
    console.log(thefunc("MCMXCIV"));            
}
test();