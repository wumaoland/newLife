  /**
   * 原型链继承
   */
  // 父类
  function Person(name){
      this.name = name
      this.say = function(){
          console.log(this.name)
      }
  }
  // 原型属性
  Person.prototype.age = 10;

  function User(){
      this.name = 'k'
  }

  User.prototype = new Person()
  let uu = new User()
  console.log('原型继承')
  console.log(uu.age)
  console.log(uu instanceof Person)
  /**
   * 让实例的原型指向父类的实例
   * 缺点：
   * 1、新实例无法向父类传参
   * 2、所有新实例都会共享父类实例属性，若修改父类父类属性，则所有新实例原型属性也会修改
   */


  /**
   * 借用构造函数继承
   */
  function Coo(){
      Person.call(this,'coo')
  }

  let u2 = new Coo()
  console.log('借用构造函数继承')
  console.log(u2.name)
  console.log(u2.age)
  console.log(u2 instanceof Person)
  /**
   * 利用call或apply将父类的构造函数引入子类函数
   * 特点：
   * 1、只继承了父类构造函数的属性，没有继承父类原型的属性
   * 2、解决了原型继承的缺点
   * 3、可以继承多个构造函数属性，call多个
   * 4、在子实例中可向父类构造函数传餐
   * 缺点：
   * 1、只能继承父类构造函数的属性
   * 2、无法实现构造函数的复用
   * 3、每个新实例都有父类构造函数的副本，臃肿
   */


   /**
    * 组合继承
    */
  function SubType(name){
    Person.call(this,name)
  }
  SubType.prototype = new Person()
  let sub = new SubType('sub')
  console.log('组合继承')
  console.log(sub.name)
  console.log(sub.age)
  console.log(sub instanceof Person)
  /**
   * 结合了原型与原型链继承的优点，可传参和复用
   * 特点：
   * 1、可以继承父类原型上的属性，可以传参，可以复用
   * 2、每个新实例引入的构造函数属性是私有的
   * 缺点：
   * 1、调用了两次父类构造函数
   * 2、子类上的构造函数会替代原型上的父类构造函数
   */

  /**
   * 原型式继承
   */
  function content(obj){
    function F(){}
    F.prototype = obj
    return new F()
  }

  let sup = new Person()
  let sup1 = content(sup)
  console.log('原型式继承')
  console.log(sup1.age)
  console.log(sup1 instanceof Person)
  /**
   * 用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了一个可以随意增减属性的实例或者对象。object.create()就是这个原理。
   * 特点：
   * 1、类似于复制一个对象，用函数来包装
   * 缺点：
   * 1、所有实例都会继承原型上的属性
   * 2、无法实现复用
   */

  /**
   * 寄生式继承
   */
  function content1(obj){
    function F(){}
    F.prototype = obj
    return new F()
  }
  function subObject(obj){
    let sub = content1(obj)
    sub.name = 'sub2'
    return sub
  }
  let sup2 = new Person()
  let sup3 = subObject(sup2)
  console.log('寄生式继承')
  console.log(sup3)
  console.log(sup3.age)
  console.log(sup3.name)
  console.log(sup3 instanceof Person)
  /**
   * 在原型式继承外面套了个壳子
   * 特点：没有创建自定义类型，因为只是套了个壳子返回这个对象，这个函数顺理成章的就成了创建的新对象
   * 缺点：没有用到原型，无法复用
   */  

  /**
   * 寄生组合式继承
   * 寄生：在函数内返回对象然后调用
   * 组合：1、函数的原型等于另一个实例
   *      2、在函数中用apply或者call引入另一个构造函数，可传参
   */
  //寄生
  function last(obj){
    function F(){}
    F.prototype = obj
    return new F()
  }
  //last 就是F实例的另一种表示法
  let con = last(Person.prototype)
  //con实例(F实例)的原型继承了父类函数的原型
  //上述更像是原型链继承，只不过只继承了原型属性

  //组合
  function Sub(){
    Person.call(this)//这个继承了父类构造函数的属性
  }//解决了组合式调用两次构造函数的缺点
  Sub.prototype = con//继承了con实例
  con.constructor = Sub//一定要修复实例
  let sub1 = new Sub()
  //Sub的实例就继承了构造函数属性，父类实例，con的函数属性
  console.log('寄生组合式继承')
  console.log(sub1)
  console.log(sub1.age)
  console.log(sub1 instanceof Person)