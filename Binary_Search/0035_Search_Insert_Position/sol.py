class Solution:
    """
    @param arg1: List[int]
    @param arg2: int
    @return: int
    Time:    O(N)
    Space:   O(1)
    Strategy: low of Binary search
    """
    def solve(self, arr: list[int] , target: int) -> int:
        low = 0
        high = len(arr) -1
        mid = None
        while low <= high:
            mid = low + (high-low)//2
            if target > arr[mid]:
                low = mid +1
            elif target < arr[mid]:
                high = high -1
            else:
                return mid
            
        return low

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    # Format: ((arg1, arg2, ...), expected_output)
    # ((arg1,), expected) ------for only ONE argument
    # The comma is REQUIRED for tuple unpacking.
    test_cases = [
        (([1,3,5,6], 5), 2 ),
        (([1,3,5,6], 2), 1 ),
        (([1,3,5,6], 7), 4 ),
        (([5], 5), 0),
        (([5], -5), 0),
        # Add more cases here
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
