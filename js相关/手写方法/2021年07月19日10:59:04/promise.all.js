function promiseAll(arr){
  return new Promise((resolve,reject)=>{
    if(!Array.isArray(arr)){
      return reject(new Error('arguments is mast be an array'))
    }
    let resArr = []
    for(let item of arr){
      (function(){
        Promise.resolve(item).then(res => {
          resArr.push(res)
          if(resArr.length == arr.length){
            return resolve(resArr)
          }
        },err => {
          return reject(err)
        }).catch(err => {
          console.log(err)
        })
      })()
    }
  })
}


//测试
const pro1 = new Promise((res,rej) => {
  setTimeout(() => {
    res('1')
  },3000)
})
const pro2 = new Promise((res,rej) => {
  setTimeout(() => {
    res('2')
  },2000)
})
const pro3 = new Promise((res,rej) => {
  setTimeout(() => {
    res('3')
  },1000)
})

const proAll = promiseAll([pro1,pro2,pro3])
.then(res => 
  console.log(res) // 3秒之后打印 ["1", "2", "3"]
)
.catch((e) => {
  console.log(e)
})