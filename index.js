"use strict";
module.exports = (v)=>{
  if(Number(v) !== v){
    return false;
  }
  let ret = 0;
  for(let i=1;i<=v;i++){
    // find divisor i
    if(!(v%i)){
      let mu = 1;
      // find prime factor of i
      for(let j=2;j <= i;j++){
        if(i%j)continue;
        // check if j is prime
        let isprime = true;
        for(let k=2;k*k<=j;k++){
          if(j%k == 0){
            isprime = false;
            break;
          }
        }
        if(isprime){
          if(!(i%(j*j))){
            mu = 0;
            break;
          }
          mu*=-1;
        }
      }
      ret += mu;
    }
  }
  return ret === 1;
};
