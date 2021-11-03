// 求数组中三数之和等于target
function threeNum(arr, target) {
  let len = arr.length
  let res = []
  if (len < 3) {
    return res
  }

  // 排序
  arr = arr.sort((a,b) => a-b) // 从小到大
  for (let i = 0; i < len - 2; i++) {
    // 去重, 跳过本次循坏
    if (i > 0 && arr[i] === arr[i-1]) {  // 这一步很重要，避免结果重复
      continue
    }
    let left = i+1
    let right = len -1
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right]
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else { // 相等
        res.push([arr[i], arr[left], arr[right]])
        // 跳过重复的元素
        while(left < right && arr[left] === arr[left+1]){
          left++
        }
        while(left < right && arr[right] === arr[right-1]){
          right--
        }
        left++
        right--
      }
    }
  }
  return res
} 
