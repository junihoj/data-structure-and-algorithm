// Javascript program to count pairs whose sum cubes is n

function countPairs(n) {
    let count = 0;
    
    // Check for each number 1 to cbrt(n)
    for (let i = 1; i <= parseInt(Math.pow(n,(1.0/3.0)), 10); i++)
    {
        // Store cube of a number
        let cb = i*i*i;
    
        // Subtract the cube from given n
        let diff = n - cb;
    
        // Check if the difference is also
        // a perfect cube
        let cbrtDiff = parseInt(Math.pow(diff,(1.0/3.0)), 10);
    
        // If yes, then increment count
        if (cbrtDiff*cbrtDiff*cbrtDiff == diff)
            count++;
    }
    
    // Return count
    return count;
}

// driver code
     const n = 9;
  console.log(countPairs(n));