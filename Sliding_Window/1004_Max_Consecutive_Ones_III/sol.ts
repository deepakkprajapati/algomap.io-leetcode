/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Variable Sliding Window
 */
const solve = (nums: number[], k: number): number => {
    let l: number = 0;
    let z_counter: number = 0;
    let len: number = 0;

    for(let r=0; r<nums.length; r++){
        if(nums[r] === 0) z_counter++;
        while(z_counter > k){
            if(nums[l] === 0) z_counter--;
            l++;
        }
        len = Math.max(len, r-l+1);
    }
    return len;
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
        { args: [[1,1,1,0,0,0,1,1,1,1,0], 2], expected: 6 },
        { args: [[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3], expected: 10 },
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
