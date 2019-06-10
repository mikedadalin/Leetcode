//---- JavaScript 93.74% ----//
/**
 * @param {number[]} nums
 * @return {number[][]}
 * related topic: Array, Two pointers
 */
var threeSum = function(nums) {
    // Edge case
    if(nums.length < 3)
        return [];
    
    var res = []; // answer array
    
    // sort the input nums
    nums.sort(function(a,b) { return a - b });
    
    // fix one element start comparing
    for(var k = 0; k < nums.length - 2; k++) {
        // if nums[k] > 0 then stop looping
        if(nums[k] > 0)
            break; // since rest of the element won't make sum 0
        
        // skip the duplicate value
        if(nums[k] == nums[k-1])
            continue;
        
        // set the target 
        var target = 0 - nums[k];
        
        // set the two pointers
        var i = k + 1;
        var j = nums.length - 1;
        
        // start scanning the rest of the array nums
        while(i < j) { // if i and j meet then the scanning is finished
            if(nums[i] + nums[j] == target) {
                res.push([nums[k],nums[i],nums[j]]);
                
                while(i < j && nums[i] == nums[i+1]) i++;
                while(i < j && nums[j] == nums[j-1]) j--;
                
                i++;
                j--;
                
            } else if(nums[i] + nums[j] > target) j--;
              else if(nums[i] + nums[j] < target) i++;
            
        }
        
        
    }
    
    return res;
    
    
};
