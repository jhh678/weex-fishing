/* global Vue */
import Router from 'vue-router'
import Index from '@/views/index.vue'
import OrderList from '@/views/my/order-list.vue'
import GroupBuy from '@/views/my/group-buy.vue'

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
    },
    {
      path: '/my/group-buy',
      name: 'GroupBuy',
      component: GroupBuy
    }
  ]
})
