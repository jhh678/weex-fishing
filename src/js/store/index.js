/* global Vue */
import Vuex from 'vuex'
import * as getters from '@/js/store/getters'
import * as actions from '@/js/store/actions'
import * as mutations from '@/js/store/mutations'

Vue.use(Vuex)

let state = {
  userInfo: {},
  currentTabIndex: 0,
  loadingProps: {
    show: false,
    type: undefined,
    loadingText: undefined,
    size: undefined,
    interval: 0,
    duration: 0,
    needMask: true,
    maskStyle: {}
  },
  toastProps: {
    show: false,
    message: undefined,
    interval: undefined,
    duration: undefined,
    needMask: false,
    maskStyle: {}
  }
}

let store = new Vuex.Store({
  state: state,
  getters,
  actions,
  mutations,
  modules: {}
})

Vue.prototype.$store = store
module.exports = store
