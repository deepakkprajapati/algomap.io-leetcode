/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Variable Sliding Window
 */
const solve = (s: string): number => {
    let l: number = 0;
    let result: number = 0;
    let sett = new Set();

    for(let r=0; r<s.length; r++){
        while(sett.has(s[r])){
            sett.delete(s[l]);
            l++;
        }
        sett.add(s[r]);
        result = Math.max(result, r-l+1);
    }
    return result;
};

/**
 * Local testing
 */
interface TestCase {
    args: string; // Tuple for specific argument types
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: "abcabcbb", expected: 3 },
        { args: "bbbbb", expected: 1 },
        { args: "pwwkew", expected: 3 }
    ];

    testCases.forEach(({ args, expected }, index) => {
        // We use 'as any' or spread carefully because TS can be picky with tuple spreads
        const result = solve(args);
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
