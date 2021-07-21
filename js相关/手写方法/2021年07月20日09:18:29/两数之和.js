function twoSum(nums,target){
  for(let i = 0;i<nums.length;i++){
    let other = nums.indexOf(target - nums[i])
    if(other > -1 && i !== other){
      return [i,other]
    }
  }
}