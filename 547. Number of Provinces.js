/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// DFS
var findCircleNum = function(isConnected) {
    
    var visited = new Array(isConnected.length).fill(0);
    var count = 0;
    
    for(var i = 0; i < isConnected.length; i++) {
        if(visited[i] == 0) {
            DFS(isConnected, visited, i);
            count++;
        }
    }

    
    function DFS(arr, visited, i) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i][j] == 1 && visited[j] == 0) {
                visited[j] = 1;
                DFS(arr, visited, j);
            }
        }   
    }
    
    return count;
};

// BFS 
// var findCircleNum = function(isConnected) {
//     var queue = [];
//     var visited = new Array(isConnected.length).fill(0);
//     var count = 0;
    
//     for(var i = 0; i < isConnected.length; i++) {
//         if(visited[i] == 0) {
//             queue.push(i);
//             while(queue.length != 0) {
//                 var curr = queue.pop();
//                 visited[curr] = 1;
//                 for(var j = 0; j < isConnected.length; j++) {
//                     if(isConnected[curr][j] == 1 && visited[j] == 0) {
//                         queue.push(j);
//                     }
//                 }
//             }
//             count++;
//         }
//     }
//     return count++;
// }


