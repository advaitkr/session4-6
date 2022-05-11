//Pair With Given Difference

var findPairs = function(nums, k) {
    let arr = []
    let obj = {}
    let count = 0;
    if(k == 0){
        
        for(let r of nums){
            
                if(obj[r]){
                     obj[r] += 1
                }
               else{
                     obj[r] = 1
               }
            
            if(obj[r] == 2) count += 1
        }
        
       return count  
    }
    
    for(let i=0;i<nums.length;i++){
            
           let res = k+nums[i]
            
           if(nums.indexOf(res) !== -1){
                
               if(arr.indexOf(res) == -1){
                   
                      arr.push(res)
               }
               
           }
        
    }
    
    return arr.length
};
let res = findPairs([3,1,4,1,5],2)
console.log(res)
