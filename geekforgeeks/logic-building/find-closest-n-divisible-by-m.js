const closestNdivisibleByN = (n, m)=>{
    let closest =0;
    let minDistance = Infinity;

    // map (n-m  to n+m)
    for(let i=(n- Math.abs(m)); i<=(n+ Math.abs(m)); i++){
        //check if i is divisible by m
        if(i%m==0){
            /* 
                1. compute the difference
                2. check if it is the closest
            */

            const diff = Math.abs(n-i);
            if(diff < minDistance || (diff==minDistance && Math.abs(i) > Math.abs(closest) )){
                closest = i;
                minDistance=diff;
            }
        }
    }

    return closest;
}

// let n = -15, m = 6;
// console.log(closestNdivisibleByN(n, m));


// SECOND APPROACH  BY FINDING QUOTIENT

function closestNumber(n,m){

    const q = parseInt(n/m);

    const n1 = q*m;

    const n2 = (n*m)>0?( m*(q+1)): (m*(q-1));

    if(Math.abs(n-n1)< Math.abs(n-n2)){
        return n1;
    }

    return n2;
}

console.log(closestNumber(-15, 6))