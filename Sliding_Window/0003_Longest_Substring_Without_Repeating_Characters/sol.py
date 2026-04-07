class Solution:
    """
    @param arg1: type
    @param arg2: type
    @return: return_type
    Time:    O(  )
    Space:   O(  )
    Strategy: [Insert Strategy Name]
    """
    def solve(self, jewels: str , stones: str) -> int:
        # ✏️ Write your solution here
        result = None
        
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()

    test_cases = [
        (( "aA", "aAAbbbb"), 3 ),
        (( "z",  "ZZ") , 0 ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
