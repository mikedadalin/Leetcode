/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distance = [];
    
    for(let i = 0; i < points.length; i++) {
        distance.push([i,Math.sqrt(points[i][0]*points[i][0]+points[i][1]*points[i][1])]);
    }
    
    distance.sort(function(a,b) {
        return a[1] - b[1];
    });
    
    let ans = [];
    for(let i = 0; i < k; i++) {
        ans.push(points[distance[i][0]]);
    }
    return ans;
};
