// 静态导入
import _ from "lodash"
import './style.css'
// import Icon from './dog.jpg'
// import Data from './data.xml'
import printMe from "./print"

function component () {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // const myIcon =  new Image()
  // myIcon.src = Icon
  // element.appendChild(myIcon)

  // console.log(Data)

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}
document.body.appendChild(component());

// 动态导入
// function getComponent() {
//   return import('lodash').then(({ default: _}) => {
//     const element = document.createElement('div')

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//     return element

//   }).catch((error) => 'An error occurred while loading the component')
// }

// // 使用async await
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