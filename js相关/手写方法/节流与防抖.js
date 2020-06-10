/**
 * 函数节流的两种实现方式
 * @param {*} fn 
 * @param {*} wait 
 */
function throttle(fn,wait){
    let timeout
    return function(){
        let context = this;
        let args = arguments;
        if(!timeout){
            timeout = setTimeout(()=>{
                timeout = null
                fn.apply(context,args)
            },wait)
        }
    }
}

function throttle(fn,wait){
    let timmer = 0
    return function(){
        let context = this;
        let args = arguments;
        let now = Date.now();
        if(now - timmer > wait){
            fn.apply(context,args)
            timmer = now
        }
    }
}


/**
 * 函数节流用来控制频率
 * 函数防抖用来控制次数
 */

 /**
  * 函数防抖
  * @param {*} fn 
  * @param {*} wait 
  */

function debounce(fn,wait){
    let timeout
    return function(){
        let context = this;
        let args = arguments;
        if(timeout)clearTimeout(timeout)
        timeout = setTimeout(()=>{
            fn.apply(context,args)
        },wait)
    }
}