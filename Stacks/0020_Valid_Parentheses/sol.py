class Solution:
    """
    @param arg1: String
    @return: bool
    Time:    O(N)
    Space:   O(1)
    Strategy: Stacks + Hashmap
    """
    def solve(self, s: str) -> bool:
        # ✏️ Write your solution here
        stk = []
        paren = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }
        for i in s:
            if i in paren :
                if not stk or stk.pop() != paren[i]:
                    return False
            else:
                stk.append(i)
        
        return not stk

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( "()", ), True ),
        (( "()[]{}", ), True ),
        (( "(]", ) , False ),
        (( "([])", ), True ),
        (( "([)]", ) , False ),
        (( "]", ) , False ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
