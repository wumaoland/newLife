function sleep(fn,time){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(fn)
    }, time);
  })
}

function saySth(name){
  console.log(`hello ${name}~`)
}


async function autoPlay(){
  await sleep(saySth('星星'),1000)
  await sleep(saySth('pp'),2000)
  await sleep(saySth('饼饼'),3000)
}
autoPlay()