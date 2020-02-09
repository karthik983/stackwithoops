class Queue{
    constructor(){
        this.elements=[];
    }
    enque(element){
        this.elements.push(element)
    }
    deque(){
        if(!(this.isEmpty())){
        this.elements.shift();
        }
        else{
            console.log("Sorry, this queue is already empty!")
        }
    }
    isEmpty(){
        return !(Boolean(this.elements.length));
    }
    length(){
        console.log(this.elements.length);
    }
    front(){
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