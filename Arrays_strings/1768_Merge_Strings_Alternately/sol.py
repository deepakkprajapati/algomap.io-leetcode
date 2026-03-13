class Solution:
    def findClosestNumber(self, nums: list[int]) -> int:
        # 1. Initialize with the first element
        closest = nums[0]
        # 2. Iterate through the remaining elements
        for x in nums:
            # Tie-breaker logic: 
            # If absolute distance is smaller, or distances are equal but x is larger
            if abs(x) < abs(closest):
                closest = x
            elif abs(x) == abs(closest) and x > closest:
                closest = x
        return closest
    
# 2. LOCAL TEST SUITE
def run_tests():
    sol = Solution()
    
    # Format: (Arguments, Expected Output)
    test_cases = [
        ([-4,-2,1,4,8], 1),
        ([2, -1, 1], 1),
        # Add more cases here
    ]
    for args, expected in test_cases:
        # Use *args to unpack tuple into function arguments
        result = sol.findClosestNumber(args)
        print(f"Input: {args} | Expected: {expected} | Result: {result}")
if __name__ == "__main__":
    run_tests()