// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    let B = Array(X).fill(-1);

    for(let i=0; i<A.length; i++){
        if(A[i] <= X && B[A[i] - 1]== -1){
            B[A[i] - 1] = i;
        }
    }
    // if(B.includes(-1)) return -1;
    // console.log(B)
    let max = 0;
    for(let i=0; i<B.length; i++){
        if(B[i] == -1) return -1;
        if(B[i] > max){
            max = B[i]
        }
    }

    return max;
}
