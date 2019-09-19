/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // edge case 
    if(prices.length <= 1 || prices.length === null)
        return 0;
    
    let minstock = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minstock) minstock = prices[i];
        
        let curprofit = prices[i] - minstock;
        if(curprofit > profit)
            profit = curprofit;        
    }
    
    return profit;
};
