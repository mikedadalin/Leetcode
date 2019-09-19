/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
    /************************************************************************************
        using dp to solve this program
        
        you can find two status: hold the stock and sell the stock
        
        hold[i] is the max profit on i th day when you need to hold the stock
        sold[i] is the max profit on i th day when you need to sell the stock
        
        hold[i] = max(hold[i-1], sold[i-1] - prices[i])
        sold[i] = max(sold[i-1], prices[i]+hold[i-1]-fee)
        
        label: Array, DP, Greedy
    ************************************************************************************/
    
    // edge case 
    if(prices.length == null || prices.length <= 1)
        return 0;
    
    let hold = [-prices[0]];
    let sold = [0];
    
    for(let i = 1; i < prices.length; i++) {
        hold.push(Math.max(hold[i-1],sold[i-1]-prices[i]));
        sold.push(Math.max(sold[i-1],prices[i]+hold[i-1]-fee));
    }
    
    return sold[prices.length-1];
};
