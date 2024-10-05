let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
var isValidSudoku = function(board) {
    let gSet = new Set()
    for(let i = 0; i<9; i++){
        for(let j=0; j<9; j++){
            let c= board[i][j]
            if(c==".") continue;

            if(gSet.has('r'+i+c) || gSet.has('c'+j+c) || gSet.has('b'+Math.floor(i/3) + Math.floor(j/3)+c))             {        
                return false;
            }

            gSet.add('r'+i+c) 
             gSet.add('c'+j+c)
              gSet.add('b'+Math.floor(i/3) + Math.floor(j/3)+c)
            
        }
    }

    return true
};
isValidSudoku(board)