class Solution:
    """
    @param arg1: list[int]
    @param arg2: int
    @return: float
    Time:    O(N)
    Space:   O(1)
    Strategy: Sliding Window
    """
    def solve(self, nums: list[int] , k: int) -> float:
        maxsum = 0
        windowsum = 0
        for i in range(k):
            windowsum += nums[i]
        
        maxsum = windowsum
        
        for i in range(k,len(nums)):
            windowsum += -nums[i-k] + nums[i]
            if windowsum>maxsum: maxsum = windowsum
        
        return maxsum/float(k)

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [1,12,-5,-6,50,3], 4), 12.75 ),
        (( [5],  1) , 5.00 ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
