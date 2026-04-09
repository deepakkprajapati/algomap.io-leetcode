class Solution:
    """
    @param arg1: list[int]
    @param arg2: int
    @return: int
    Time:    O(N)
    Space:   O(N)
    Strategy: Variable sliding window (min)
    """
    def solve(self, nums: list[int] , target: int) -> int:
        l, summ = 0, 0
        result = 10**10
        
        for r in range(len(nums)):
            summ += nums[r]

            while(target <= summ):
                result = min(result, r-l+1)
                summ -= nums[l]
                l += 1
        
        if(result == 10**10):
            return 0
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [2,3,1,2,4,3], 7), 2 ),
        (( [1,4,4],  4), 1 ),
        (( [1,1,1,1,1,1,1,1],  11), 0 ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
