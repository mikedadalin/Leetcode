/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */


var buildTree = function(inorder, postorder) {
    let post_idx = postorder.length - 1;
    let map = {};
    
    for(let [index, val] of inorder.entries()) {
        map[val] = index;         
    }
    return helper(0, inorder.length - 1);
    
    function helper(in_left, in_right) {
        // the two pointers cross, means the iterate is over
        if(in_left > in_right) return null;
        
        // pick up post_idx element as root
        let root_val = postorder[post_idx];
        let root = new TreeNode(root_val);
        // root splits inorder list 
        // into left and right subtree
        let index = map[root_val];
        
        post_idx--;
        // build right subtree
        root.right = helper(index + 1, in_right);
        // build left subtree
        root.left = helper(in_left, index - 1);
        return root;
    }  
    
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
};

