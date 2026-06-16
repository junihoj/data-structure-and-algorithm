function reverseDigits(n){
    let revNum = 0;

    while(n!=0){
        const lastDigit = n%10;
        revNum = (revNum * 10) + lastDigit;
        n= Math.floor(n/10);
    }

    return revNum;
}

// console.log(reverseDigits(109));

function reverseDigitsRecursion(n, rev){

    if(n==0){
        return rev;
    }

    rev = (rev*10) + (n%10);
    n= Math.floor(n/10);
    return reverseDigitsRecursion(n, rev);
}

console.log(reverseDigitsRecursion(109, 0))