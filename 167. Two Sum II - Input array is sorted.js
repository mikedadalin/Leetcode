/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Method 1: using two pointers
var twoSum = function(numbers, target) {
    if(numbers.length <= 0) return [];
    if(numbers.length == 1) {
        if(numbers[0] == target) {
            return [1];
        }
        else {
            return [];
        }
    }
    
    
    let res = [];
    let left = 0;
    let right = numbers.length - 1;
    
    while(true) {
        let sum = numbers[left] + numbers[right];
        if(sum == target) {
            res.push(left+1, right+1);
            break;
        } else if(sum > target) {
            right--;
        } else if(sum < target) {
            left++;
        }
    }
    
   return res;
    
};


//---- JavaScript 89.99% ----//
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * related topics: Array, Hash Table
 */
// Method 2: using hashmap
var twoSum = function(numbers, target) {
    // Edge case
    if(numbers.length < 2)
        return [];
    
    // use map to save the element and its index in numbers
    var map = {};
    
    for(var i = 0; i < numbers.length; i++) {
        if(map[target-numbers[i]] >= 0) {            
            return [map[target-numbers[i]],i+1];
        } else {
            map[numbers[i]] = i+1;
        }                
    }
    
    /*
        the reason of i+1 is that "Your returned answers (both index1 and index2) are not zero-based."
        as the requirement from the quesiton
    */

};
