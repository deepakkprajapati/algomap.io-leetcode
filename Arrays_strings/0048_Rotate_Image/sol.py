class Solution:
    def thefunc(self, matrix: list[list[int]]) -> list[list[int]]:
        n = len(matrix)
        if (n==0):
            return matrix
        for i in range(n):
            for j in range(i+0, n):
                temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp

        for i in range(n):
            for j in range(int(n/2)):
                temp = matrix[i][j]
                matrix[i][j] = matrix[i][n-1-j]
                matrix[i][n-1-j] = temp
        
        return matrix
    
# 2. LOCAL TEST SUITE
def run_tests():
    sol = Solution()
    # Format: (Arguments, Expected Output)
    test_cases = [
        ([[1,2,3],[4,5,6],[7,8,9]], [[7,4,1],[8,5,2],[9,6,3]] ),
        ([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] ),
        # Add more cases here
    ]
    for args, expected in test_cases:
        # Use *args to unpack tuple into function arguments
        result = sol.thefunc(args)
        print(f"Input: {args} | Expected: {expected} | Result: {result}")
if __name__ == "__main__":
    run_tests()