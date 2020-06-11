//防抖
function debounce(fn,wait){
    let timeout
    return function(){
        clearTimeout(timeout)
        let context = this;
        let args = arguments;
        timeout = setTimeout(
            fn.apply(context,args),wait
        )
    }
}
//节流
function throttle(fn,wait){
    let timmer = 0;
    return function(){
        let context = this;
        let args = arguments;
        if(Date.now() - timmer > wait){
            fn.apply(context,args)
            timmer = Date.now()
        }
    }
}

