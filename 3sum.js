//Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.Return the sum of the three integers.
//Assume that there will only beone solution

var threeSumClosest = function(nums, target) {
    
    var len = nums.length;
  var res = nums[0] + nums[1] + nums[2];
  var sum = 0;
  var l = 0;
  var r = 0;
  nums.sort((a, b) => (a - b));
  for (var i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
    }
  }
  return res;
    
};
let res = threeSumClosest([-1,2,1,-4],1)
console.log(res)