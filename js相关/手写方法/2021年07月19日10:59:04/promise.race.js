function promiseRace(arr){
  if(!Array.isArray(arr)){
    return new Error('arguments is mast be an array')
  }
  return new Promise((resolve,reject)=>{
    for(let item of arr){
      Promise.resolve(item).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
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

const proAll = promiseRace([pro1,pro2,pro3])
.then(res => 
  console.log(res) // 3秒之后打印 ["1", "2", "3"]
)
.catch((e) => {
  console.log(e)
})