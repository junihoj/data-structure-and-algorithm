function miniMaxSum(arr: number[]): void {
    // Write your code here
    arr.sort((a,b) => a > b? -1: 1)
    let max = arr.slice(0, 4).reduce((sum,num)=> sum + num,0)
    let min = arr.slice(-4).reduce((sum,num)=> sum + num,0)
    // console.log("ARR", arr)
    // console.log("min Arr", arr.slice(-4))
    // console.log("MAX Arr", arr.slice(0, 4))
    console.log(min, max);
    
}