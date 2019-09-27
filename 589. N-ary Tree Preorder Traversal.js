/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // edge case 
    if(root == null) return [];
    let ans = [root.val];
                
    function helper(root) {
        if(root == null) return;
        if(root.children == null) return;

        for(let i = 0; i < root.children.length; i++) {
            ans.push(root.children[i].val);
            helper(root.children[i], ans);
        }            
    }
    
    helper(root);
    
    return ans;        
};

