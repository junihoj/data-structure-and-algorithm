function largestPrimeFactor(number) {
    let maxPrime = -1;
    while(number%2 ==0){
      maxPrime = 2
      number >>= 1;
    }
    console.log("HERE", Math.sqrt(number) + 1)
    for(let i=3; i < (Math.sqrt(number) + 1); i+=2){
      console.log("I ran")
      while (number % i == 0){
        maxPrime = i 
        number = Math.floor(number/i) 
      }          
    }
  
    return number>2? number: maxPrime
    
  }
  
largestPrimeFactor(8);