/**
 * Time:   O(N * logM)
 * Space:  O(1)
 * Strategy: Binary search application
 */
const solve = (piles: number[], h: number): number => {
    let low : number =1;
    let high : number = Math.max(...piles);
    let mid : number = 0;
    let result: number = high;
    let k: number = 0;
    while(low <= high){
        mid = low + Math.floor((high-low)/2);
        k = piles.reduce((acc, x) => acc + Math.ceil(x/mid) ,0 );

        if(k <= h){
            result = mid;
            high = mid -1;
        }else{
            low = mid +1;
        }
    }
    return result;
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
        { args: [[3,6,7,11],  8], expected: 4 },
        { args: [[30,11,23,4,20], 5], expected: 30 },
        { args: [[30,11,23,4,20], 6], expected: 23 }
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
