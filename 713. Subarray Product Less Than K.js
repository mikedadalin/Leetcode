//******* JavaScript 100% ********//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    /************************************************************************************
        imagine there is a mask to cover nums
        the mask start from size 1: (mask is the {})
        [ { 10 },  5,  2,  6 ]
        
        if the product of the mask is < k then you can expand the mask:
        [ { 10,  5 },  2,  6 ]
        
        if the product of the mask is >= k then you need to shrink the mask:
        [ { 10,  5,  2 },  6 ] => [ 10, { 5 , 2 },  6 ]
        
        In every iteration, we calculate the "count"
        "right - left + 1" represent the size of the mask.
        And the size of the mask also equal to the numbers of subarray in the mask size
    
    **************************************************************************************/
    let count = 0;
    let prod = 1;
    
    for(let right = 0, left = 0; right < nums.length; right++) {
        // get the prod
        prod *= nums[right];
        
        // see if the prod is >= k or not
        while(prod >= k && left < nums.length) {
            // if prod is not match the requirement, then skrink the mask, until the prod is < k
            prod /= nums[left];
            left++;
        }
        
        // get the count, right - left can find the size of the mask. The size of the mask represent the numbers of the subarrays can be found in the mask
        count += Math.max(0, right-left+1);        
    }
    
    return count;

};


