/* 
    This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

*/


function productExceptSelf(arr){
    let prefix = 1;
    let post =1;
    let result = [];

    for(let i=0; i<arr.length; i++){
        result[i] = prefix;
        prefix *= arr[i]
    }

    for(let i=arr.length -2; i>=0; i--){
        post *= arr[i+1];
        result[i] *=post;
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4, 5]))