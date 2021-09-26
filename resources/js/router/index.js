import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerInstance = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes:[
    {
      path:"/",
      component: page('home/index.vue')
    }
  ]
})

function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default routerInstance