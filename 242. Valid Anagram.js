/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {}
    let result = true;
    
    // if length is different than return false
    if(s.length != t.length)
        return false;
    
    // build map
    let char_arr = s.split('')
    char_arr.map((ele) => {
        if(!map[ele])
            map[ele] = 1;
        else
            map[ele] += 1;
    })
    let char_arr2 = t.split('')
    char_arr2.map((ele) => {        
        if(map[ele]) {
            map[ele] -= 1;
            if(map[ele] < 0) result = false;
        } else {            
            result = false;
        }
    })    
    return result;
};
