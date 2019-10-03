/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;     
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffled = this.arr.slice();
    for(let i = 0; i < this.arr.length; i++) {
        let random = Math.floor(Math.random() * this.arr.length);
        let temp = shuffled[i];
        shuffled[i] = shuffled[random];
        shuffled[random] = temp;            
    }
    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
