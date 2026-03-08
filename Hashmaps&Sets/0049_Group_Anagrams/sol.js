/**
 * @param {string[]} strs
 * @return {string[][]}
 * Time:    O(N + M)
 * Space:   O(N)
 * Strategy: [Insert Strategy Name]
 */
var func = function(strs) {
    // ~~~~~~~~~~~~~~~~~~~~ fastest approach
    const res = {};
    for (let s of strs) {
        // Create an array of 26 zeros
        const count = new Array(26).fill(0);
        for (let char of s) {
            // Get the index (0-25) by subtracting 'a' char code
            // 'a'.charCodeAt(0) is 97
            count[char.charCodeAt(0) - 97]++;
        }
        // Use the array as a unique key (JS converts it to a string "0,1,0,..." automatically)
        const key = count.join(',');   
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    }
    return Object.values(res);
    // ~~~~~~~~~~~~~~~~~~~~ standard appraoch
    // if(!strs.length) return strs;
    // const mymap = new Map();
    // for(let str of strs){
    //     // 1. Create the key by sorting the string
    //     let sort_str_key = str.split('').sort().join('');
    //     // 2. If the key doesn't exist, initialize an empty array
    //     if (!map.has(sort_str_key)) {
    //         map.set(sort_str_key, []);
    //     }
    //     // 3. Push the original string into the map at that key
    //     map.get(sortedKey).push(str);
    // }
    // // 4. Return all the grouped arrays
    // return Array.from(map.values());

    // ~~~~~~~~~~~~~~~~~~~~~ my approach
    // if(!strs.length) return strs;
    // const mymap = new Map();
    // mymap.set(strs[0].split('').sort().join(''), [strs[0]]);
    // for (let i = 1; i < strs.length; i++) {
    //     let curr_sor_str = strs[i].split('').sort().join('');
    //     if (mymap.has(curr_sor_str)) {
    //         mymap.get(curr_sor_str).push(strs[i]);
    //     }
    //     else mymap.set(curr_sor_str, [strs[i]]);
    // }
    // return Array.from(mymap.values());
};
/**
 * Local testing
 */
function test() {
    const testCases = [
        { args: ["eat","tea","tan","ate","nat","bat"], expected: [["bat"],["nat","tan"],["ate","eat","tea"]] },
        { args: [""], expected: [[""]] },
        { args: ["a"], expected: [["a"]] }
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