import qs from 'qs'
import {
  apiConfig
} from '@/js/config/index'

// 返回在vue模板中的调用接口
export default {
  install(Vue, options) {
    let timerId = {}
    const TIMEOUT = 60000 // 接口60秒超时

    // 身份验证
    // import jwtdecode from 'jwt-simple'

    // 自定义判断元素类型JS
    function toType(obj) {
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    // 参数过滤函数
    function filterNull(o) {
      for (var key in o) {
        if (o[key] === null) {
          delete o[key]
        }
        if (toType(o[key]) === 'string') {
          o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
          o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
          o[key] = filterNull(o[key])
        }
      }
      return o
    }

    function responseHandle(resolve, reject, res, handleError, url) {
      // 引入 弹窗组件
      let modal = weex.requireModule('modal')
      // 请求正确响应时处理
      clearTimeout(timerId[url])
      Vue.prototype.$store.dispatch('updateLoadingProps', {
        show: false,
        type: 'default',
        size: '',
        loadingText: '加载中'
      })

      if (res.ok) {
        if (res.data && res.data.code === 200) {
          resolve(res.data.data)
        } else {
          if (handleError) {
            reject(res.data)
          } else {
            let msg = res.data.msg || '请求失败，请稍后再试...'
            modal.toast({
              message: msg,
              duration: 3
            })
          }
        }
      } else {
        let msg = res.statusText || '请求失败，请稍后再试...'
        modal.toast({
          message: msg,
          duration: 3
        })
      }
    }

    /**
     * 接口处理函数
     */
    function apiStream(method, url, params, handleError, progressCallback) {
      // 引入 弹窗组件
      let modal = weex.requireModule('modal')
      url = method === 'GET' ? `${url}?${qs.stringify(params)}` : url
      // 请求之前处理
      // 添加Loading
      if (!params.hideLoading) {
        Vue.prototype.$store.dispatch('updateLoadingProps', {
          show: true,
          type: 'default',
          size: '',
          loadingText: '加载中'
        })
      }
      // 设置接口超时的错误提示。
      timerId[url] = setTimeout(() => {
        Vue.prototype.$store.dispatch('updateLoadingProps', {
          show: false,
          type: 'default',
          size: '',
          loadingText: '加载中'
        })

        modal.toast({
          message: '链接超时！',
          duration: 3
        })
        clearTimeout(timerId[url])
      }, TIMEOUT)

      // 引入 请求数据组件
      let stream = weex.requireModule('stream')
      // 过滤参数
      if (params) {
        params = filterNull(params)
      }

      /**
       * stream
       */
      if (method === 'GET') {
        // GET 方法
        let getStream = new Promise((resolve, reject) => {
          stream.fetch({
            method: 'GET',
            url: url,
            type: 'json',
            timeout: TIMEOUT
          }, res => {
            responseHandle(resolve, reject, res, handleError, url)
          }, progress => {
            progressCallback && progressCallback(progress)
          })
        })

        return getStream
      } else if (method === 'POST') {
        // POST 方法
        let postStream = new Promise((resolve, reject) => {
          stream.fetch({
            method: 'POST',
            url: url,
            type: 'json',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(params),
            timeout: TIMEOUT
          }, res => {
            responseHandle(resolve, reject, res, handleError, url)
          }, progress => {
            progressCallback && progressCallback(progress)
          })
        })

        return postStream
      }
    }

    const api = (urlKey) => {
      let url = apiConfig.urls[urlKey]
      return {
        get: function (params, handleError, progressCallback) {
          return apiStream('GET', url, params, handleError, progressCallback)
        },
        post: function (params, handleError, progressCallback) {
          return apiStream('POST', url, params, handleError, progressCallback)
        }
      }
    }
    Vue.prototype.$api = api
  }
}
