//---- JavaScript 6.37% ----//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
    /*
        1. traversal the BST to find all the element and output as an array
        2. using the method of "two sum" to find the anwser
            a. put the element of arr to map (hash table)
            b. if you can find the element in map which is target - current arr element value, then return true
            c. otherwise, return false    
    */
       
    var arr = [];
    
    // inorder BST traversal
    inorderTraversal(root,arr);
    
    var map = {};
    
    for(var i = 0; i < arr.length; i++) {
        if(map[k - arr[i]] >= 0)
            return true;
        else
            map[arr[i]] = 1;
    }
    
    return false;
    
};


// inorder BST traversal
var inorderTraversal = function(root,arr) {
    if(root == null)
        return;
            
    inorderTraversal(root.left,arr);        
    
    arr.push(root.val);
    
    inorderTraversal(root.right,arr)
}

