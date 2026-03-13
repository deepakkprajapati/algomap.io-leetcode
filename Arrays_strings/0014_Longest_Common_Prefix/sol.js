/**
 * @param {string[]} strs
 * @return {string}
 * Time:    O(n*m)
 * Space:   O(1)
 */
var thefunc = function(strs) {
    if (!strs) return 0;
    //----------- gemini approach
    // // If the input array is empty, there is no prefix to find
    // if (strs == null || strs.length === 0) return "";
    // // Start the recursive process from index 0 to the end of the array
    // return divideAndConquer(strs, 0, strs.length - 1);

    //--------------- my approach
    let fl = strs[0];
    let result = "";
    for (let a = 0; a < fl.length; a++) {
        let k = 0;
        for (let i = 0; i < strs.length; i++) {
            if (fl[a] === strs[i][a]) k++;
        }
        if (k === strs.length) {
            result += fl[a]
        }
        else break;
    }
    return result
};
/**
 * Local testing
 */
function test() {
    console.log(thefunc(["flower","flow","flight"], "fl"));     
    console.log(thefunc(["dog","racecar","car"], ""));         
}
test();

/**
 * Main function to initiate the process
 */
var longestCommonPrefix = function(strs) {
    
};

/**
 * Recursive function that splits the array into halves
 */
function divideAndConquer(strs, l, r) {
    // BASE CASE: If left index equals right index, we are looking at a single word
    if (l === r) {
        return strs[l];
    } else {
        // Find the midpoint to split the array
        let mid = Math.floor((l + r) / 2);
        
        // RECURSIVE STEP:
        // Find the LCP of the left half
        let lcpLeft = divideAndConquer(strs, l, mid);
        // Find the LCP of the right half
        let lcpRight = divideAndConquer(strs, mid + 1, r);
        
        // COMBINE STEP:
        // Find the common prefix between the results of the two halves
        return commonPrefix(lcpLeft, lcpRight);
    }
}

/**
 * Helper function to find the common prefix between exactly two strings
 */
function commonPrefix(left, right) {
    // We only need to loop up to the length of the shorter string
    let min = Math.min(left.length, right.length);
    
    for (let i = 0; i < min; i++) {
        // As soon as characters differ, return the substring up to that point
        if (left[i] !== right[i]) {
            return left.substring(0, i);
        }
    }
    
    // If the loop finishes, one string is a prefix of the other (or they are equal)
    return left.substring(0, min);
}