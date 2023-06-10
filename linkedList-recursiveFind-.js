const linkedListFind=(head,target)=>{
    if(head==null)return false;
    if(head==target)return true;
    return linkedListFind(head.next,target);
}