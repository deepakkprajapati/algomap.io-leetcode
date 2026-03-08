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
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        ([ "eat","tea","tan","ate","nat","bat"], [["bat"],["nat","tan"],["ate","eat","tea"]] ),
        ([ " "] , [[" "]] ),
        ([ "a"] , [["a"]] ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: Input={args} | Expected={expected} | Got={result} | {status}")

if __name__ == "__main__":
    run_tests()