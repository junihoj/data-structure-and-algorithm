function sumSquareDifference(n) {

    let squareOfSum = Math.pow(((n*(n+1))/2), 2);
    let sumOfSquares = n * (((n + 1)*(2*n+1))/6)
    
    return Math.abs(sumOfSquares- squareOfSum);
  }
  
  sumSquareDifference(10);