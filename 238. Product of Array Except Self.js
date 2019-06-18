/**
 * @param {number[]} nums
 * @return {number[]}
 * related topics: Array, Two pointers
 */
var productExceptSelf = function(nums) {
    
    /*****************************************************************************************
        Using two products, one from the end, one from the begininng.        
        
        Initial these two products as 1, and looping these two products through the nums[].
        
        Assign the value of these two prodcuts value to output[].
        
        After each assign, multiply these two products by current nums[i] value.

    *****************************************************************************************/
    
    let output = [];
    let fwd = 1;
    let bwd = 1;
    
    // find the forward product after i
    for(let i = nums.length-1; i >= 0; i--) {
        output[i] = fwd;
        fwd = fwd * nums[i]; // for next one        
    }
    
    // find the backward product before i
    for(let i = 0; i < nums.length; i++){
        output[i] *= bwd;
        bwd = bwd * nums[i]; // for next one        
    }
    
    return output;
};
