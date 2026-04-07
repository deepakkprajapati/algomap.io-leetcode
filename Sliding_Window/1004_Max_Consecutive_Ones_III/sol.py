class Solution:
    """
    @param arg1: list[int]
    @param arg2: int
    @return: int
    Time:    O(N)
    Space:   O(N)
    Strategy: Variable Sliding Window
    """
    def solve(self, nums: list[int] , k: int) -> int:
        l = 0
        result = 0
        z_counter = 0

        for r in range(len(nums)):
            if nums[r] == 0:
                z_counter += 1
            while z_counter > k:
                if nums[l] ==0:
                    z_counter -= 1
                l += 1

            result = max(result, r-l+1)
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [1,1,1,0,0,0,1,1,1,1,0], 2), 6 ),
        (( [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],  3) , 10 ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
