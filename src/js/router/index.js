/* global Vue */
import Router from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
