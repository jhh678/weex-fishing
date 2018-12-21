/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by jhh678 on 2018/07/14.
 * 设置导航栏标题
 */

import {
  Utils
} from 'weex-ui'
const navigationBar = weex.requireModule('navigationBar')
const navigator = weex.requireModule('navigator')

/**
 * 设置顶部导航栏标题
 * @param {String} type - 类型，选传，默认'custom'，其他可选值'blue'
 */
export const setStatusBarStyle = (type = 'custom') => {
  if (Utils.env.isAndroid()) {
    const ttyConfig = weex.requireModule('ttyConfig')
    if (type === 'blue') {
      ttyConfig.setStatusBarStyle({
        style: 'light',
        bgColor: {
          from: '#00A0E6',
          to: '#1C69D3',
          opacity: 1,
          direction: 'to right'
        }
      })
    } else {
      ttyConfig.setStatusBarStyle({
        style: 'dark',
        bgColor: {
          from: '#FFFFFF',
          to: '#FFFFFF',
          opacity: 1,
          direction: 'to right'
        }
      })
    }
  }
}

/**
 * 设置顶部导航栏标题
 * @param {String} title - 标题，必传
 */
export const setTitle = (title) => {
  if (navigationBar && navigationBar.setTitle) {
    const NOOP = () => {}
    navigationBar.setTitle({
      title
    }, NOOP, NOOP)

    const CALLBACK = (event) => {
      if (event.index !== undefined) {
        navigator.push({
          url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
          animated: true
        }, NOOP)
      }
    }
    Utils.env.isAliWeex() && navigationBar.setRightItem({
      items: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcTMzMzMzMzAwMDIyMjIyMjExMTAwMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzIyMjAwMDMzMzMzMzIyMjMzMxR9TlYAAAAVdFJOUwCgvzCfgD9AYMCQcO+P389/IG9Q0HT9VioAAADRSURBVEjH7ZXrDoMgDEZhVgFvu/L+r7pZgQlSLcuSJYvfHwKcU5HUKMSRj6P7Xhfx9hVdyBcYjmcbyEvJNmZeCK7hea5xCTzPgAXPMZCv3/M9A1b7aAx83hnA54XoSAOI82rCAPL98gZs3EfOgM37Wxuwc9+pgTw0V4qvGoiM1vd/l+fDfusW/NyOeaEPgFswyUI1nObckoLGl1BTHkEYbXzGqYERiR9sgmCTknEHf0mo5+EQfiM0GOx1HM5+TglkcoIsFe5bgsp+iIpM9V+//CcugShOKAURTAAAAABJRU5ErkJggg=='
      }]
    }, CALLBACK, NOOP)
  }
}

/**
 * 获取weex屏幕真实的设置高度，需要减去导航栏高度
 * @returns {Number}
 */
export const getPageHeight = () => {
  const modal = weex.requireModule('modal')
  const {
    env
  } = weex.config
  let navHeight = 0
  if (Utils.env.isIPhoneX()) {
    navHeight = 176
  } else if (Utils.env.isIOS()) {
    navHeight = 132
  } else if (Utils.env.isAndroid()) {
    const ttyConfig = weex.requireModule('ttyConfig')
    const res = ttyConfig.getBarsHeight()
    if (res.result === 'success') {
      navHeight = res.data.statusBarHeight
    } else {
      modal.toast({
        message: res.msg,
        duration: 3
      })
    }

    // modal.confirm({
    //   message: 'width:' + env.deviceWidth + ' height:' + env.deviceHeight + ' statusBarHeight:' + res.data.statusBarHeight + ' navigationBarHeight:' + res.data.navigationBarHeight
    // })

    return (env.deviceHeight - navHeight) / env.deviceWidth * 750
  }

  return env.deviceHeight / env.deviceWidth * 750 - navHeight
}

/**
 * 封装操作storage的对象，包含设置（set）、获取（get）、删除（remove）、清空（clear）、存储项数量（length）、存储项键名的数组（keys）等方法
 */
const storage = weex.requireModule('storage')
export const localStore = {
  /**
   * 设置localStorage的方法
   * @param {String} key - 键，必传
   * @param {Object | String | Number | Boolean} value - 值，必传
   * @param {Function} callback - 值，选传, 执行操作后的回调
   * @param {Number} time - 过期时间（单位秒），选传，默认值0（不过期）
   */
  set(key, value, callback = () => {}, time = 0) {
    if (value) {
      let expiringDate = time === 0 ? 0 : (new Date().getTime() + time * 1000)
      if (typeof value === 'object') {
        value = JSON.stringify(value)
        value = 'obj-' + value
      } else {
        value = 'str-' + value
      }
      value = JSON.stringify({
        data: value,
        time: expiringDate
      })
      storage.setItem(key, value, e => {
        if (e.result === 'success') {
          callback(e.data)
        }
      })
    }
  },
  /**
   * 获取storage的方法
   * @param {String} key - 键，必传
   * @param {Function} callback - 值，必传, 执行操作后的回调
   * @return {Object | String}
   */
  get(key, callback = () => {}) {
    storage.getItem(key, e => {
      let returnValue
      if (e.result === 'success' && e.data) {
        let store = JSON.parse(e.data)
        let value = store.data
        let time = +store.time
        if ((time !== 0) && (new Date().getTime() - time > 0)) {
          storage.removeItem(key, () => {})
        } else {
          if (value.indexOf('obj-') === 0) {
            value = value.slice(4)
            returnValue = JSON.parse(value)
          } else if (value.indexOf('str-') === 0) {
            returnValue = value.slice(4)
          }
        }
      }
      callback(returnValue)
    })
  },
  /**
   * 删除storage的方法
   * @param {String} key - 键，必传
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  remove(key, callback = () => {}) {
    if (!key) {
      return
    }
    storage.removeItem(key, callback)
  },
  /**
   * 清空localStorage的方法
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  clear(callback = () => {}) {
    storage.getAllKeys(e => {
      if (e.result === 'success') {
        e.data.map((key) => {
          storage.removeItem(key, () => {})
        })
        callback(e.data)
      }
    })
  },
  /**
   * 返回本地存储的数据中所有存储项数量的整数
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  length(callback = () => {}) {
    storage.length(e => {
      if (e.result === 'success') {
        callback(e.data)
      }
    })
  },
  /**
   * 返回一个包含全部已存储项键名的数组
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  getAllKeys(callback = () => {}) {
    storage.getAllKeys(e => {
      if (e.result === 'success') {
        callback(e.data)
      }
    })
  }
}

/**
 * 计算字符串的字节数
 * @param {String} str - 字符串，必传
 * @param {String} charset - 字符编码，选传
 */
export const getStringByteLength = (str, charset) => {
  let total = 0,
    charCode,
    i,
    len
  charset = charset ? charset.toLowerCase() : ''
  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
      }
    }
  }
  return total
}

/**
 * 浮点数运算
 */
export const floatOpration = {
  /**
   * 加法运输，避免数据相加小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  add(num1, num2) {
    let baseNum, baseNum1, baseNum2
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    return (num1 * baseNum + num2 * baseNum) / baseNum
  },
  /**
   * 减法运算，避免数据相减小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  sub(num1, num2) {
    let baseNum, baseNum1, baseNum2
    let precision // 精度
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)
  },
  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  multi(num1, num2) {
    let baseNum = 0
    try {
      baseNum += num1.toString().split('.')[1].length
    } catch (e) {}
    try {
      baseNum += num2.toString().split('.')[1].length
    } catch (e) {}
    return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum)
  },
  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  div(num1, num2) {
    let baseNum1 = 0,
      baseNum2 = 0
    let baseNum3, baseNum4
    try {
      baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
      baseNum1 = 0
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
      baseNum2 = 0
    }

    baseNum3 = Number(num1.toString().replace('.', ''))
    baseNum4 = Number(num2.toString().replace('.', ''))
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)
  }
}
