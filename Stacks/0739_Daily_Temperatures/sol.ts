/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Monotonic Decreasing Stack
 */
const solve = (temps: number[]): number[] => {
    let result = new Array(temps.length).fill(0);
    let stk = new Array;

    for( let i=0; i<temps.length; i++ ){
        while( stk.length && temps[stk.at(-1)] < temps[i] ){
            result[stk.at(-1)] = i-stk.pop();
        }
        stk.push(i);
    }
    return result;
};

/**
 * Local testing
 */
interface TestCase {
    args: number[]; 
    expected: number[];
}

function test(): void {
    const testCases: TestCase[] = [
        { args: [73,74,75,71,69,72,76,73], expected: [1,1,4,2,1,1,0,0] },
        { args: [30,40,50,60], expected: [1,1,1,0] },
        { args: [30,60,90], expected: [1,1,0] }
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
