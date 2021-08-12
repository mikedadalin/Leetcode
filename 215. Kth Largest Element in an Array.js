/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort(function(a,b) { return a-b; });
    
    let queue = [];
    let count = 0;
    while(count < k) {
        let tmp = nums.pop();
        if(queue.length == 0) {
            queue.push(tmp);
            count++;
        } else if(queue[count] != tmp) {
            queue.push(tmp);    
            count++;   
        }
    }
    
    return queue.pop();
};
