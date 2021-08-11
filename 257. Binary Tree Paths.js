/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // edge case
    if(root == null) return [];
    
    let result = [];
    
    function dfs(node, arr, str) {
        if(node == null) return;
    
        // save the path 
        str += node.val;
        
        // if no children then the path is over
        if(node.left == null && node.right == null) { 
            arr.push(str);
        } 
        // if still have children continue
        else {
            dfs(node.left, arr, str + '->');
            dfs(node.right, arr, str + '->');    
        }
    }
    
    dfs(root, result, '');
    return result;
};
