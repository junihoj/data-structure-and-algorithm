const gcd = (a,b)=>{
    if(b==0) return a;

    return gcd(b, a%b);
}

function addFraction(a,b){
    const lcm = a[1] * b[1]/gcd(a[1], b[1])

    const numerator = a[0] * (lcm/a[1]) + (b[0] * lcm/b[1]);

    const commonFactor = gcd(numerator, lcm);

    const num = numerator/commonFactor;
    const den = lcm/commonFactor;

    return [num, den]


}

let a = [1, 2];
let b = [3, 2];
let ans = addFraction(a, b);

console.log(ans);