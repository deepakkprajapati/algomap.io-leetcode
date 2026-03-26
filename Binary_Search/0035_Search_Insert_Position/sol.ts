/**
 * Time:   O(N)
 * Space:  O(1)
 * Strategy: low of Binary search
 */
const solve = (arr: number[], target: number): number => {
    let low: number = 0;
    let high: number = arr.length - 1;
    let mid: number = 0;
    while(low <= high){
        mid = low + Math.floor( (high-low)/ 2 );
        if( target === arr[mid] )
            return mid;
        else if ( target > arr[mid] )
            low = mid + 1;
        else 
            high = mid - 1;
    }
    return low;
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
        { args: [[1,3,5,6], 5], expected: 2 },
        { args: [[1,3,5,6], 2], expected: 1 },
        { args: [[1,3,5,6], 7], expected: 4 },
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
