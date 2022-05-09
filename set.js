const checkDuplicate = (arr) =>{
    const mySet1 = new Set()
       for(let r of arr){

           if(!mySet1.has(r)){
             mySet1.add(r)
           }
       }
     if(mySet1.size == arr.length){
         return true
     }
     else{
         return false
     }
}
let res = checkDuplicate([1,5,-1,4,1])
console.log(res)
