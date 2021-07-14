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

// Union-Find 
// var findCircleNum = function(isConnected) {
    
//     let parent = new Array(isConnected.length).fill(-1);
//     let res = 0;
    
//     for(let i = 0; i < isConnected.length; i++) {
//         for(let j = 0; j < isConnected.length; j++) {
//             if(isConnected[i][j] == 1 && i != j) {
//                 union(parent, i, j);
//             }
//         }
//     }
    
//     for(let i = 0; i < parent.length; i++) {
//         if(parent[i] == -1) res++;
//     }
    
//     return res;
    
//     // union-find methods
//     function find(parent, i) {
//         if(parent[i] == -1) {
//             return i;
//         }
//         return find(parent, parent[i]);
//     }
    
//     function union(parent, i, j) {
//         let i_group = find(parent, i);
//         let j_group = find(parent, j);
//         if(i_group != j_group) 
//             parent[i_group] = j_group;
//     }
// }



