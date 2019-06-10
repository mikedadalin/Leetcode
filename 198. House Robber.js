//-----JavaScript 100%-----//

/**
 * @param {number[]} nums
 * @return {number}
 * related topics: Dynamic programming
 */
var rob = function(nums) {
    
    /**************************************************************************
        Using dynamic programming concept.
        
        Since the question ask the "not adjacent" elements sum
        set the dp[i] which is the max "not adjacent" elements sum 
        from the start index to index i.
        
        dp[0] is only nums[0].
        dp[1] is from index 0 ~ 1, the max not ajacent elements sum
        so, it is max(nums[0],nums[1])
        
        Why finding dp[0] and dp[1]
        bc it is not adjacent element sum, it may start at index 0 or index 1
        
        after get dp[0], dp[1], we can build the formula of dp[i]
        => find the max value between 
        1) current value + two index before dp[i] (dp[i-2])
                            or
        2) previous dp[i] (dp[i-1])
        
        The last value of dp[i] will be the ans        
        
    **************************************************************************/
    
    // edge case
    if(nums.length == 0)
        return 0;
    else if(nums.length == 1)
        return nums[0];
    else if(nums.length == 2)
        return Math.max(nums[0], nums[1]);
    
    // initialize dp[0] and dp[1], dp[i] => the max sum from start to index i
    let dp = [nums[0],Math.max(nums[1],nums[0])];

    // find the rest of the dp[i]
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    
    return Math.max.apply(null,dp);        
};
