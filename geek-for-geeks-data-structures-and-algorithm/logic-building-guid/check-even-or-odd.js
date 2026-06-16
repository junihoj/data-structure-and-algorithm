// 1. simple

/* function isEven(n) { 
	return (n % 2 == 0); 
} */





// 2. Approach: Using Bitwise AND Operator



/* function isEven(n) {
    
 // n & 1 is 1, then odd, else even
 if ((n & 1) === 0) {
        return true;
    } else {
        return false;
    }
}

// Driver code
let n = 101;
if (isEven(n)) {
    console.log("true");
} else {
    console.log("false");
} */



    //3.  Approach: Using Bitwise Shift Operators


/* function isEven(n) {
   
    if (n == (n >> 1) << 1) 
       return true;
    else 
       return false;
}

// Driver code
let n = 4;
if (isEven(n)) {
    console.log("true");
} else {
    console.log("false");
} */