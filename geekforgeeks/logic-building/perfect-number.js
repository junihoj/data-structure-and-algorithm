function isPerfectNaive(n){
    let sum = 0;

    for(let i=1; i<n; i++){
        if(n%i==0){
            sum +=i;
        }
    }
    return sum==n;
}

console.log(isPerfectNaive(28))

function isPerfect(n) {
    // To store sum of divisors
    let sum = 1;

    // Find all divisors and add them
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            if (i * i !== n)
                sum += i + n / i;
            else
                sum += i;
        }
    }
    // If sum of divisors is equal to
    // n, then n is a perfect number
    return sum === n && n !== 1;
}
