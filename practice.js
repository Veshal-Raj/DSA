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
    getsize(){
        return this.size
    }
    prepand(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    append(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
                
            }
            curr.next=newNode
        }
        this.size++
    }        

    insertValueAfter(value,newValue){
        const newNode=new Node(newValue)
        let curr=this.head
        while(curr!=null){
            if(curr.value===value){
                newNode.next=curr.next
                curr.next=newNode
                this.size++
            }
            curr=curr.next
        }
    }
    insertValueBefore(value,newValue){
        const newNode=new Node(newValue)
        let curr=this.head
        let prev=null
        while(curr!==null){
            if(curr.value===value){
                if(prev===null){
                    newNode.next=curr
                    this.head=newNode
                }else{
                    prev.next=newNode
                    newNode.next=curr
                }
                this.size++
    
            }
            prev=curr
            curr=curr.next
        }
     }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr=this.head
            let listedValues=''
            while(curr){
                listedValues+=`${curr.value+" "}`
                curr=curr.next
            }
            console.log(listedValues)
        }
    }
}

const list=new LinkedList()
list.prepand(2)
list.prepand(3)
list.prepand(8)
list.append(0)
list.append(4)
list.insertValueAfter(2,5)
list.insertValueBefore(5,1)
list.print()