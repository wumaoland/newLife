/**
 * 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。 
 * 如孩子的要求是 [1, 3, 5, 4, 2]，饼干大小是[1, 1]，最多能让 1 个孩子满足。 如孩子的要求是 [10, 9, 8, 7, 6]，饼干大小是[7, 6, 5]，最多能让 2 个孩子满足。
 * 符合贪心算法思想，在满足孩子的情况下，使孩子的饼干尽可能小。
 * 
 */


function splitCake(childrenIssue,cake){
    let sortChildIssue = childrenIssue.sort((item,item2)=>item - item2)
    let sortCake = cake.sort((item,item2)=> item - item2)
    let result = []
    for(let i = 0,j=0;i<sortChildrenIssue.length && j< sortCake.length; j++){
      if(sortChildrenIssue[i] <= sortCake[j]){
        result.push(sortChildrenIssue[i])
          i++
      }
    }
    return result
}