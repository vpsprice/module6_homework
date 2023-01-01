function sum(x){
    return function(y){
       return x + y;
     };
 }  
 console.log( sum(1)(1), sum(2)(3), sum(89)(6) );