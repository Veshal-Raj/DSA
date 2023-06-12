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
    getSize(){
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
            let prev = this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        } 
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let point = this.head
            let str=""
            while(point){
                str=str+" "+point.value
                point=point.next
            }
            console.log(str)
        }
    }
}

const list = new LinkedList()
list.append(11)
list.append(10)
list.append(9)
list.prepand(12)
list.prepand(13)
list.print()



























// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{ 
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev = this.head // here prev is pointing the head - 
//             while(prev.next){
//                 prev=prev.next // here prev traverse till prev.next exist
//             } 
//                 prev.next=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty")
//         }else{
//             let point = this.head
//             let str=""
//             while(point){
//                 str=str+" "+point.value
//                 point=point.next
//             }
//             console.log(str)
//         }
//     }
// }

// const list = new LinkedList()
// list.append(2)
// list.prepend(1)
// list.append(3)

// list.print()
