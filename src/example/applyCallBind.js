//
function A () { console.log(this.name)}
 
const obj = {
  name: 'hello'
}

// 调用方式
// A.myApply(obj, args)
Function.prototype.myApply = function (ctx, args) {
  if (typeof this !== 'function') {
    throw TypeError('Type Error')
  }
  ctx = ctx || window
  ctx[fn] = this // / this 指向 A 方法

  const res = args ? ctx[fn](args) : ctx[fn]()
  delete ctx[fn]

  return res
}


// 调用方式
// A.myBind(obj, ...args)
Function.prototype.myCall = function (ctx, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('Type Error')
  }
  ctx = ctx || window
  ctx[fn] = this // / this 指向 A 方法

  const res = ctx[fn](...args) 
  delete ctx[fn]

  return res
}

// 调用方式：
// var b = A.myBind(obj, 20)
// b(...args2) // 返回 A.apply(obj, args.concat(args2))

// c = new b() // 被当做构造函数时，返回的是 A 的 实例对象
// c() // 报错，因为c不是方法，是个对象

Function.prototype.myBind = function (ctx, ...args) {
  const self = this // this 指向 A 方法
  if (typeof self !== 'function') {
    throw TypeError('Type Error')
  }
  
  return function F () {
    if (this instanceof F) { // F 被当作构造函数时，返回 A 的实例
      return  new self(...args, ...arguments)
    } else {
      return self.apply(ctx, args.concat(arguments))
    }
  }
}