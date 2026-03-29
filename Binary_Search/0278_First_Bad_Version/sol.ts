/**
 * Time:   O(log N)
 * Space:  O(1)
 * Strategy: Convergence strategy
 */
let currentBadVersion: number;
const isBadVersion = (version: number): boolean => version >= currentBadVersion;

const solve = (n: number): number => {    
    let low: number = 1;
    let high: number = n;
    let mid: number;
    while(low !== high){
        mid = low + Math.floor((high-low)/2);
        if( isBadVersion(mid) )
            high = mid;
        else 
            low = mid +1;
    }
    return low;

};

/**
 * Local testing
 */
interface TestCase {
    n: number;
    bad: number; 
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { n: 5, bad: 4, expected: 4 },
        { n: 1, bad: 1, expected: 1 }
        ];

    testCases.forEach(({ n, bad, expected }, index) => {
        currentBadVersion = bad;
        const result = solve(n);
        const isPassed = result === expected;
        const status = isPassed ? "✅ PASS" : "❌ FAIL";
        
        console.log(
            `${status} | Test #${index + 1}: ` +
            `Input: n: ${n}, bad: ${n} | ` +
            `Expected: ${expected} | ` +
            `Result: ${result}`
        );
    });
}

test();
export {}; // This forces the file to be treated as a module with its own scope
