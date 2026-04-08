/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Variable Sliding Window
 */
const solve = (target: number, nums: number[]): number => {
    let l: number = 0;
    let summ: number = 0;
    let result: number = Infinity;

    for(let r=0; r<nums.length; r++){
        summ += nums[r];

        while(target <= summ){
            result = Math.min(result, r-l+1);
            summ -= nums[l];
            l++;
        }
    }
    return (result === Infinity) ? 0 : result ;
};

/**
 * Local testing
 */
interface TestCase {
    args: [number, number[]]; 
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: [7 , [2,3,1,2,4,3] ], expected: 2 },
        { args: [4 , [1,4,4] ], expected: 1 },
        { args: [11 , [1,1,1,1,1,1,1,1] ], expected: 0 }
    ];

    testCases.forEach(({ args, expected }, index) => {
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
