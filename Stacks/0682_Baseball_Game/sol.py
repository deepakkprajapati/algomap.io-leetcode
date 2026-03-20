class Solution:
    """
    @param arg1: list
    @return: int
    Time:    O(N)
    Space:   O(N)
    Strategy: Stacks Data Structure
    """
    def solve(self, ops: list[str] ) -> int:
        # ✏️ Write your solution here
        result = 0
        stack = []
        for i in ops:
            if i == "+":
                val = stack[-1] + stack[-2]
                stack.append(val)
                result += val
            elif i == "D":
                val = stack[-1] *2
                stack.append(val)
                result += val
            elif i == "C":
                result -= stack.pop()
            else :
                val = int(i)
                stack.append(val)
                result += val
        
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( ["5","2","C","D","+"], ), 30 ),
        (( ["5","-2","4","C","D","9","+","+"], ) , 27 ),
        (( ["1","C"], ), 0 ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
