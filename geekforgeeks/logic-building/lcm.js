//naive approach

function lcmNaive(a,b){
    const greater = Math.max(a,b);
    const smaller = Math.min(a,b);

    for(let i=greater; i<=a*b; i++){
        if(i%smaller==0){
            return i;
        }
    }
}

//hcf * lcm = a*b;

//lcm = a*b/hcf


const hcf = (a,b)=>{
    if(b==0) return a;

    return hcf(b, a%b);
}

const lcm = (a,b)=>{
    return (a*b)/hcf(a,b)
}