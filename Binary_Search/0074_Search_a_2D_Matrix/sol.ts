/**
 * Time:   O(log N)
 * Space:  O(1)
 * Strategy: Binary search
 */
const solve = (matrix: number[][], target: number): boolean =>{
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let m = matrix.length;
    let n = matrix[0].length;
    let low = 0;
    let high = (m*n) -1;
    let mid = 0;
    let row = 0;
    let col = 0;
    while(low <= high){
        mid = low + Math.floor((high-low)/2);
        row = Math.floor(mid/n);
        col = Math.floor(mid%n);
        if(target > matrix[row][col])
            low = mid +1;
        else if(target < matrix[row][col])
            high = mid -1;
        else
            return true;
    }
    return false;
};

/**
 * Local testing
 */
interface TestCase {
    args: [number[][], number]; // Tuple for specific argument types
    expected: boolean;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 3], expected: true },
        { args: [[[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 13], expected: false },
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
