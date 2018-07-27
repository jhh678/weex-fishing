import qs from 'qs'
import {
  apiConfig
} from '@/js/config/index'

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

function responseHandle(resolve, reject, res, handleError) {
  // 引入 弹窗组件
  let modal = weex.requireModule('modal')
  console.log('GET res :' + res)
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
        url: `${url}?${qs.stringify(params)}`,
        type: 'json'
      }, res => {
        responseHandle(resolve, reject, res, handleError)
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
        body: JSON.stringify(params)
      }, res => {
        responseHandle(resolve, reject, res, handleError)
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

// 返回在vue模板中的调用接口
export default {
  install(Vue, options) {
    Vue.prototype.$api = api
  }
}
