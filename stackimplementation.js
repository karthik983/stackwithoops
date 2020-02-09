// Using classes
class Stack{
    constructor(elements){
        this.elements=[];
    }
    push(element){
         this.elements.push(element);
    }
    pop(){
        if(this.isEmpty()){
            console.log("It's an empty array");
        }else{
        this.elements.pop();
        }
    }
    peek(){
       return(this.elements[this.elements.length-1]);
    }
    length(){
        return(this.elements.length);
    }
    isEmpty(){
        if(this.elements.length){
            return false;
        }else{
            return true;
        }
    }
    search(some){
        let sum=0;
        for(let i=0;i<this.elements.length;i++){   
            sum+=Number(this.elements[i]===some)
           
        }
        if(sum===1){
            return true;
        }
        else{
            return false;
        }
    }
    traverse(){
        for(let i=0;i<this.elements.length;i++){
        console.log(this.elements[i])
        }
    }
}

const stack=new Stack()
console.log(stack);
console.log(stack.isEmpty())
stack.pop()
stack.push(3);
stack.push(4);
stack.push(9);
stack.push(25);
console.log(stack);
console.log(stack.search(250))
console.log(stack.length())
console.log(stack.peek());
stack.pop()
stack.pop()
console.log(stack);
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.length())
console.log(stack.search(2))
console.log(stack.search(4))
console.log(stack.search(3))
stack.traverse();