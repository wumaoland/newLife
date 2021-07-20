Promise.all = arr => {
    let res = []
    let count = 0;
    let length = arr.length
    return new Promise(function(resolve,reject){
        for(let val of arr){
            Promise.resolve(val).then(function(data){
                res[count] = data;
                count++;
                if(count === length){
                    resolve(res)
                }
            },function(err){
                return reject(err)
            })
        }
    })
}