//***** JavaScript 24.14% *****//

/**
 * @param {number[]} nums
 * @return {number}
 * related topic: Array
 */
var pivotIndex = function(nums) {
       
    /**********************************************
        use the prefix sum array to find 
        the right sum and left sum for every index
        ex:
        nums = [a,b,c,d,e]
        prefix = [a,a+b,a+b+c,a+b+c+d,a+b+c+d+e]
        
        left sum is prefix[i]
        right sum is prefix[size-1] - prefix[i] + nums[i]
            
    **********************************************/
    
    // find the prefix sums
    let P = [];
    let tsum = 0;
    for(let i = 0; i < nums.length; i++) {
        tsum += nums[i];
        P.push(tsum);
    }
    
    // use the prefix sums array to find every index's right sum and left sum
    for(let i = 0; i < nums.length; i++) {
        let left = P[i];
        let right = P[nums.length - 1] - P[i] + nums[i];
        
        console.log("left: ",left,"right: ",right);
        
        if(left == right)
            return i;
    }
    
    return -1;
};
