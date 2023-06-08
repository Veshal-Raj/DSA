function isPowerOf(n){
    if(n<1){
        return false
    }
    return (n & (n-1))===0
}



// function isPowerOf(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//     if(n%2!==0){
//         return false
//     }
//     n=n/2;
//     }
//     return true
// }

console.log(isPowerOf(1));
console.log(isPowerOf(2));
console.log(isPowerOf(10)); 