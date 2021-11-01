// 原型继承

import { extend } from "lodash"

// 缺点：1. 引用类型的属性所有实例共享。 2. 实例化时不能传参
function Parent () {
  this.names = ['dory', 'rain']
}
Parent.prototype.getNames = function () {
  console.log(this.names)
}

function Child () {}

Child.prototype = new Parent() // 原型继承

const child1 = new Child()
child1.names.push('alan')

const child2 = new Child()

console.log(child1.names, child2.names) // 两个输出一样


// 构造函数继承
// 优点： 1. 避免引用类型的属性数据共享 2.可以在子类中向父类传参 
// 缺点 1. 方法都在构造函数中定义，每次创建实例都会创建一遍方法
function Person (age) {
  this.names = ['kk', 'david']
  this.age = age
  // getNames () {
  //   console.log(this.names)
  // }
}
function Man (age) {
  Person.call(this, age) // 通过call调用父函数
}

const man1 = new Man(20)
man1.names.push('john')
console.log(man2) // { names: ['kk', 'david', 'john'], age: 20 }

const man2 = new Man(30)
console.log(man2) // { names: ['kk', 'david'], age: 30 }


// 组合继承 (最佳方法)
// Parent.call + 原型

function Animal (age) {
  this.names = ['kk', 'david']
  this.age = age
}
Animal.prototype.getNames = function () {
  console.log(this.names)
}

function People (age, sex) {
  Animal.call(this, age) // 继承属性
  this.sex = sex
}
People.prototype = new Animal() // 继承原型上的方法
People.prototype.constructor = People

const people1 = new People('25', '男')
people1.names.push('john')
console.log(people1) // { names: ['kk', 'david', 'john'], age: 25, sex: '男' }

const people2 = new People('30', '男')
console.log(people2) // { names: ['kk', 'david'], age: 30, sex: '男' }


// se6 类继承 super
class Father {
  constructor (name, age) { 
    this.name = name
    this.age = age
  }
  getNames () {
    console.log(this.name + ',' + this.age )
  }
}

class Child extends Father {
  constructor(name, age, sex) {
    super(name, age)
    this.sex = sex
  }
  sayHi() {
    console.log('我是一个'+ this.sex + '生')
  }
}
const child1 = new Child('kk', '25', '男')
child1.getNames()
child1.sayHi()