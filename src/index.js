// 静态导入
// import _ from "lodash"
import "@babel/polyfill"

import number from './number.js'
import counter from './counter.js'
import './style.css'

number()
counter()

const promiseArr = [ // 安裝polyfill， 將promise、map等语法兼容低版本浏览器
  new Promise(() => {}),
  new Promise(() => {}),
]
promiseArr.map(item => {
  console.log(item)
})


// 动态导入
// function getComponent() {
//   return import('lodash').then(({ default: _}) => {
//     const element = document.createElement('div')

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//     return element

//   }).catch((error) => 'An error occurred while loading the component')
// }

// // 动态导入 使用async await
// async function getComponent () {
//   const { default: _ } = await import('lodash')
  
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['Hello', 'webpack!'], ' ')
//   return element
// }

// // Webpack v4.6.0+ 增加了对预获取（prefetch）和预加载（preload）的支持。
// // import (/* webpackPrefetch: true*/ '.path/to/loginModal.js'); 
// // 这会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部，浏览器在闲置时间预取login-modal-chunk.js文件

// // import (/* webpackPreload: true*/ 'ChartingLibrary'); 
// // 这会生成 <link rel="preload" href="chart-library-chunk.js"> 并追加到页面头部，与父chunk并行下载，

// getComponent().then((element) => {

//   document.body.appendChild(element)
// })