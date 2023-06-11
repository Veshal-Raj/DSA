//node is a single piece of linked list
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//linkedList is a collection of nodes
class LinkedList{
    constructor(){
        this.head = null //reference to first value, for eg: { (A)-->null }
        this.size = 0  // no.of nodes in linkedlist (default -0)
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
}

const list = new LinkedList()  //object
console.log('List is empty?',list.isEmpty())
console.log('List size',list.getSize())