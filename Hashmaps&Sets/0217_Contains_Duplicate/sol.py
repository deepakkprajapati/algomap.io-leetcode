class Solution:
    """
    @param arg1: type
    @param arg2: type
    @return: return_type
    Time:    O(  )
    Space:   O(  )
    Strategy: [Insert Strategy Name]
    """
    def solve(self, nums: int) -> int:
        # ✏️ Write your solution here
        result = set()
        for i in nums:
            if (i in result):
                return True
            else:
                result.add(i)
        return False


# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (([1,2,3,1],), True ),
        (([1,2,3,4],) , False ),
        (([1,1,1,3,3,4,3,2,4,2],), True ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: Input={args} | Expected={expected} | Got={result} | {status}")

if __name__ == "__main__":
    run_tests()