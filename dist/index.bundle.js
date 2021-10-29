"use strict";
(self["webpackChunkwebpack_demo_1026"] = self["webpackChunkwebpack_demo_1026"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);
// 静态导入


// import Icon from './dog.jpg'
// import Data from './data.xml'


function component () {
  const element = document.createElement('div')
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // const myIcon =  new Image()
  // myIcon.src = Icon
  // element.appendChild(myIcon)

  // console.log(Data)

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"]

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

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Another', 'module', 'loaded!'], ' '))

function printMe () {
  console.log('I get called from print.js! 123')
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzQjtBQUNGO0FBQ3BCO0FBQ0E7QUFDNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRG1CO0FBQ3ZCO0FBQ0EsWUFBWSxrREFBTTtBQUNsQjtBQUNlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby0xMDI2Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby0xMDI2Ly4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOmdmeaAgeWvvOWFpVxyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi9kb2cuanBnJ1xyXG4vLyBpbXBvcnQgRGF0YSBmcm9tICcuL2RhdGEueG1sJ1xyXG5pbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludFwiXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQgKCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpXHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpXHJcblxyXG4gIC8vIGNvbnN0IG15SWNvbiA9ICBuZXcgSW1hZ2UoKVxyXG4gIC8vIG15SWNvbi5zcmMgPSBJY29uXHJcbiAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKERhdGEpXHJcblxyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJ1xyXG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZVxyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bilcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbi8vIOWKqOaAgeWvvOWFpVxyXG4vLyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbi8vICAgcmV0dXJuIGltcG9ydCgnbG9kYXNoJykudGhlbigoeyBkZWZhdWx0OiBffSkgPT4ge1xyXG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJylcclxuXHJcbi8vICAgICByZXR1cm4gZWxlbWVudFxyXG5cclxuLy8gICB9KS5jYXRjaCgoZXJyb3IpID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKVxyXG4vLyB9XHJcblxyXG4vLyAvLyDkvb/nlKhhc3luYyBhd2FpdFxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQgKCkge1xyXG4vLyAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KCdsb2Rhc2gnKVxyXG4gIFxyXG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayEnXSwgJyAnKVxyXG4vLyAgIHJldHVybiBlbGVtZW50XHJcbi8vIH1cclxuXHJcbi8vIC8vIFdlYnBhY2sgdjQuNi4wKyDlop7liqDkuoblr7npooTojrflj5bvvIhwcmVmZXRjaO+8ieWSjOmihOWKoOi9ve+8iHByZWxvYWTvvInnmoTmlK/mjIHjgIJcclxuLy8gLy8gaW1wb3J0ICgvKiB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUqLyAnLnBhdGgvdG8vbG9naW5Nb2RhbC5qcycpOyBcclxuLy8gLy8g6L+Z5Lya55Sf5oiQIDxsaW5rIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImxvZ2luLW1vZGFsLWNodW5rLmpzXCI+IOW5tui/veWKoOWIsOmhtemdouWktOmDqO+8jOa1j+iniOWZqOWcqOmXsue9ruaXtumXtOmihOWPlmxvZ2luLW1vZGFsLWNodW5rLmpz5paH5Lu2XHJcblxyXG4vLyAvLyBpbXBvcnQgKC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlKi8gJ0NoYXJ0aW5nTGlicmFyeScpOyBcclxuLy8gLy8g6L+Z5Lya55Sf5oiQIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiY2hhcnQtbGlicmFyeS1jaHVuay5qc1wiPiDlubbov73liqDliLDpobXpnaLlpLTpg6jvvIzkuI7niLZjaHVua+W5tuihjOS4i+i9ve+8jFxyXG5cclxuLy8gZ2V0Q29tcG9uZW50KCkudGhlbigoZWxlbWVudCkgPT4ge1xyXG5cclxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbi8vIH0pIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnNvbGUubG9nKF8uam9pbihbJ0Fub3RoZXInLCAnbW9kdWxlJywgJ2xvYWRlZCEnXSwgJyAnKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUgKCkge1xyXG4gIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEgMTIzJylcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=