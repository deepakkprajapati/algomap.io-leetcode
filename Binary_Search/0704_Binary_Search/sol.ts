/**
 * Time:    O(log N)
 * Space:   O(1)
 * Strategy: Binary search implementation
 */
const solve = (arr: number[], target: number): number => {
    let low: number = 0;
    let high: number = arr.length - 1;
    let mid: number = 0;
    while(low <= high){
        mid = Math.floor( (low+high)/ 2 );
        if( target === arr[mid] )
            return mid;
        else if ( target > arr[mid] )
            low = mid + 1;
        else 
            high = mid - 1;
    }
    return -1;
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
        { args: [[-1,0,3,5,9,12], 9], expected: 4 },
        { args: [[-1,0,3,5,9,12], 2], expected: -1 }
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
