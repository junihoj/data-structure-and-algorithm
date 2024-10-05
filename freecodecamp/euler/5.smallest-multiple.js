/* function smallestMult(n) {
    // THE PROBLEM WITH THIS SOLUTION IS THAT IT DOES NOT RUN ON TIME AND FREECODE IS COMPLAINING OF INFINITE LOOP BUT IT WORKS
    let solution;
    let largest_num = n;
    let unsolved = true;
    while(unsolved===true){
      let i
      for(i=1; i<=n; i++){
        if(largest_num % i !==0){
          break;
        }else{
          if(i==n){
            solution = largest_num;
            unsolved = false;
          }
        }
      }
      largest_num +=1;
    }
    console.log(solution)
    return solution;
  }
  
  smallestMult(5); */

/* 

    METHOD TWO USING GCD and LCM
*/

function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function smallestMult(n){
    let result = 1;
    for(let i=2; i<=n; i++){
        result = lcm(i, result);
    }

    return result;
}
console.log("lcm", lcm(14, 6))
console.log(smallestMult(20))



