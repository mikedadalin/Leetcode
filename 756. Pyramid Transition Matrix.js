//----- JavaScript 100% -----//
/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    // build HashSet for easy search the possible thrid char from first two chars in allowed's element
    let map = {};
    
    for(let ele of allowed) {        
        if(map[ele.substr(0,2)])
            map[ele.substr(0,2)].push(ele[2])        
        else 
            map[ele.substr(0,2)] = [ele[2]];        
    }        
    
    // build the helper function 
    /*
        @param curr => curr level's character
        @parm above => next level's character
    */    
    function helper(curr,above,map) {
        if(curr.length == 2 && above.length == 1)  return true;
        if(curr.length == above.length + 1) return helper(above,"",map); // move to the next level
        let pos = above.length;
        let string_base = curr.substr(pos,2);
        if(map[string_base]) {
            for(let char of map[string_base]) {
                if(helper(curr,above + char,map)) return true;                
            }
        }
        
        return false;        
    }
    
    // main code 
    return helper(bottom,"",map);
    
};
