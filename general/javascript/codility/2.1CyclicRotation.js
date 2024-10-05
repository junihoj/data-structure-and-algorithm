function cyclicRotationOfArrayByK(arr, K){
    K = K % arr.length;
    for(let i=0; i< K; i++ ){
        arr.unshift(arr.pop());
    }

    return arr;
}