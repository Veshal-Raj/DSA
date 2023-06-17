class Node{
    constructor(value){
        this.value=value
        this.next=null
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head
            while(prev.next){
            prev=prev.next
            }
            prev.next = node
        }
        this.size++
    }
    search(value,newValue){
        const node= new Node(newValue)
        if(this.isEmpty()){
            return null
        }
        // let i=0
        let curr = this.head
        while(curr.next){
            
            if(curr.next.value===value){
                let prev=curr
                curr=curr.next
                node=prev.next
                node.next=curr
            }
            curr=curr.next
            // i++
        }
        // let i=0
        // let curr = this.head
        // while(curr){
        //     if(curr.value===value){
        //         let prev =curr.next
        //         curr.next=node
        //         node.next=prev                
        //     }
        //     curr = curr.next

        //     i++
        // }
        // return -1 
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr= this.head
            let listedValues=''
            while(curr){
                listedValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues)
        }
    }

}
const list = new LinkedList()
list.prepand(1)
list.prepand(4)
list.search(4,2)
list.print()

