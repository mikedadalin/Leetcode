/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let curstr = "1"
    let count = 1
    let tmp_curstr = ""
    let i = 0
    let tmp_char = ""
    
    if(n == 1)
        return "1";
    
    // check nth level
    while(n != 1) {
        i = 0
        tmp_curstr = ""
        // check the pointer is still in curstr range 
        while(i < curstr.length) {
            let tmp_char = curstr[i]
            count = 1
            // check the same tmp_char in next char
            while(i < curstr.length && curstr[i] == curstr[i+1]) {
                count++
                i++   // move on to next char in curstr, move the pointer 
            }
            // current type of tmp_char finish searching, find all duplicate 
            tmp_curstr = tmp_curstr + count + tmp_char
            i++ // move on to the next char in curstr, move the pointer
        }
        curstr = tmp_curstr
        n--
    }
    
    return curstr;
};
