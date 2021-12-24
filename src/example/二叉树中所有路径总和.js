// dfs (深度优先搜索)
// 题目：找出二叉树中所有路径总和等于target 

function getPath (root, target) {
  const res = []
  const dfs = (root, target, path) => {
    if (root === null) return
    target -= root.val
    path.push(root.val)
    if (!root.left && !root.right && target === 0) { // 到了叶子节点时，判断target===0时满足要求
      res.push(path.slice(0))
    }
    dfs(root.left, target, path)
    dfs(root.right, target, path)
    path.pop() // 回溯
  }
  dfs(root, target, [])
  console.log(res)
}

