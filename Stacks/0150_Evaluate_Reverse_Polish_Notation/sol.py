class Solution:
    """
    @param arg1: list[String]
    @return: int
    Time:    O(N)
    Space:   O(N)
    Strategy: Hashmap + Stack
    """
    def solve(self, tokens: list[str]) -> int:
        # ✏️ Write your solution here
        stk = []
        ops = {
            "+" : lambda a, b: a + b,
            "*" : lambda a, b: a * b,
            "-" : lambda a, b: a - b,
            "/" : lambda a, b: int(a / b)
        }
        for i in tokens:
            if i in ops:
                val = stk.pop()
                stk.append(ops[i](stk.pop(), val))
            else:
                stk.append(int(i))
        return stk[0]

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( ["2","1","+","3","*"], ), 9 ),
        (( ["4","13","5","/","+"], ) , 6 ),
        (( ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], ) , 22 ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
