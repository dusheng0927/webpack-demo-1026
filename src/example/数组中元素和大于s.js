// 长度最小的子数组

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
// 并返回其长度。如果不存在符合条件的子数组，返回 0

// s = 7, nums = [2,3,1,2,4,3] 输出：2 

function minSubArrLen (arr, s) { // 滑动窗口
  let len = arr.length
  let left = 0
  let sum = 0
  let result = len
  for (let right = 0; right < len; right++) {
    sum += arr[right]
    while(sum >= s ) {
      result = Math.min(right - left + 1, result)
      sum -= arr[left++]
    }
  }
  return result
}

function minSubArrLen (arr, s) { // 滑动窗口
  let len = arr.length
  let right = 0
  let sum = 0
  let result = len
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      sum = sum - arr[i-1]
    }
    while(right < len) {
      if (sum + arr[right] < s) {
        sum = sum + arr[right]
        right++
      } else {
        result = Math.min(right - i + 1, result)
      }
    }
  }
  return result
}