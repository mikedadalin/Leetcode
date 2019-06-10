/----- JavsScript 99.73%  -----/
/**
 * @param {number[]} nums
 * @return {number}
 * related topic: Dynamic programming, Array
 */
var maxProduct = function(nums) {
    
    /*************************************************************************************
        Use two DP arrays.
        
        prefix product array => [a, axb, axbxc, ...]
        
        f[] use to save the max value from each multiplication
        g[] use to save the min value from each multiplication
        
        the reason of g[] is bc if the next nums[i] is negative number,
        it is possible to make the min become max.
        
        compare f[i-1] * nums[i], g[i-1] * nums[i], nums[i]
        to find the new max and new min
        
        assign the new max to the res.
        
    *************************************************************************************/
            
    let f = [nums[0]];
    let g = [nums[0]];
    let res = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        f[i] = Math.max(f[i-1]*nums[i],g[i-1]*nums[i], nums[i]);
        g[i] = Math.min(f[i-1]*nums[i],g[i-1]*nums[i], nums[i]);
        
        res = Math.max(f[i],g[i],res);        
    }
    
    return res;    
};
