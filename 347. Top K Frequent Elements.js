/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // build numMap
    let numMap = {};
    nums.map(ele => {
        if(!numMap[ele]) numMap[ele] = 1;
        else numMap[ele] += 1;
    })
    
    // turn numMap into array type
    let arr = [];
    for(key in numMap) {
        arr.push([key,numMap[key]]);
    }
    
    // sorted the array
    arr.sort(function(a,b) {
        return b[1] - a[1];
    })
    
    // find the top k nums
    let ans = [];
    for(let i = 0; i < k; i++) {
        ans.push(parseInt(arr[i][0]));
    }
    
    return ans;
};
