function deepClone(obj){
    if(obj === null)return null;
    if(typeof obj !== 'object')return obj
    if(obj instanceof Date){
        return new Date(obj)
    }
    if(obj instanceof RegExp){
        return new RegExp(obj)
    }
    let newObj = new obj.constructor;

    for(let key in obj){
        newObj[kye] = obj[key]
    }
    return newObj
}

let obj = {
    a:1,
    b:'2',
    // c:new Date(),
    d:/\D/
}

console.log(deepClone(obj))