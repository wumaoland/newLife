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

/**
 * 2020-06-30 22:56:22
 * @param {*} fn 
 * @param {*} wait 
 */
function debounce(fn,wait){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        if(timmer){
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn.apply(this,args)
            },wait)

        }
    }
}

function throttle(fn,wait){
    let timer = 0
    return function(){
        let context = this
        let args = arguments
        if(Date.now() - timer > wait){
            timer = Date.now()
            fn.apply(context,args)
        }
    }
}

function filtten(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item) ? filtten(item) : item)
    },[])
}

Function.prototype._call = function(context){
    context = context || window

    let args = Array.from(arguments.slice(1))
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    context[key](...args)
    delete context[key]    
}

Function.prorotype._apply = function(context){
    context = context || window
    let args = Array.from(arguments.slice(1))
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    context[key](args)
    delete context[key]
}
Function.prototype._bind = function(){
    let me = this
    arguments = Array.from(arguments)
    let context = arguments.shift()
    conetxt = context || window
    
    me.apply(context,arguments)
}

function create(){
    let obj = {}, constructor = ([].shift.call(arguments))
    obj.__proto__ = constructor.prorotype
    let res = constructor.apply(obj,arguments)

    return typeof res === 'object' ? obj : {}
}