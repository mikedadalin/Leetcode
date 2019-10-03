/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //edge case
    if(s.length == 0) return true;
    
    s = s.toUpperCase();
    let head = 0
    let tail = s.length-1
    
    while(head < tail) {
        if(!isValid(s[head])) 
            head++;
        else if(!isValid(s[tail])) 
            tail--;
        else if(s[head] == s[tail]) {
            head++;
            tail--;
        } else if(s[head] != s[tail]) {
            return false;
        } 
    }
    return true;
    
};

function isValid(x) {
    if(x >= 'A' && x <= 'Z') return true;
    if(x >= '0' && x <= '9') return true;
    return false;
}
