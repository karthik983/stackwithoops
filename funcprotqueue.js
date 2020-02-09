function Queue(){
    this.elements=[];
    this.enque=function(element){
        this.elements.push(element);
    }
    this.deque=function(){
        if(!(this.isEmpty())){
        this.elements.shift();
        }
        else{
            console.log("Sorry, this queue is already empty!")
        }
    }
    this.isEmpty=()=>{
        return !(Boolean(this.elements.length));
    }
    this.length=()=>{
        console.log(this.elements.length);
    }
    this.front=()=>{
        if(!(this.isEmpty())){
            console.log(this.elements[0]);
        }else{
            console.log("Sorry, this queue is empty!")
        }
    }
}
const queue=new Queue()
console.log(queue.isEmpty())
queue.front()
queue.enque(97)
queue.enque(7)
queue.enque(795)
queue.front()
console.log(queue)
queue.length()
console.log(queue.isEmpty())
queue.deque()
queue.deque()
queue.front()
console.log(queue)
queue.deque()
console.log(queue)
queue.deque()
queue.length()
queue.front()
console.log(queue.isEmpty())