var longestPalindrome = function(s){
  if(s.length == 0)return ''
  let res = s[0]
  let dp = []
  for(let i = s.length -1; i>=0; i--){
    dp[i] = []
    for(let j = i;j<s.length ;j++){
      console.log('i:',i,'j:',j)
      if(j - i === 0){ 
        dp[i][j] = true
        console.log('dp1',dp)
        debugger
      }else if( j - i === 1 && s[j] === s[i]){
        dp[i][j] = true
        console.log('dp2',dp)
        debugger
      }else if( s[i] === s[j] && dp[i + 1][j -1]){
        dp[i][j] = true
        console.log('dp3',dp)
        debugger
      }
      if(dp[i][j] && j - i +1 > res.length){
        res = s.slice(i,j+1)
        console.log('res',res)
        debugger
      }
    }
  }
  return res
}