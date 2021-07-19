Function.prototype.bind1 = function(){
  const args = Array.prototype.slice.call(arguments)
  let mythis = args.shift()
  let self = this
  return function(){
    return self.apply(mythis,args)
  }
}


function fn(a,b){
  console.log(this,a+b)
}

fn.bind1({a:5},1,2)()