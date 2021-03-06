// urls:string[],max:number,callback:()=>{}
const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    console.log('timeout:',timeout)
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx)
    }, timeout)
  })
};

function sendRequest(urls,max,callback){
  let finished = 0
  const total = urls.length
  const handler = () => {
    if(urls.length){
      const url = urls.shift()
      fetch(url).then(()=>{
        finished++
      }).catch(e => {
        throw Error(e)
      }).finally(()=>{
        if(finished >= total){
          callback()
        }else{
          handler()
        }
      })
    }
  }
  for(let i = 0;i<max;i++){
    handler()
  }
}

const urls = Array.from({length: 10}, (v, k) => k);


const max = 4;

const callback = () => {
  console.log('run callback');
};


sendRequest(urls, max, callback);