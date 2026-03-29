class Solution:
    """
    @param arg1: n
    @param arg2: int
    @param arg3: int
    @return: int
    Time:    O(logN)
    Space:   O(1)
    Strategy: Binary search convergence
    """
    
    def solve(self, n: int ) -> int:
        low = 1
        high = n 
        mid = 0
        while(low != high):
            mid = low + (high-low)//2
            if (isBadVersion(mid)):
                high = mid
            else:
                low = mid +1
        return low

# ================ 🧪 Local Test Suite ======================================

def isBadVersion(version: int)-> bool:
    return version >= mockBadVersion

def run_tests():
    sol = Solution()
    test_cases = [
        ( 5 , 4, 4 ),
        ( 1 , 1, 1 ),
        ( 2 , 2, 2 ),
        ( 10, 7, 7 ),
    ]
    for i, (args, bad , expected) in enumerate(test_cases, 1):
        global mockBadVersion
        mockBadVersion= bad
        result = sol.solve(args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
