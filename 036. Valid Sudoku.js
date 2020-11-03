/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // edge case 
    if(board.length <= 1 || board.length == null)
        return false;
    
    // check row & check col 
    for(let i = 0; i < board.length; i++) {
        let colMap = {};
        let rowMap = {};
        for(let j = 0; j < board[0].length; j++) {
            let cur_row = board[i][j];
            let cur_col = board[j][i];
            
            if(cur_row != '.') {
                if(!rowMap[cur_row]) {
                    rowMap[cur_row] = cur_row;
                } else return false;
            }
            
            if(cur_col != '.') {
                if(!colMap[cur_col]) {
                    colMap[cur_col] = cur_col;
                } else return false;
            }
        }        
    }
 
    
    // check 3x3 matrix
    for(let i = 0; i < board.length; i += 3) {
        for(let j = 0; j < board[0].length; j += 3) {
            let subMap = {};
            let subX = i + 3;
            let subY = j + 3;
            for(let k = i; k < subX; k++) {
                for(let l = j; l < subY; l++) {
                    let cur = board[k][l];
                    if(cur === '.') continue;
                    if(!subMap[cur]) {
                        subMap[cur] = cur;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    
    return true;
};
