import Vue from 'vue'
import Router from 'vue-router'
import authRoute from './auth'
import homeRoute from './home'

Vue.use(Router)

const routerInstance = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes:[
    ...authRoute,
    ...homeRoute,
  ]
})

export default routerInstance