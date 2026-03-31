/**
 * Time:   O(log N)
 * Space:  O(1)
 * Strategy: modified Binary search
 */
const solve = (nums: number[], target: number): number => {
    if(nums.length ===1 && nums[0] !== target) return -1;
    let low: number = 0;
    let high: number = nums.length -1;
    let mid: number = 0;
    while(low <= high){
        mid = low + Math.floor((high-low)/2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] >= nums[low]){
            if(target >= nums[low] && target < nums[mid])
                high = mid -1;
            else 
                low = mid +1;
        }else{
            if(target <= nums[high] && target > nums[mid])
                low = mid +1;
            else 
                high = mid -1;
        }
    }    
    return -1;
};

/**
 * Local testing
 */
interface TestCase {
    args: [number[], number]; 
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: [[4,5,6,7,0,1,2], 0], expected: 4 },
        { args: [[4,5,6,7,0,1,2], 3], expected: -1 },
        { args: [[1], 0], expected: -1 }
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
