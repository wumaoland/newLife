function inheritPrototype(subType,superType){
  var prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function Father(name){
  this.name = name
  this.colors = ['red','blue','green']
}

Father.prototype.sayName = function(){
  alert(this.name)
}

function Son(name,age){
  Father.call(this,name)
  this.age = age
}

inheritPrototype(Son,Father)


Son.prototype.sayAge = function(){
  alert(this.age)
}


var demo1 = new Son('tiantian',21)
var demo2 = new Son('tiantianup',20)

demo1.colors.push(2)
demo2.colors.push(3)

console.log(demo1)
console.log(demo2)



function _inherits(subType,superType){
  subType.prototype = Object.create(superType && superType.prototype,{
    consturctor:{
      value:subType,
      enumerable:false,
      writable:true,
      configurable:true
    }
  })
  if(superType){
    Object.setPrototypeOf ? Object.setPrototypeOf(subType,superType) : subType.__proto__ = superType
  }
}