function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([-8,2,3,5,1,6],5))
console.log(linearSearch([-8,2,3,5,1,6],1))
console.log(linearSearch([-8,2,3,5,1,6],4))