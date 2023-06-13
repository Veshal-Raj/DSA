class Node{
    constructor(value){
        this.value=value
        this.link=null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
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
            node.link=this.head
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
            while(prev.link){
                prev=prev.link
            }
            prev.link=node
        }
        this.size++
    }
    Insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.prepand(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.link
            }
            node.link=prev.link
            prev.link=node
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let ListedValues=''
            while(curr){
                ListedValues += `${curr.value} `
                curr=curr.link
            }
            console.log(ListedValues)
        }
    }
}
const list = new LinkedList()
list.prepand(77)
list.append(9)
list.Insert(10,2)
list.print()