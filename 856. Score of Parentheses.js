/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    
    // main code
    return helper(S,0,S.length-1);
    
    // use helper function to divide the string to find balance case and non-balance
    function helper(s,left,right) {
        // case 1: "()" case
        if(right - left == 1) return 1; 
        
        // case 2: find the balance one and seperate the balance one with the rest
        let balance = 0;
        for(let i = left; i < right; i++) {
            if(s[i] == "(") balance++;
            if(s[i] == ")") balance--;
            if(balance == 0) { // find the balance case
                return helper(s,left,i) + helper(s,i+1,right)
            }
        }
        
        // case 3: if no balance is found before the last index of string
        //         it means the last one must be ")", and the whole string must be "(A" + ")"  case
        //         then, remove the outterst pair of parentheses
        
        return 2 * helper(s,left+1,right-1);
    }
};
