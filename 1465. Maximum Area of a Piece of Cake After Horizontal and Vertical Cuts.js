/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    // sort the horizontalCuts and verticalCuts
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    
    var len_h = horizontalCuts.length;
    var len_w = verticalCuts.length;
    var maxHeight = Math.max(horizontalCuts[0], h - horizontalCuts[len_h - 1]);
    var maxWidth = Math.max(verticalCuts[0], w - verticalCuts[len_w - 1]);
    
    for(var i = 1; i < len_h; i++) {
        maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
    }
    
    for(var j = 1; j < len_w; j++) {
        maxWidth = Math.max(maxWidth, verticalCuts[j] - verticalCuts[j - 1]);
    }
    
    
    return BigInt(maxHeight) * BigInt(maxWidth) % 1000000007n;
};

