// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here
    let sumBack = A.reduce((sum, el)=>sum+el);
    let sumFront = 0;
    let diff_list:number[] = []
    // A.forEach((el)=>{
    //     sumFront +=el;
    //     sumBack -=el;
    //     diff_list.push(Math.abs(sumBack - sumFront))

    // });
    for(let i=0; i< A.length -1; i++){
        sumFront +=A[i];
        sumBack -=A[i]
        diff_list.push(Math.abs(sumBack - sumFront))
    }
    // console.log("DIFF LIST", diff_list)
    
    return diff_list.sort((a,b) => a- b)[0]
}