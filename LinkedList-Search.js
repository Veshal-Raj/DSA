class Node{
    constructor(value){
        this.value=value
        this.node=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getValue(){
        return this.size
    }
    prepand(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            const prev = this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }
}