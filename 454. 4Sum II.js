//---- JavaScript 56.31% ----//

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 * related topics: Hash Table, Binary Search
 */
var fourSumCount = function(A, B, C, D) {
    
    /*
        1 .split the 4 arrays into two group, A[i] + B[j] and C[k] + D[l].
        
        2. use two for loop to find all the combination of A[i] + B[j],
           and record them into a hashtable.
        
        3. use another two for loop to find all the combination of C[k] + D[l].
                
        4. use hashtable to check if there is any C[k] + D[l] is the inverse of the A[i] + B[j].
            
    */
    
        
    // build the map for every element pairs of sum of A and B
    
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
