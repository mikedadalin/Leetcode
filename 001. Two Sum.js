/----- JavsScript 59.69% -----/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
        map={ value:index, .....}
    
    */
    
    map = {};
    
    for(var i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] >= 0) {
            return [map[target-nums[i]],i];
        } else {
            map[nums[i]] = i;
        }
        
    }
};

