/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // edge case 
    if(prices.length === null || prices.length <= 1 || k <= 0)
        return 0;
    
    // if k * 2 > prices.length then use greedy alg to solve
    if(2*k >= prices.length) {
        let res = 0;
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < prices[i+1])
                res += prices[i+1] - prices[i];
        }
        
        return res;        
    } else if(2 * k < prices.length) {
        
        let buy = [-prices[0]];
        let sell = [0];        
        for(let i = 1; i <= k; i++) {            
            for(let j = 1; j < prices.length; j++) {
                buy.push(Math.max(buy[i], sell[i-1] - prices[j]));
                sell.push(Math.max(sell[i], prices[j]+buy[i]));
            }    
        }
    console.log(sell);
        return Math.max(...sell); // return Math.max.apply({},sell);
    }
    

    
};
