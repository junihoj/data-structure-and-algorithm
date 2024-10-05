// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A){
    // Implement your solution here
    let counter = Array<number>(N).fill(0);
    let mapMax = new Map();
    let lastMax = 0;
    let maxValue = 0;
    for(let i=0; i<A.length; i++){
        let operation = A[i];
        if(operation == N+1){
            // maxcounter
            // for(let k=0; k< counter.length; k++){
            //     counter[k] = maxValue;
            // }
            // mapMax.set(maxValue, maxValue)
            lastMax = maxValue;
        }else{
            // increment counter;
            operation--;
            counter[operation] = Math.max( counter[operation], lastMax);
            counter[operation] += 1;
            maxValue = Math.max(maxValue, counter[operation]);
        }
    }

    for(let i = 0 ; i < counter.length; i++) {
			counter[i] = Math.max(counter[i], lastMax);
    }

    return counter;
}