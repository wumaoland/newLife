// 问题代码如下
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }

// console.log(new Date, i);

// 第一种 匿名函数传参
// for(var i = 0;i<5;i++){  
//   (function(j){
//     setTimeout(function(){
//       console.log(new Date(),j)
//     }, 1000);
//   })(i)
// }
// console.log(new Date,i)

// 第二种 函数传参
// function output(i){
//   setTimeout(() => {
//     console.log(new Date,i)
//   }, 1000);
// }

// for(var i = 0;i<5;i++){
//   output(i)
// }
// console.log(new Date,i)


// 第三种 promise
// const task = []

// const output = (i) => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(new Date,i)
//     resolve()
//   }, 1000 * i);
// })

// for(var i = 0;i<5;i++){
//   task.push(output(i))
// }

// Promise.all(task)

// 第四种
function sleep(i){
  return new Promise((resolve)=>{
    setTimeout(() => {
      console.log(new Date,i)
      resolve()
    }, i * 1000);
  })
}

(async ()=>{
  for(var i = 0;i<5;i++){
    if(i>0){
      await sleep(i)
    }else{
      console.log(new Date,i)
    }
  }
})()