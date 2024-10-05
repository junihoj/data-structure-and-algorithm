/* 

    steps
    initial max = 0; a binary has zero number of binary gap
    1. convert integer to binaryString
    2. convert the binaryString to an array
    3. get index of the first one because the index of the first zeros does not matter here
        the binary gap starts counting from 1
        if there is no 1 binaryGap doesnot exist

    4. get the index of the second one(1)
        if there no second one then binaryGap doesnot exist return
    
    5. then loop while the second exist and the it is still within the bound of the first length of the array
        update the max number of binaryGap
        max = maximum(((IndexOfSecondOne - IndexOfFirstOne) -1), max) 
*/

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