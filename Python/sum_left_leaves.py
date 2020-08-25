#################################################
# Find the sum of all left leaves in a given binary tree. (from Leetcode)
#################################################


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


def sumOfLeftLeaves(root):
    if not root:
        return 0

    left_sum = 0

    def recurse(root):
        if not root.left and not root.right:
            return

        if root.left:
            if not root.left.left and not root.left.right:
                nonlocal left_sum
                left_sum += root.left.val
                recurse(root.left)
            recurse(root.left)
        if root.right:
            recurse(root.right)
    recurse(root)

    return left_sum
