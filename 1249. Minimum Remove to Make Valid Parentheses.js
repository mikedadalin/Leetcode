//----- JavaScript 28.57%-----//
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // loop the string and push the "(", ")" into the stack
    // skip other char, find the rest of the unpair one
    
    // the stack save an obj, like {  "(": index   }
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            let tmp = { "(": i };
            stack.push(tmp)
        }
        
        if(s[i] == ")") {
            if(stack[stack.length - 1] && Object.keys(stack[stack.length - 1]) == "(") {
                stack.pop();
            } else {
                let tmp = { ")": i };
                stack.push(tmp);
            }                
        }
    }
    
    
    // remove the invalid parentheses from the array type of s
    let s_arr = s.split("");
    
    for(let ele of stack) {
        let remove_index = Object.values(ele);
        s_arr[remove_index] = "";        
    }
    
    // combine the s_arr, and get rid of ""
    let final_s_arr = s_arr.filter(ele => ele != "");
    
    
    return final_s_arr.join("");        
};
