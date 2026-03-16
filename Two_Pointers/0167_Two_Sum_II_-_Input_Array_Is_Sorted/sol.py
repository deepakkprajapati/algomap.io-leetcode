class Solution:
    """
    @param arg1: type
    @return: None
    Time:    O(N)
    Space:   O(N)
    Strategy: Two-Pointer In-Place Swap
    """
    def solve(self, numbers: list[int], target : int ) -> list[int]:
        # ✏️ Write your solution here
        j = len(numbers) -1
        i = 0
        while i<j :
            if target == numbers[i] + numbers[j] :
                return [i+1, j+1]
            elif target < numbers[i] + numbers[j] :
                j=j-1
            else:
                i=i+1
        
# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (([2,7,11,15], 9), [1,2] ),
        (([2,3,4], 6 ) , [1,3] ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: Input={args} | Expected={expected} | Got={result} | {status}")

if __name__ == "__main__":
    run_tests()