/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Variable Sliding Window
 */
const solve = (s: string, k: number): number => {
    let result: number = 0;
    let l: number = 0;
    let freq: number[] = new Array(26).fill(0);
    let maxfq: number = 0;

    for(let r=0; r<s.length; r++){
        freq[s[r].charCodeAt(0) -65]++;
        maxfq= Math.max(maxfq, freq[s[r].charCodeAt(0)-65]);
        
        while(((r-l+1) -maxfq) > k){
            freq[s[l].charCodeAt(0) - 65]--;
            l++;
        }
        result = Math.max(result, r-l+1);
    }
    return result;
};

/**
 * Local testing
 */
interface TestCase {
    args: [string, number]; // Tuple for specific argument types
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: ["ABAB", 2], expected: 4 },
        { args: ["AABABBA", 1], expected: 4 },
        // { args: ["a", "aaaaa"], expected: 5 }
    ];

    testCases.forEach(({ args, expected }, index) => {
        // We use 'as any' or spread carefully because TS can be picky with tuple spreads
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
