/* global Vue */

import store from '@/js/store/index'
import api from '@/js/utils/api'
// 将API方法绑定到全局
Vue.use(api)
/* weex initialized here, please do not move this line */
const router = require('./js/router/index')
const App = require('@/index.vue')

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router,
  store
}, App))
router.push('/')
