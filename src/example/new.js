
function newOperator () {
  var obj = new Object() // 生成一个新对象
  const Ctor = Array.prototype.shift.call(arguments) // 获取第一个参数，为构造函数

  obj.__proto = Oject.create(Ctor.prototype) // 指定原型
  
  let res = Ctor.apply(obj, arguments) // 或者 Ctor.call(obj, ...arguments)

  return typeof res === 'Object' ? res || obj : obj
}