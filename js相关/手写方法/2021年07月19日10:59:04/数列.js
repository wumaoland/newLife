/**
 * 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
 * X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
 * 现在需要你找出数列a的所有区间中, X值最大的那个区间;
 * 如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
 */

// TODO:


function getMax(arr){
  let n = arr.length;
  if(arr.length === 0)return 0;
  let min = [arr[0]]
  let dp = [arr[0] * arr[0]]
  let max = dp[0]
  for(let i = 1;i<n;i++){
    let val = arr[i]
    let preMin = min[i-1]
    min[i] = Math.min(preMin,val)
    let one = dp[i-1] * min[i] / preMin + val * min[i]
    let two = val * val
    if(one > two){
      dp[i] = one
    }else{
      dp[i] = two
      min[i] = val
    }
    max = Math.max(max,dp[i])
  }
  return max
}

console.log(getMax([3,1,6,4,5,2]))