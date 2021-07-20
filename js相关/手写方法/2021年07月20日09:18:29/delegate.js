function delegate(ele,eventType,selector,fn){
  ele.addEventListener(eventType,e => {
    let el = e.target
    while(!el.matches(selector)){
      if(ele === el){
        el = null
        break
      }
    }
    el && fn.call(el,e,el)
  },true)
  return ele
}