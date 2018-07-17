import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Index from '@/views/index.vue'
import OrderList from '@/views/my/order-list.vue'

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
    },
    {
      path: '/my/order-list',
      name: 'OrderList',
      component: OrderList
    }
  ]
})
