Function.prototype.apply1 = function(obj,args){
  let context = obj
  let fn = Symbol()
  context[fn] = this

  let result = context[fn](...args)
  delete context[fn]
  return result
}

function sum(n1,n2){
  console.log(this.a + n1 + n2)
}

let obj = { a : 3}

sum.apply1(obj,[1,2])