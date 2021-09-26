export default [
    {
      path: '/',
      meta: {
        title: 'Vue-cli Overall Example',
        ignoreAuth: true
      },
      component: resolve => require(['@pages/home/index.vue'], resolve)
    },
    {
      path: '/',
      redirect: '/homepage'
    },
  ]