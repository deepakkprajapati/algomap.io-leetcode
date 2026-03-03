class Solution:
    """
    @param jewels: str
    @param stones: str
    @return: int
    Time:    O(J + S)
    Space:   O(J)
    """
    def thefunc(self, jewels: str , stones: str) -> int:
        counter = 0
        # ----- using hash_set
        my_jewel = set(jewels)
        for stone in stones:
            if stone in my_jewel:
                counter += 1
        
        # ----- my 1st approach
        # for jewel in jewels:
        #     for stone in stones:
        #         if (jewel == stone):
        #             counter += 1
        
        return counter
    
# 2. LOCAL TEST SUITE
def run_tests():
    sol = Solution()
    # Format: (Arguments, Expected Output)
    test_cases = [
        (( "aA", "aAAbbbb"), 3 ),
        (( "z",  "ZZ") , 0 ),
        # Add more cases here
    ]
    for (arg1, arg2), expected in test_cases:
        # Use *args to unpack tuple into function arguments
        result = sol.thefunc(arg1, arg2)
        print(f"Input: {(arg1, arg2)} | Expected: {expected} | Result: {result}")
if __name__ == "__main__":
    run_tests()