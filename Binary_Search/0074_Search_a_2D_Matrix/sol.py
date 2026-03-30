class Solution:
    """
    @param arg1: list[int][int]
    @param arg2: int
    @return: bool
    Time:    O(log N)
    Space:   O(1)
    Strategy: Binary search
    """
    def solve(self, matrix:  list[list[int]], target: int) -> int:
        if(len(matrix) == 0 or len(matrix[0]) == 0):
            return True
        n = len(matrix[0])
        low = 0
        high = (len(matrix) * n) -1
        mid = 0
        while(low <= high):
            mid = low + (high-low)//2
            val = matrix[mid//n][mid%n]
            if(target > val):
                low = mid +1
            elif(target < val):
                high = mid -1
            else:
                return True        
        return False

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 3), True ),
        (( [[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 13), False ),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
