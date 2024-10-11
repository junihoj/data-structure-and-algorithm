/* 
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/

function twoSum(arr, target){
    for(let i=0; i<arr.length -1; i++ ){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j]){
                return true
            }
        }
    }

    return false;
}


let k = twoSum([10, 15, 3, 7], 17)
console.log(k)