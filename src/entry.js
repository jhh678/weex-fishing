/* global Vue */

// 将API方法绑定到全局
import api from '@/js/utils/api'
Vue.use(api)
/* weex initialized here, please do not move this line */
const store = require('./js/store/index')
const router = require('./js/router/index')
const App = require('@/index.vue')

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router,
  store
}, App))
router.push('/')
