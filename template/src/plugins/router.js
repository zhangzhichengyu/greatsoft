const options = {
  routes: [
    {
      path: '/login',
      component: resolve => require(['../views/login'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../views/home'], resolve),
      children: [{{#demo}}
        {
          path: 'great-tree',
          component: resolve => require(['../views/demo/great-tree'], resolve)
        },
        {
          path: 'great-combo',
          component: resolve => require(['../views/demo/great-combo'], resolve)
        },
        {
          path: 'great-modal',
          component: resolve => require(['../views/demo/great-modal'], resolve)
        },
        {
          path: 'great-datagrid',
          component: resolve => require(['../views/demo/great-datagrid'], resolve)
        }{{/demo}}
      ].concat({
        path: '*',
        component: resolve => require(['../views/error-404'], resolve)
      })
    }
  ].concat({
    path: '*',
    component: resolve => require(['../views/error-404'], resolve)
  })
}

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter(options)
router.beforeEach((to, from, next) => {
  console.log('to: ' + to.path + ' from: ' + from.path)
  router.app.$store.dispatch('showLoading')
  next()
})
router.afterEach(route => {
  let app = router.app
  app.$nextTick(() => app.$store.dispatch('hideLoading'))
})

export default router
