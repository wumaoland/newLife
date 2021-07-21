let a;
//需要怎样做 a ==1 && a== 2 && a==3 为 true？
//1、
a  = {
    b:1,
    toString : function(){
        return this.b++;
    },
    valueOf:function(){
        return this.b++
    }//两者均可
}

//2、
a = [1,2,3]
a.toString = a.shift
a.join = a.shift
//两种均可

//3、
var i = 0;
Object.defineProperty(window,'a',{// 若使用此方法则不能定义a
    get(){
        return ++i;
    }
})

if(a == 1 && a == 2 && a == 3){
    console.log('做对了')
}