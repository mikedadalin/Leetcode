/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    /*
        res[this time don't rob, this time rob]
    */
    
    let result = helper(root);
    
    return Math.max(result[0], result[1]);
    
    function helper(node) {
        // if node is null then this time rob is 0, this time not rob is 0
        if(node == null) return [0,0]; 
        
        // initialize
        let res = [0,0];
        
        // get left and right node of res 
        let left = helper(node.left);
        let right = helper(node.right);
        
        res[0] = Math.max(left[0],left[1]) + Math.max(right[0],right[1]);
        res[1] = node.val + left[0] + right[0];
        
        return res;
    }
};
