/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // edge case
    if(prices.length <= 1 || prices.length == 0)
        return 0;
    
    let res = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < prices[i+1]) {
            res += prices[i+1] - prices[i];
        }                
    }
    
    return res;
};
