import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */
// 将API方法绑定到全局
Vue.use(api)
weex.init(Vue)

/* weex initialized here, please do not move this line */
const router = require('./js/router/index')
const App = require('@/index.vue')
// const api = require('@/js/utils/api')
import api from '@/js/utils/api'

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router
}, App))
router.push('/')
