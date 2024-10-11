function cyclicRotationOfArrayByK(arr, K){
    K = K % arr.length;
    for(let i=0; i< K; i++ ){
        arr.unshift(arr.pop());
    }

    return arr;
}


// function solution(A: number[], K: number): number[] {
//     // Implement your solution here
//     let arr = [];
//     for(let i=0; i<A.length; i++){
//         let newIndex = (i + K) % A.length;
//         arr[newIndex] = A[i]
//     }
//     return arr;
// }