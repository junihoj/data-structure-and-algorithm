// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let map = new Map();
    for(let i=0; i<A.length; i++){
        if(A[i] > 0){
            
            map.set(A[i], (map.get(A[i]) || 0) + 1); 
        }
        
    }

    for(const [key, val] of map){
        if(val % 2 !=0){
            return key;
        }
    }
    return null;
}