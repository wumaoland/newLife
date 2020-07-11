Promise._all = function(promises){
  return new Promise(function(resolve,reject){
    const len = promises.length, count = 0, result = [];
    for(let i = 0; i < len; i++){
      Promise.resolve(promises[i].then(val=>{
        count += 1;
        result[i] = val;
        if(count = len){
          return result;
        }
      },reason=>{
        return reject(reason);
      }))
    }
  })
}


