
  const items = new WeakMap();
  let count = 0;
class Stack{
    constructor(){
        items.set(this,[])
    }
    push(el){
       items.get(this).push(el)

        

    }
    peek(){
        let temp = items.get(this);
        return temp[temp.length -1]
    }
    pop(){
        return items.get(this).pop()

    }
    size(){
        return items.get(this).length
    }
}