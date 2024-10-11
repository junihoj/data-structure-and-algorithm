/* 
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

*/

function missingPositveInteger(arr){
    if(arr.length == 0) return 1;
    //remove all negative number and zero
    let filteredArr = arr.filter((v)=>v>0)
    filteredArr.sort((a,b)=> a-b);
    //if the smallest number is not 1 then 1 is the first misssing positive integer
    if(filteredArr[0] != 1) return 1;
    
    let minVal = filteredArr[0];
    for(let i=1; i< minVal; i++){
        //if  i is less then it is first missing positive integer in the array;
        return i;
    }
    // console.log(filteredArr, "filtered Array")
    for(let i=1; i<filteredArr.length; i++){
        if(filteredArr[i] != minVal + 1) return minVal + 1;
        minVal +=1
    }

    return minVal + 1;
    
}


// console.log(missingPositveInteger([3, 4, -1, 1]))
console.log(missingPositveInteger([1, 2, 0]))