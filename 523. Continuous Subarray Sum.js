//***** JavaScript 73.79% ******//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    /****************************************************************************
    1. build a sum array:
       nums[] = [a, b, c];
       sum[] = [a, a+b, a+b+c];
                
    2. use the hashtable to save every mod's value and its index 
       in the sum array. Remeber to initial hashtable with {0: -1}
       (bc when the mod of first two elements is 0, the size calculate purpose)
       
    3. if the mod exist in the hashtable, make sure the size of subarray is 2
       then it is the answer
       (bc if the mod has existed in the hashtable it means that the difference 
       between sum[i] and sum[j] is k*n. 
       so sum[i] - sum[j] if the size of the 
       difference is >= 2 then there has existed an subarray that match the answer)
        
    ******************************************************************************/
    
    // handle special case when k = 0
    if(k == 0) {
        for(let i = 0; i < nums.length; i++) {
            // if nums[i] is not zero then skip
            if(nums[i] != 0) continue;
            // need to find two zero in a row
            if(nums[i] == 0 && nums[i+1] == 0) return true        
        }        
        return false;
    } else {
        
        // hashtable save mod and index of BigSum
        const map = {0: -1}; 
        // the reason for 0: -1 is for the case when the answer subarray is the element next to each other like [1,1] and k = -1
            
        // find the big SUM array => each element is the sum of the current element and all previous elements
        let BigSum = Array(nums.length);

        // initial value for BigSum elements to 0    
        for(let a = 0; a < BigSum.length; a++) {
            BigSum[a] = 0;
        }            

        // Build BigSum array
        for(let i = 0; i < nums.length; i++) {
            if(BigSum[i-1])
                BigSum[i] = nums[i] + BigSum[i-1];
            else 
                BigSum[i] = nums[i];

            // Build up "map" and determine the answer 
            // (i - map[BigSum[i] % k] > 1) make sure that the subarray at least size 2            
            if(map[BigSum[i] % k] !== undefined && (i - map[BigSum[i] % k] > 1)){                
                return true;                
            } else if(map[BigSum[i] % k] === undefined)    
                map[BigSum[i] % k] = i;                                    
        }       
        return false;
    }     
};
