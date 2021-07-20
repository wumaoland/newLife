function _new(fn,...arg){
    const obj = {}
    obj.__proto__ = fn.prototype
    fn.apply(obj,arg)
    return Object.prototype.toString.call(obj) === '[Object object]' ? obj : {}
}