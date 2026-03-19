class Solution:
    """
    @param arg1: list
    @return: int
    Time:    O(N)
    Space:   O(1)
    Strategy: Two-Pointer
    """
    def solve(self, heights: list ) -> int:
        # ✏️ Write your solution here

        max_area = 0
        left = 0
        right = len(heights) -1

        while left < right:
            curr_area = (right-left) * (min(heights[left], heights[right]))
            # max_area = max(max_area, curr_area)
            if curr_area > max_area:
                max_area = curr_area
            if(heights[left]< heights[right]):
                left+=1
            else:
                right-=1
    
        return max_area

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (( [1,8,6,2,5,4,8,3,7], ), 49 ),
        (( [1,1], ) , 1 ),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
