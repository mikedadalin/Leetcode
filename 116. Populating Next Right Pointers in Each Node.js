/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // edge case 
    if(root == []) return [];
    helper(root);
    function helper(node){
        if(node == null) return;
        
        if(node.left != null && node.right != null) {
            node.left.next = node.right;
            node.right.next = node.next;
        }
        
        helper(node.left);
        helper(node.right);
        
    }
    return root;
};
