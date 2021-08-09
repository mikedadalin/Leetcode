/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0];
    
    strs.sort();
    
    for(let ele of strs) {
        if(ele.length == 0) return "";
    }        
    
    let matchPrefix = strs[0];
    
    for(let ele of strs) {
        for(let j = 0; j < ele.length; j++) {
            if(matchPrefix[j] != ele[j]) {
                matchPrefix = matchPrefix.slice(0,j);
                break;
            }
        }
    }
    
    return matchPrefix;
    
    
};
