function getJson () {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
    xhr.open('get', url, true) // 默认为true,表示异步
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send()
  })
}