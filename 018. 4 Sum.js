//---- JavaScript 97.06% ----//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * related topic: Array, Two pointers
 */
var fourSum = function(nums, target) {
    // edge case 
    if(nums.length < 4)
        return [];
    
    // sort nums
    nums.sort(function(a,b){ return a-b });

    // define anwser array
    var res = [];

    // downgrade the question to 3 sum
    for(var x = 0; x < nums.length - 3; x++) {
        if(x > 0 && nums[x] == nums[x-1]) {
          continue;    
        }            
        for(var y = x + 1; y < nums.length - 2; y++) {
            if(y > x+1 && nums[y] == nums[y-1])  {             
                continue;
            }
                          
            // find second target
            var t1 = target - nums[x] - nums[y];
            
            // get i, j 
            var i = y + 1;
            var j = nums.length - 1;
            
            // find the combination
            while(i < j) {              
                if(nums[i] + nums[j] == t1) {                    
                    res.push([nums[x],nums[y],nums[i],nums[j]]);
                    
                    while(i < j && nums[i] == nums[i+1]) i++;
                    while(i < j && nums[j] == nums[j-1]) j--;
                    
                    i++;
                    j--;                                        
                } else if(nums[i] + nums[j] < t1) i++;
                  else if(nums[i] + nums[j] > t1) j--;
            }
        }
    }
    return res;
};
