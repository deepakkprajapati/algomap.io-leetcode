/**
 * Time:   O(N + M)
 * Space:  O(N)
 * Strategy: [Insert Strategy Name]
 */
const solve = (arg1: string): boolean => {
    let stack = [];
    let paren = new Map([
        [ ")" , "(" ],
        [ "]" , "[" ],
        [ "}" , "{" ]
    ]);
    for(let char of arg1){
        if( paren.has(char) ){
            if( stack.pop() !== paren.get(char) ){
                return false;
            }
        }else { stack.push(char); }
    }
    return (stack.length===0);
};

/**
 * Local testing
 */
interface TestCase {
    args: string; // Tuple for specific argument types
    expected: boolean;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: "()", expected: true },
        { args: "()[]{}", expected: true },
        { args: "(]", expected: false },
        { args: "([])", expected: true },
        { args: "([)]", expected: false }
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