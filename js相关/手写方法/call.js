Function.prototype._call = function(context){
    context = context || window
    let key = Date.now().toString(32).slice(0,8);
    context[key] = this
    let args = Array.from(arguments.slice(1))
    context[key](...args)
    delete context[key]
    key = null
    args = null
}

Function.prototype._apply = function(context){
    if(context === undefined || context === null){
        context = window
    }
    let key = Date.now().toString(32).slice(0,8);
    context[key] = this

    let arg = Array.from(arguments.slice(1))
    context[key](arg)
    delete context[key]
}

Function.prototype._bind = function(){
    let me = this
    context = [].shift.call(arguments)
    if(context === undefined || context === null){
        context = window
    }
    let args = [].slice.call(arguments)
    return function(){
        me.apply(context,[].concat.call(args,arguments))
    }
}