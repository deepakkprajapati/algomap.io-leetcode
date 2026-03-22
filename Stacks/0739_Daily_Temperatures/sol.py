class Solution:
    """
    @param arg1: list[int]
    @return: list[int]
    Time:    O(N)
    Space:   O(N)
    Strategy: Monotonic Descreasing Stack
    """
    def solve(self, temps: list[int]) -> list[int]:
        # ✏️ Write your solution here
        result = [0] * len(temps)
        stk = []
        for i in range(len(temps)):
            while(len(stk)>0 and temps[stk[-1]] < temps[i]):
                result[stk[-1]] = i - stk[-1]
                stk.pop()
            stk.append(i)    
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( [73,74,75,71,69,72,76,73] ,), [1,1,4,2,1,1,0,0] ),
        (( [30,40,50,60] ,), [1,1,1,0] ),
        (( [30,60,90] ,),  [1,1,0]),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
