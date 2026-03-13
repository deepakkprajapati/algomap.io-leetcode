class Solution:
    """
    @param arg1: type
    @return: None
    Time:    O(N)
    Space:   O(N)
    Strategy: Two-Pointer In-Place Swap
    """
    def solve(self, s: str ) -> None:
        # ✏️ Write your solution here
        #------- pythonic approach
        n = len(s)
        for i in range(n // 2):
            # Note: ~i is a bitwise trick in Python where ~0 is -1, ~1 is -2, etc. It’s very clever, though slightly less readable than your while loop!
            # s[i] is the front, s[~i] is the corresponding back element
            s[i], s[~i] = s[~i], s[i]
        # ---------- standard approach
        # j = len(s) -1
        # i=0
        # while(i<j):
        #     s[i], s[j] = s[j], s[i]
        #     i += 1
        #     j -= 1
        
# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        ((["h","e","l","l","o"],), ["o","l","l","e","h"] ),
        ((["H","a","n","n","a","h"],) , ["h","a","n","n","a","H"] ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: Input={args} | Expected={expected} | Got={result} | {status}")

if __name__ == "__main__":
    run_tests()