// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(N) {
//     //check if N is integer
//     if(N=== parseInt(N, 10) && N>=1 && N<=2147483647){
//         const Binary = N.toString(2).split(''); //["1", "0", ...]
//         return getGaps(Binary, []);
//     }

//     return 0;
// }

// function getGaps(binaryArray, gaps){
//      // finding the first one via its index
//      const firstOne = binaryArray.indexOf("1");
//      if (firstOne > -1) {
//           // new array created taking a slice of original array 
//           // from the index of the firstOne + 1 index
//           let NewBinaryArray = binaryArray.slice(firstOne + 1);
//           // finding second one via its index in new array slice
//           const secondOne = NewBinaryArray.indexOf("1");
//           // accounting for no zeros
//           if (secondOne > 0) {
//                // adding 2 to our gaps array
//                gaps.push(secondOne);
//           }
//           // Pass array minus second one and gaps array
//           return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
//      }
     
//      // if gaps array length is empty return 0
//      // otherwise return largest value in array
//      return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
// }


function longestSequenceOfBinaryGap(N){
    if(N=== parseInt(N, 10) && N>=1 && N<=2147483647){
        const binaryArray = N.toString(2).split("");
        let max = 0;
        let firstOne = binaryArray.indexOf("1");
        if(firstOne < 0) return 0;
        let secondOne = binaryArray.indexOf("1", firstOne + 1)
        
        while(secondOne < binaryArray.length && secondOne > -1){
            max = Math.max(max, (secondOne - firstOne - 1));
            firstOne = secondOne;
            secondOne = binaryArray.indexOf("1", secondOne + 1)
           
        }

        return max
    }

    return 0;
}

let k = longestSequenceOfBinaryGap(1041)
console.log(k)


