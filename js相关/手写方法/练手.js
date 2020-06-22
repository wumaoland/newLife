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

function debounce(fn,wait){
    let timeout
    return function(){
        clearTimeout(timeout)
        let context = this
        let args = arguments
        timeout = setTimeout(
            fn.apply(context,args),wait
        )
    }
}

function throttle(fn,wait){
    let timeout = 0;
    return function(){
        if(Date.now - timeout > wait){
            let context = this
            let args = arguments
            timeout = Date.now
            fn.apply(context,args)            
        }
    }
}

function filtten(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item) ? filtten(item) : item)
    },[])
}
