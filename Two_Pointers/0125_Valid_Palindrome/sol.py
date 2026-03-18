class Solution:
    """
    @param arg1: String
    @return: Boolean
    Time:    O(N)
    Space:   O(1)
    Strategy: Two-Pointer
    """
    def solve(self, s: str) -> bool:
        # ✏️ Write your solution here
        right = len(s) - 1
        key = 0
        while key < right:
            #  Skip non-alphanumeric
            while not s[key].isalnum() and key < right:
                key += 1
            while not s[right].isalnum() and key < right:
                right -= 1
            #  Check for mismatch
            if s[key].lower() != s[right].lower():
                return False
            # Move inward
            key += 1
            right -= 1
        return True

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( "A man, a plan, a canal: Panama",), True ),
        (( "race a car",) , False ),
        (( " ",), True),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()