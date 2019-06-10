//---- JavaScript 89.99% ----//
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * related topics: Array, Hash Table
 */
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
