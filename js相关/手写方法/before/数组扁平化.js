let arr = [1,2,3,[1,2,3,[1,2,3,[1,2,3,[1,2,3]]]]]
console.log(flatten(arr))

function flatten(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item) ? flatten(item) : item)
    },[])
}

function flatten(arr){
    let res = []
    arr.forEach(item=>{
        if(Array.isArray(item)){
            res = res.concat(flatten(item))
        }else{
            res.push(item)
        }
    })
    return res
}