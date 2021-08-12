/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
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
