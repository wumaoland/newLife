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

Function.prototype._apply = function(context){
    context = context || window
    let args = Array.from(arguments.slice(1))
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    context[key](args)
    delete context[key]
}
Function.prototype._bind = function(context){
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

/**
 * 2020-07-01 22:12:58
 * @param {*} fn 
 * @param {*} wait 
 */
function debounce(fn,wait){
    let timer;
    return function(){
        let context = this;
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(context,args)
        },wait)
    }
}

function throttle(fn,wait){
    let timer = 0;
    return function(){
        let context = this;
        let args = arguments;
        if(Date.now() - timer > wait){
            timer = Date.now()
            fn.apply(context,args)
        }
    }
}

function filtten(arr){
    return arr.reduce((result,item)=>{
        return reduce.concat(Array.isArray(item) ? filtten(arr) : item)
    },[])
}

Function.prorotype._call = function(context){
    let args = Array.from(arguments.slice(1))
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](...args)
    delete context[key]
    return res
}

Function.prototype._apply = function(context){
    arguments = Array.from(arguments)
    let context = arguments.shift()
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](arguments)
    delete(context)
    return res
}

Function.prototype._bind = function(context){
    let me = this
    let args = Array.from(arguments).slice(1)
    return function(){
        return me.apply(context,Array.from(arguments).concat(args))
    }
}

Function.prototype._call = function(context){
    context = context || window
    let args = Array.fron(arguments).slice(1)
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](...args)
    delete context[key]
    return res
}

Function.prototype._apply = function(context){
    context = context || window
    let args = Array.fron(arguments).slice(1)
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](args)
    delete context[key]
    return res
}

Function.prototype._bind = function(context){
    let me = this
    let args = Array.fron(arguments).slice(1)
    return function F(){
        if(this instanceof F){
            return this.apply(arguments.concat(args))
        }
        return context.apply(me,arguments.concat(args))
    }
}

function _instanceOf(left,right){
    left = left.__proto__
    right = right.prototype
    while(left){
        if(left === right)return true;
        if(left.__proto__ === null)return false;
        left = left.__proto__
    }
}

/**
 * 2020-07-02 22:21:52
 */

function debounce(fn,wait){
    let timer;
    return function(){
        let context = this;
        let args = Array.from(arguments);
        clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(context,args)
        },wait)
    }
}

function throttle(fn,wait){
    let timer = 0;
    return function(){
        let context = this;
        let args = Array.from(arguments)
        if(Date.now() - timer > wait){
            timer = Date.now()
            fn.apply(context,args)
        }
    }
}

function filtten(arr){
    return arr.reduce(function(result,item){
        return result.concat(Array.isArray(item) ? filtten(item) : item)
    },[])
}

function _instanceOf(left,right){
    left = left.__proto__
    right = right.prototype
    while(true){
        if(left === null)return false;
        if(left === right)return true;
        left = left.__proro__
    }
}

Function.prototype._call = function(context){
    context = context || window
    let args = Array.fron(arguments).slice(1)
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](...args)
    delete context[key]
    return res
}

Function.prototype._apply = function(context){
    context = context || window
    let args = Array.fron(arguments).slice(1)
    let key = Date.now().toString(32).slice(0,8)
    context[key] = this
    let res = context[key](args)
    delete context[key]
    return res
}

Function.prototype._bind = function(context){
    let me = this
    let args = Array.from(arguments).slice(1)
    return function(){
        if(this instanceof me){
            return this.apply(me,arguments.concat(args))
        }
        context.apply(me,arguments.concat(args))
    }
}