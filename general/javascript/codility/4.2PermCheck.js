// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let min = 1;
    let max = 1;
    let set = new Set();
    const n = A.length;
    for(let i=0; i< A.length; i++){
        let num = A[i];
        if(num > max){
            max = num;
        }else if(num < min){
            min = num
        }

        set.add(num)
    }

    let m = set.size;
    let range = (max -min) + 1;

    return n===m && range === m? 1 : 0;
}