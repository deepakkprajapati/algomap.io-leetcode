/**
 * Time:   O(N)
 * Space:  O(1)
 * Strategy: Sliding Window
 */
const solve = (arr: number[], k: number): number => {
    let maxsum :number = 0;
    let windowsum : number = 0;

    for(let i=0; i<k; i++){
        windowsum += arr[i];
    }
    maxsum = windowsum;
    for(let i=k; i<arr.length; i++){
        windowsum += -arr[i-k] + arr[i];
        if(windowsum> maxsum) maxsum = windowsum;
    }
    return maxsum/k;
};

/**
 * Local testing
 */
interface TestCase {
    args: [number[], number]; // Tuple for specific argument types
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: [[1,12,-5,-6,50,3], 4], expected: 12.75 },
        { args: [[5], 1], expected: 5.00 }
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
