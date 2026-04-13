from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# array[BSF] to Node Binary-Tree
def arrToNode(arr):
    if not arr :
        return None
    q = deque()
    root = TreeNode(arr[0])
    q.append(root)
    i = 1
    while (q):
        curr = q.popleft()
        if(i < len(arr)):
            if arr[i] is not None:
                curr.left = TreeNode(arr[i])
                q.append(curr.left)
            i += 1
        if(i < len(arr)):
            if arr[i] is not None:
                curr.right = TreeNode(arr[i])
                q.append(curr.right)
            i += 1
    return root

# Node to array[BSF] Binary-Tree
def nodeToArr(root):
    if not root:
        return []
    arr = []
    q = deque()
    q.append(root)

    while(q):
        curr = q.popleft()
        if curr:
            arr.append(curr.val)
            q.append(curr.left)
            q.append(curr.right)
        else:
            arr.append(None)
    while arr and arr[-1] is None:
        arr.pop()
    return arr

# **SOLUTION**
def mysol(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    mysol(root.left)
    mysol(root.right)
    return root

class Solution:
    """
    @param arg1: list[int]
    @return: list[int]
    Time:    O(N)
    Space:   O(N)
    Strategy: Binary Tree
    """
    def solve(self, bfstree: list[int] ) -> list[int]:
        root = arrToNode(bfstree)

        res = mysol(root)

        result = nodeToArr(res)
        return result

# ================ 🧪 Local Test Suite ======================================
def run_tests():
    sol = Solution()
    test_cases = [
        (( [4,2,7,1,3,6,9],), [4,7,2,9,6,3,1] ),
        (( [2,1,3],),  [2,3,1] ),
        (( [],), []),
    ]
    for i, (args, expected) in enumerate(test_cases, 1):
        result = sol.solve(*args)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"Test {i}: | {status} | Input={args} | Expected={expected} | Got={result}")

if __name__ == "__main__":
    run_tests()
