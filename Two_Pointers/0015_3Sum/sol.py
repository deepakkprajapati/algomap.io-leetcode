class Solution:
    """
    @param arg1: List[int]
    @return: List[int]
    Time:    O(N^2)
    Space:   O(1)
    Strategy: Two Pointers (with Sorting)
    """
    def solve(self, nums: list ) -> list:
        # ✏️ Write your solution here
        nums.sort()
        result = list()
        l = len(nums)
        for i in range(l):
            if nums[i] > 0:
                break
            if(i>0 and nums[i] == nums[i-1]):
                continue
            left = i+1
            right = l-1
            while(left <right):
                csum = nums[i] + nums[left] + nums[right]
                if csum == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    right=right-1
                    left+=1
                    # skip duplicates
                    while(left<right and nums[left] == nums[left -1]):
                        left = left + 1
                    while(left<right and nums[right] == nums[right +1]):
                        right = right - 1
                elif csum > 0:
                    right-=1
                else:
                    left+=1
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( [-1,0,1,2,-1,-4],), [[-1,-1,2],[-1,0,1]] ),
        (( [0,1,1], ) , [] ),
        (( [0,0,0], ) , [[0,0,0]] ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()