/**
 * Time:   O(N)
 * Space:  O(N)
 * Strategy: Stacks
 */
const solve = (tokens: string[]): number => {
    // optimised hashmap approach
    const stk: number[] = [];
    // const ops: Map<KeyType, ValueType> = new Map();
    const ops: { [key: string]: (a: number, b: number) => number } = {
        "+" : (a:number, b: number) => a + b,
        "*" : (a:number, b: number) => a * b,
        "-" : (a:number, b: number) => a - b,
        "/" : (a:number, b: number) => Math.trunc(a / b)
    };
    for(const char of tokens){
        if(ops[char]){
            const b = stk.pop()!;
            const a = stk.pop()!;
            stk.push(ops[char](a, b));
        }else {
            stk.push(Number(char));
        }
    }
    return stk[0];
    // if-else approach
    // let stk = new Array;
    // for (let i of tokens) {  
    //     if (i === "/") {
    //         let val = stk.pop()
    //         stk.push(Math.trunc(stk.pop() / val));
    //     }
    //     else if (i === "+") {
    //         stk.push(stk.pop() + stk.pop());
    //     }
    //     else if (i === "-") {
    //         let val = stk.pop()
    //         stk.push(stk.pop() - val);
    //     }
    //     else if (i === "*") {
    //         stk.push(stk.pop() * stk.pop());
    //     }
    //     else {
    //         stk.push(Number(i));
    //     }
    // }
    // return stk[0];
};

/**
 * Local testing
 */
interface TestCase {
    args: string[]; // Tuple for specific argument types
    expected: number;
}

function test(): void {
    const testCases: TestCase[] = [
        { args: ["2","1","+","3","*"], expected: 9 },
        { args: ["4","13","5","/","+"], expected: 6 },
        { args: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], expected: 22 }
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
