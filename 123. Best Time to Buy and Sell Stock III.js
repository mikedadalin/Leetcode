/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /*******************************************************************
        using DP to solve it
        
        because you only can purchase 2 times
        you have to find the max profit for each transcation
        so that you need to find the status of 
        1. buy 1st time
        2. sell 1st time
        3. buy 2nd time
        4. sell 2nd time

        
        for buy1 and sell1 is intuitional, 
        just find the smallest buy and largest sell
        
        for buy2 and sell2 are the transation after sell1
        so for the DP, you need to consider sell1 in it (only for buy2)
    
        label: Array, DP
    *******************************************************************/
    
    // edge case
    if(prices.length <= 1 || prices.length === null)
        return 0;
    
    let buy1 = -prices[0];
    let sell1 = 0;
    let buy2 = -prices[0];
    let sell2 = 0;
    
    for(let i = 1; i < prices.length; i++) {
        buy1 = Math.max(buy1,-prices[i]);
        sell1 = Math.max(sell1,prices[i]+buy1);
        buy2 = Math.max(buy2,sell1-prices[i]);
        sell2 = Math.max(sell2,prices[i]+buy2);
    }
    
    return sell2;
};
