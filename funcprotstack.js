// using function prototype
function Stack(){
    this.elements=[];
    this.push=function(element){
        this.elements.push(element);
    }
    this.pop=function(){
        if(this.isEmpty()){
            console.log("It's an empty array");
        }else{
        this.elements.pop();
        }
    }
    this.peek=function(){
        return(this.elements[this.elements.length-1]);
    }
    this.length=function(){
        return(this.elements.length);
    }
    this.isEmpty=function(){
        if(this.elements.length){
            return false;
        }else{
            return true;
        }
    }
    this.search=function(some){
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
    this.traverse=function(){
        for(let i=0;i<this.elements.length;i++){
            console.log(this.elements[i])
            }
    }

}
const stack=new Stack()
console.log(stack);
console.log(stack.isEmpty())
stack.pop()
stack.push(24);
stack.push(46);
stack.push(94);
stack.push(235);
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
console.log(stack.search(46))
console.log(stack.search(3))
stack.traverse();