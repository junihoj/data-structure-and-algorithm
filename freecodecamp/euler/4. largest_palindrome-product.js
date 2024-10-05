function largestPalindromeProduct(n) {

    let high = Math.pow(10, n) - 1
    let low = 1 +  (high / 10)
    let max_product = 0;
  
    for(let i=high; i>=low; i--){
      for(let j=i; j>=low; j--){
        let num = i*j
        if (num < max_product) break;
  
        let rev = reverse(num);
        if(rev === num && num > max_product){
          max_product = num;
        }
  
      }
    }
  
    return max_product
  }
  
  function reverse(num){
    let rev = 0;
    while(num !=0){
      rev = (rev * 10) + (num %10)
      num = parseInt(num/10)
    }
  
    return rev;
  }
  
  largestPalindromeProduct(3);