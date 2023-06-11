
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 5
    }
    isEmpty(){
        return this.size===5
    }
    getSize(){
        return this.size
    }
}

const list = new LinkedList()
console.log('List is empty?',list.isEmpty())
console.log('List size',list.getSize())