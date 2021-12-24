// 找出字符串中的最长回文子串
// 定义状态： dp[i][j] 表示子串s[i...j]是否为回文子串, bool值
// 转移方程：dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
// 当dp[i][j]为true， 表示回文字符串的长度为：j-i+1 ， 当 j-1+1 > max 时, max = j-i + 1, 同时记录当前的开始位置begin, 最后对字符串进行截取str.substr(begin, max)

function longestHuiWenStr (s) {
  if (s.length < 2) return s
  let max = 1
  let start = 0
  const dp = new Array(len) // 生成二维数组
  for (let i = 0; i < s.length; i++ ) {
    dp[i] = new Array(len).fill(false)
    dp[i][i] = true
  }

  for (let j = 1; j < s.length; j++){
    for(let i=0; i < j; i++) { // i 始终在 j 的左边
      if (j-i < 3) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i+1][j-1]
      }
      if (dp[i][j] && j-i+1 > max) { // 当最大值变化时，记录当前dp[i][j] 的起始字符的位置
        max = j-i+1
        start = i
      }
    }
  }
  return s.substr(start, max) // start表示起始位置索引，max表示截取的长度
}