/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let p = l1;
    let q = l2;
    let curr = l3;
    let carry = 0;
    while(p != null || q != null) {
        let val1 = (p != null) ? p.val : 0;
        let val2 = (q != null) ? q.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;  
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    
    if(carry > 0)
        curr.next = new ListNode(carry);
    
    return l3.next;    
};
