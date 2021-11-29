let Vue // 全局的Vue实例对象
let initPath = '/'

class VueRouter {
  constructor(){
    // 将current定义为响应式数据，变更时会立即触发router-view组件重新渲染
    Vue.util.defineReactive(this, 'current', initPath)
    this.mode = 'hash'
    this.init()
  }
  int () {
    if ( this.mode === 'hash') {
      // 首次渲染
      window.addEventListener('load', () => {
        this.current = location.hash.slice(1) // 去掉'#'
      })
      // 更新
      window.addEventListener('hashchange', () => {
        this.current = location.hash.slice(1) // 去掉'#'
      })
    }
  }
}

VueRouter.install = (_vue) => {
  Vue = _vue // vue实例
  // 给调用的组件添加属性 $router
  Vue.mixin({
    beforeCreate() {
      if (this.$option.router) { // this 表示根实例
        Vue.prototype.$router = this.$option.router
      }
    }
  })

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true,
      }
    },
    render (h) {
      return h(
        'a', 
        {
          attrs: { href: '#' + this.to}
        }, 
        this.$slots.default
      )
    }
  })

  Vue.component('router-view', { // current是响应式，变更时会触发router-view组件更新
    render (h) {
      // 根据当前路由值，找到对应的组件，进行渲染
      const current = this.$router.current // Vue.mixin已经将$router属性添加到所有的组件实例上
      const routes = this.$router.routes
      const comp = routes.find(item => current === item.path)
      return h(comp.component)
    }
  })

}