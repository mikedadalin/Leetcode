//---- JavaScript 43.90% ----//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // edge case
    if(nums.length == 0 || nums == null)
        return null;
    
    var prefix = 0;
    var map = { 0:1 };
    var count = 0;
    
    for(var i = 0; i < nums.length; i++) {
        prefix += nums[i];
       
        if(map[prefix - k]) {
            count+=map[prefix - k];               
        } 
        
        if(!map[prefix]) {
            map[prefix] = 1;
        } else {
            map[prefix] = map[prefix] + 1;            
        }
    }
    console.log(map);
    return count;
};


/* Brute solution 28.5% */
var subarraySum = function(nums,k) {
  
  var temp_sum = 0;
  var count = 0;

  for(var i = 0; i < nums.length; i++) {
    temp_sum = nums[i];
    if(temp_sum == k) count++;      
    
    for(var j = i+1; j < nums.length; j++){
      if(temp_sum + nums[j] == k) {
        count++;
        temp_sum += nums[j];
      } else {
        temp_sum += nums[j];           
      }
    }
  }
  return count;
}
