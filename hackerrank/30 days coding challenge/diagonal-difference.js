function diagonalDifference(arr) {
    // Write your code here
    //given it is square matrix then both the number of rows is equal to the number of columns
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;
    let n = arr.length - 1
    for(let i=0; i< arr.length; i++){
        diagonal1Sum += arr[i][i]
        diagonal2Sum += arr[i][n - i]
        
    }
    
    return Math.abs((diagonal1Sum-diagonal2Sum))
}
