class Solution:
    """
    @param arg1: string
    @param arg2: int
    @return: int
    Time:    O(N)
    Space:   O(N)
    Strategy: Variable Sliding Window
    """
    def solve(self, s: str , k: int) -> int:
        result = 0
        l = 0
        freq = [0] * 26
        maxfq = 0

        for r in range(len(s)):
            freq[ord(s[r])-65] += 1
            maxfq = max(maxfq, freq[ord(s[r])-65])

            while((r-l+1)-maxfq) > k:
                freq[ord(s[l])-65] -= 1
                l += 1

            result = max(result, r-l+1)
        
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( "ABAB", 2), 4 ),
        (( "AABABBA",  1), 4 ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
