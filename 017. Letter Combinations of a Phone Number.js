/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {

    // Edge case
    if(digits == "")
        return [];
    
    var ans = [];
    var map = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"]                
    };
    
    /* Recursive define
      digits = input string
      index = current position of which digit
      curr_string = current answer element string
    */
    var dfs = function(digits,index,curr_string) {
      // end condition
      if(curr_string.length == digits.length) {
        ans.push(curr_string);
        return;
      }
        
      // process
      var letter = map[digits[index]];

      for(var i = 0; i < letter.length; i++) {
        dfs(digits,index+1,curr_string+letter[i]);
      }

    };

    dfs(digits,0,""); 

    return ans;
    
};
