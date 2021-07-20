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


function Promise(fn){
  let me = this;
  let status = 'pending';
  let value = undefined;
  let reason = undefined;

  function resolve(val){
    if(status === 'pending'){
      status = 'fulfilled'
      value = val
    }
  }

  function reject(err){
    if(status === 'pending'){
      status = 'rejected'
      reason = err
    }
  }

  try{
    fn(resolve,reject)
  }catch(err){
    reject(err)
  }

  Promise.prototype.then = function(resolve,reject){
    let self = this;
    if(self.state === 'fulfilled'){
      resolve(self.value)
    }
    if(self.state === 'rejected'){
      reject(self.reason)
    }
  }
}

let promise = new Promise((resolve,reject)=>{
  resolve('return resolve')
})

promise.then(data=>{
  console.log('success',data)
},err=>{
  console.log('err',err)
})