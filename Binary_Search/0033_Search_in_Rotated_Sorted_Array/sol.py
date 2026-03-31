class Solution:
    """
    @param arg1: list[int]
    @param arg2: int
    @return: int
    Time:    O(log N)
    Space:   O(1)
    Strategy: modified Binay search
    """
    def solve(self, nums: list[int] , target: int) -> int:
        if len(nums) <1: return False
        low = 0
        high = len(nums) -1
        mid = 0
        while (low <= high):
            mid = low + (high-low)//2
            if target == nums[mid]:
                return mid
            if nums[low] <= nums[mid]:
                if nums[low] <= target and target < nums[mid]:
                    high = mid -1
                else:
                    low = mid +1
            else:
                if nums[mid] < target and target <= nums[high]:
                    low = mid +1
                else:
                    high = mid -1     
        return -1

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [4,5,6,7,0,1,2], 0), 4 ),
        (( [4,5,6,7,0,1,2], 3) , -1 ),
        (( [1], 0), -1),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
