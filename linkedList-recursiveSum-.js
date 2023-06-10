const sumList=(head)=>{
    if(head==null)return 0;
    return head.val+sumList(head.next);
}