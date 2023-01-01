const pow = (x, n) =>{
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = 2;
  let n = 5;
  
  console.log(pow(x, n))