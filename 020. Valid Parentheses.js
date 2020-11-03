/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // edge case
    if(s.length == 1) return false;
    if(s.legnth == 0) return true;
    
    let left = ['{','[','('];
    let right = ['}',']',')'];
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(left.indexOf(s[i]) > -1)
            stack.push(s[i]);
        
        if(right.indexOf(s[i]) > -1) {
            let tmp = stack.pop();
            if(map[tmp] != s[i]) return false;
        }
            
    }
    
    return stack.length == 0;
};
