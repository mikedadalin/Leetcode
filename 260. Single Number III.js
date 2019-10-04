/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort(function(a,b) { return a-b });
    
    let ans = [];
    let i = 0;
    while(i < nums.length) {
        if(nums[i] != nums[i+1]) {
            ans.push(nums[i]);
            i++;
        } else {
            i += 2;
        }
    }
    
    return ans;
};260. Single Number III
