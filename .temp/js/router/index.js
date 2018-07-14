import Vue from 'vue'
/**
 * Created by jhh678 on 2018/7/12.
 */
import Router from 'vue-router'
import ViewHome from '../../views/home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: ViewHome
    }
  ]
})
