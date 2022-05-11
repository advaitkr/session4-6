//Given an array of size N containing only 0s, 1s, and 2s; 
//sort the array in ascendingorder.

const sorted = arr =>{
   let low = 0;
   let mid = 0;
   let high = arr.length - 1;
   let i = 0;
   while(mid <= high){
       switch(arr[mid]){
       case 0:{
          temp = arr[low];
          arr[low] = arr[high]
          arr[mid] = temp;
          low += 1;
          mid += 1;
          break;
       }
       case 1:
           mid += 1;
           break;
        case 2 :{
          temp = arr[mid];
          arr[mid] = arr[high]
          arr[high] = temp;
          high -= 1;
          break;

        }


       }
      
   }

   return arr
}
let res = sorted([1,2,2,1,0,0,1,2])
console.log(res)