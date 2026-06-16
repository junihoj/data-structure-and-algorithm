function isPowerOf(x , y){
    if(x==1) return y==1;
    let pow = 1;

    while(pow<y){
        pow *=x;
    }

    return pow==y;
}


//order 1;

function isPowerOfLog(x,y){
    const res1 = Math.log(y) / Math.log(x);

    return Math.floor(res1)== res1;
}