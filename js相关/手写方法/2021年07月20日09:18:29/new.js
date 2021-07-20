function _new(){
  let obj = {}
  let [constructor, ...args] = [...arguments]
  obj.__proto__ = constructor.prototyupe
  let result = constructor.apply(obj,args)
  if(result && typeof result === 'function' || typeof result === 'object'){
    return result
  }
  return obj
}