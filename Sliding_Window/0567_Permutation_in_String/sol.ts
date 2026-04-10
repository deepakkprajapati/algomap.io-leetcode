/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Variable Sliding Window
 */
const solve = (s1: string, s2: string): boolean => {
    if(s1.length > s2.length) return false;
    let l: number = 0;
    let freqs1: number[] = new Array(26).fill(0);
    let windowfreq: number[] = new Array(26).fill(0);

    for(let i=0; i<s1.length; i++){
        windowfreq[s2[i].charCodeAt(0) -97]++;
        freqs1[s1[i].charCodeAt(0) -97]++;
    }

    if (freqs1.reduce((acc, val, idx) => acc && val === windowfreq[idx], true)) return true;

    for(let r=s1.length; r<s2.length; r++){
        windowfreq[ s2[r].charCodeAt(0) -97 ]++;
        windowfreq[ s2[r - s1.length].charCodeAt(0) -97 ]--;

        if (freqs1.reduce((acc, val, idx) => acc && val === windowfreq[idx], true)) return true;
    }
    return false;
};

/**
 * Local testing
 */
interface TestCase {
    args: [string, string]; 
    expected: boolean;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: ["ab", "eidbaooo" ], expected: true },
        { args: ["ab", "eidboaoo" ], expected: false },
    ];

    testCases.forEach(({ args, expected }, index) => {
        const result = solve(...args);
        const isPassed = result === expected;
        const status = isPassed ? "✅ PASS" : "❌ FAIL";
        
        console.log(
            `${status} | Test #${index + 1}: ` +
            `Input: ${JSON.stringify(args)} | ` +
            `Expected: ${expected} | ` +
            `Result: ${result}`
        );
    });
}

test();
export {}; // This forces the file to be treated as a module with its own scope
