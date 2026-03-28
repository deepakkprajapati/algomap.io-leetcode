/**
 * Time:   O(log N)
 * Space:  O(1)
 * Strategy: SQRT using Binary Search
 */
const solve = (num: number): boolean => {
    if(1 === num) return true;
    let low: number = 1;
    let high: number = num/2;
    let mid: number ;
    while(low <= high){
        mid = low + Math.floor((high-low)/2);
        if(mid*mid === num)
            return true;
        else if(num > mid*mid)
            low = mid +1;
        else 
            high = mid -1;
    }
    return false;
};

/**
 * Local testing
 */
interface TestCase {
    args: number; // Tuple for specific argument types
    expected: boolean;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: 16, expected: true },
        { args: 14, expected: false},
        { args: 999999999, expected: false }
    ];

    testCases.forEach(({ args, expected }, index) => {
        // We use 'as any' or spread carefully because TS can be picky with tuple spreads
        const result = solve(args);
        const isPassed = result === expected;
        const status = isPassed ? "✅ PASS" : "❌ FAIL";
        
        console.log(
            `${status} | Test #${index + 1}: ` +
            `Input: ${args} | ` +
            `Expected: ${expected} | ` +
            `Result: ${result}`
        );
    });
}

test();
export {}; // This forces the file to be treated as a module with its own scope
