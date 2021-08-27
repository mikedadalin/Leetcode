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
    if(root == null) return root;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        let level = queue.length;
        for(let i = 0; i < level; i++) {
            let node = queue.shift()
            
            // if there is still node left in current level
            // assign the node.next
            if(i < level - 1) {
                node.next = queue[0];
            }
            
            if(node.left != null)
                queue.push(node.left);
            if(node.right != null)
                queue.push(node.right);
        }
    }
    
    return root;
};
