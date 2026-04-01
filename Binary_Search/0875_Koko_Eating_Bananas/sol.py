import math
class Solution:
    """
    @param arg1: list[int]
    @param arg2: int
    @return: int
    Time:    O(N logM)
    Space:   O(1)
    Strategy: Binary Search application
    """
    def solve(self, piles: list[int] , h: int) -> int:
        result = 0
        low = 1
        high = max(piles)
        mid = 0
        while low <= high:
            mid = low + (high-low)//2
            currhrs = 0
            for x in piles:
                currhrs += math.ceil(x/mid)
            if currhrs <= h:
                result = mid
                high = mid -1
            else:
                low = mid +1

        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [3,6,7,11], 8), 4 ),
        (( [30,11,23,4,20],  5) , 30 ),
        (( [30,11,23,4,20],  6) , 23 ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
