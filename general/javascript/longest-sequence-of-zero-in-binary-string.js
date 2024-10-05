// function longestSequenceOfZero(N) 
// { 
//     let maxm = -1; 
//     let cnt = 0; 

//     while (N != 0) 
//     { 
//         if ((N & 1) == 0 ) 
//         { 
//             cnt++; 
//             N >>= 1; 
//             maxm = Math.max(maxm, cnt); 
//         } 
//         else
//         { 
//             maxm = Math.max(maxm, cnt); 
//             cnt = 0; 
//             N >>= 1; 
//         } 
//     } 
//     return maxm; 
// } 
 
// let N = 14; 
// document.write(maxZeros(N)); 
 
// Output
// 1


const longestSequenceOfZero = (x)=>{
    let max = -1;
    let count = 0;
    while(x !=0){
        //if x & 1=0 means the last number of x must be a zero then we add to count and shift to the right(removing the last element)
        if((x & 1)==0){
            count++;
            //then move to the right by 1
            x >>= 1;
            max = Math.max(max, count);
            
        }else{

            //assign maximum
            max = Math.max(max, count);
            
            //then reset count to zero because the sequence has been violated
            count = 0;
            //then shift to the right by 1
            x >>=1
        }
    }

    return max;
}

const longest = longestSequenceOfZero(14)
console.log(longest)