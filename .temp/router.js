import Vue from 'vue'
/*global Vue*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
