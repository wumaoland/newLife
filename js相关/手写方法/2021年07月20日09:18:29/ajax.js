var request = new XMLHttpRequest()
request.open('GET','index/a/b/c?name=tiantian',true)
request.onReadystateChange = function(){
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText)
  }
}

request.send()