/----- JavsScript 50.59% -----/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    
    /*****************************************************************************
        For this case, you don't actually need to build the Sum[]
        But you still have to find the prefix sum P[i] one at the time.
        
        Counting the each type of remainder, because the same remainder happens 
        on different P[], it means P[i] = P[j] + (n * K)
        
        So, (P[i] - P[j]) % K == 0.
        
        Another type of solution is P[i] % K == 0.
        
        1. Find the prefix sum P[i]
        
        2. Building mod[] (hastable) to save all kind of remainder, and the counting
           
           During the calulation of each P[i], modulo P[i], and save the remainder
           into a mod[]; if there is no data for that remainder, then create one.
           Otherwise, just add the count of that type of remainder.
           
        3. Counting the subarray:
           traverse each mod[i] and if mod[i] > 1 which means there are more than 1
           remainder i. So, then we can calculate the total combination of it.
           In order to get (P[i] - P[j]) % K == 0.
           
        4. Special case: mod[0]
           mod[0] can do (P[i] - P[j]) % K == 0, and itself also is (P[i] % K) == 0.
           So, in the end we need to add the mod[0] to total answser.
        
        [Note]:
        *Special case:
        When you calculate P[i], P[i] maybe negtive. When it is negtive it might
        effect the next P[i]. 
        EX:
        A:[-1,2,9], K = 3
        => P:[-1,1,10], then we won't be able to find the ans, even [9] is the ans
        
        The solution for this case is ((sum % K) + K) % K
        modulo first to shrink the number, and add a K to make it positive number
        when we add a K, it actually didn't change the remainder theoretically.
        Bc (5) % 6 = 1 <=> (5 + 6) % 6 = 1
        
    
    
    *****************************************************************************/
    
    
    let sum = 0;
    let mod = {};
    
    // find the mod for each prefix sum
    for(let i = 0; i < A.length; i++) {
        sum = sum + A[i];
        
        const key = ((sum % K) + K) % K;
        
        if(mod[key] === undefined)
            mod[key] = 1;
        else
            mod[key]++;
    }
    
    // find the combination of each modulo (pick 2 as a set)
    let count = 0;
    for(let i = 0; i < K; i++) {
        if(mod[i] > 1)
            count += (mod[i] * (mod[i] - 1)) / 2;
    }
    
    // bc every exact division can be a subarray of the anwser
    if(mod[0])
        count += mod[0];
    
    return count;
};
