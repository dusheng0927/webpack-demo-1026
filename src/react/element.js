class Element {
  constructor(type, props, children) {
    this.type = type
    this.key = props.key
    this.props = {
      ...props,
      children: children,
    }
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children)
}

function render(vnode, container) { // 将vnode生成真实dom, 放入contain容器中
  const el = (el instanceof Element) ? document.createElement(vnode.type) : document.createTextNode(vnode)
  // 设置属性
  for (let key in vnode.props) {
    // 排除 props.children
    setAttr(el, key, vnode.props)
  }
  vnode.children.forEach(child => {
    child = (child instanceof Element) ? render(child, el) : document.createTextNode(child)
    el.appendChild(child)
  })
  // 将真实DOM放入容器
  let root =  document.getElementById(container)
  root.appendChild(el)
}

function setAttr(node, key, props) {
  switch (key) {
    case 'value':
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        node.value = props[key]
      } else {
        node.setAttribute(key, props[key])
      }
      break;
    case 'className':
      node.setAttribute('class', props[key])
      break;
    case 'style':
      node.style.cssText = props[key]
      break;
    default:
      node.setAttribute(key, props[key])
      break;
  }
}


export { createElement, render }