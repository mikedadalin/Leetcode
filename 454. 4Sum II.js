//---- JavaScript 56.31% ----//

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    
    // build the map for every element paris of sum of A and B
    
    var map = {};
    var count = 0;
    
    for(var i = 0; i < A.length; i++) {
        for(var j = 0; j < A.length; j++) {
            if(!map[A[i]+B[j]])
                map[A[i]+B[j]] = 1;
            else 
                map[A[i]+B[j]]++;
        }
    }
    
    // check every pairs of sum of C and D has any opposite match with map
    for(var i = 0; i < A.length; i++) {
        for(var j = 0; j < A.length; j++) {
            // the opposite value of the element in map
            var t = -1 * (C[i]+D[j]); 
            
            // if the value does match in map, it is the valid result
            if(map[t])
                count = count + map[t];
        }
    }
    
   
    return count;
    
};
