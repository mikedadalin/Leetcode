/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const words = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let i = 0
    let ans = []
    
    while(i < nums.length) {
        if(num >= nums[i]) {
            while(num >= nums[i]) {
                num -= nums[i];
                ans.push(words[i]);
            }
        }
        i++;
    }
           
    ans = ans.join('')
    return ans
};
