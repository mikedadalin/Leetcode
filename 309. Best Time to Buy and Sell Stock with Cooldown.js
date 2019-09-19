/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    /******************************************************************************
        using dp to solve.
        
        we can find out that there are 3 different status for each date
        buy, see and cooldown
        
        buy[i] is the max profit on i th day when you need to buy
        sell[i] is the max profit on i th day when you need to sell
        cooldown[i] is the max profit on i th day when you need to cooldown buy
        
        cooldown[i] = sell[i-1]
        buy[i] = max(buy[i-1],cooldown[i-1]-prices[i])
        sell[i] = max(buy[i-1]+price[i], sell[i-1])  
               or max(buy[i-1]+price[i], cooldown), same meaning                    
        
    
    ********************************************************************************/
    // edge case 
    if(prices.length == null || prices.length <= 1)
        return 0;
    
    // dp status
    let buy = [-prices[0]];
    let sell = [0];
    let cooldown = [0];
    
    for(let i = 1; i < prices.length; i++) {
        cooldown.push(sell[i-1]);
        buy.push(Math.max(buy[i-1], cooldown[i-1] - prices[i]));
        sell.push(Math.max(buy[i-1] + prices[i], sell[i-1]));        
    }
    
    return Math.max(sell[prices.length - 1], cooldown[prices.length - 1]);
    
    
};
