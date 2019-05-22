/----- JavsScript 99.54% -----/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /*************************************************************
        If the current element is bigger than
        prefix sum + current element, then replace the max with it
        
        however, if it is not, then replace the prefix sum as
        prefix sum + current. (new prefix sum) and set it as max.
        (Keep building the prefix sum)
        
        Compare the new max and old max.
    
    *************************************************************/
    
    let max = (-Number.MAX_VALUE);
    let prev = 0;
    
    for(let i = 0; i < nums.length; i++) {
        prev = Math.max(prev+nums[i], nums[i]);
        max = Math.max(prev,max);
    }
    
    return max;
};
