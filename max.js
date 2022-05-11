//find the contiguous subarray within an array, 
//A of length N which has the largest sum.
//Input Format:The first and the only argument contains an integer array, A. 
//Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.


var maxSubArray = function(nums) {
     
    let sum = nums[0];
  for(let i=1;i<nums.length;i++){
      nums[i] = Math.max(nums[i],nums[i] + nums[i-1]);
      sum = Math.max(sum,nums[i])

   }
return sum
};
let res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(res)