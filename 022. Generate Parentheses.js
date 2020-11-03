//----- JavaScript 78.13% -----//
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // main code 
    let count_rp = n,
        count_lp = n,
        ans = [];
    
    helper("",count_rp,count_lp);
    
    return ans;
    
    // building the helper function
    function helper(combination, rp, lp) {
        if(combination.length == 2*n) { 
            ans.push(combination);
        } else {
            if(rp == lp) {
                helper(combination + "(",rp-1,lp);
            } else {
                if(rp > 0) helper(combination + "(",rp-1,lp);
                if(lp > 0) helper(combination + ")",rp,lp-1);
            }
        }
    }  
};

