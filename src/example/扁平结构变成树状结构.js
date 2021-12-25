const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 3 },
  { id: 6, name: '部门F', parentId: 4 },
]

function transformListToTree(list) {
  const tree = []
  const map = new Map() // 记录每个id 对应的值

  for (let item of list) {
    map.set(item.id, {
      ...item,
      children: []
    })
  }

  for (let item of list) {
    const id = item.id
    const parentId = item.parentId // 父id
    if (parentId === 0) { // 一级子节点
      tree.push(map.get(id))
    } else { // 非一级子节点
      const curChildren = map.get(parentId).children // 当前遍历的元素， 获取其父元素的children
      curChildren.push(map.get(id)) // 将当前元素，放入父元素的children中
    }
  }

  return tree
}

// 输出结构
const tree = [
  { 
    id: 1, 
    name: '部门A', 
    parentId: 0,
    children: [
      { 
        id: 2, 
        name: '部门B', 
        parentId: 1, 
        children: [
          {
            id: 4, 
            name: '部门D', 
            parentId: 2,
            children: [ 
              {
                id: 6, 
                name: '部门F', 
                parentId: 4,
                children: []
              }
            ]
          }
        ]
      },
      { 
        id: 3, 
        name: '部门C', 
        parentId: 1, 
        children: [
          {
            id: 5, 
            name: '部门E', 
            parentId: 3,
            children: []
          }
        ]  
      },
    ], 
  },
]