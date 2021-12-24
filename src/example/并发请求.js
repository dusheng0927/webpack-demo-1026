// 1. 将所有的异步请求放入队列
// 2. 确定并发数量max, 先同时发起 max 个请求
// 3. 有请求结束, 再发起下一个请求即可


function sendRequest (forms, max = 4) { // 并发数为4
  return new Promise ((resolve,  reject) => {
    let len = forms.length
    let idx = 0 // 当前已经发起的请求数量
    let finishedCount = 0 // 当前请求完成的数量

    const start = () => {
      while (idx < len && max > 0) { 
        max-- // 占用通道
        let form = forms[idx]
        let index = forms[idx].index
        idx++
        request({
          url: 'http://localhost:8080/upload',
          data: form,
          onProgress: this.createProgressHandle(index), // 控制每个文件上传的进度显示
        }).then(() => {
          max++ // 释放通道
          finishedCount++
          if (finishedCount === len) { // 所有请求都已完成
            resolve()
          } else { // 没完成，递归调用start
            start()
          }
        })
      }
    }
    start()
  })
}

// 文件切片， 利用file.slice(cur, cur + size) 生成切片
let chunkList = [
  {
    file: '',
    filename: '',
    fileHash: '', // spark-md5
    hash: '',
    index: '',
    percentage: 0,
  }
]

// 上传文件
async function uploadChunks (uploadedList = []) {
  // 先过滤掉已经上传了的切片
  // 然后用 FormData 生成要发送的数据
  const formlist = chunkList.filter(item => !uploadedList.includes(item.hash)).map((chunk,index) => {
    const { file, filename, fileHash, hash} = chunk
    const formData = new FormData()
    formData.append('file', file)
    formData.append('filename', filename)
    formData.append('fileHash', fileHash)
    formData.append('hash', hash)
    formData.append('index', index)
    return { formData, index }
  })
  const ret = await sendRequest(formlist) // 控制并发
  if (uploadedList.length + ret.length === this.chunkList.length) { // 所有切片都上传成功之后， 向服务器发起合并切片的请求
    // 上传和已经存在之和 等于全部的再合并
    mergeRequest()
  }
}


function request ({
  url,
  method = 'post',
  data,
  headers = {},
  onProgress = e => e,
}) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.upload.onProgress = onProgress
    xhr.send(data)
    xhr.onload = e => {
      resolve(e.target.response)
    }
  })
}

function createProgressHandle (index) {
  return e => {
    this.chunkList[index]['percentage'] = parseInt(String(e.loaded / e.size) * 100).toFixed(2)
  }
}