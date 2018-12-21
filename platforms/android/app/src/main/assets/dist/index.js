// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(55);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(31);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(_toConsumableArray(sources)));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatOpration = exports.getStringByteLength = exports.localStore = exports.getPageHeight = exports.setTitle = exports.setStatusBarStyle = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigationBar = weex.requireModule('navigationBar'); /**
                                                          * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                          * Created by jhh678 on 2018/07/14.
                                                          * 设置导航栏标题
                                                          */

var navigator = weex.requireModule('navigator');

/**
 * 设置顶部导航栏标题
 * @param {String} type - 类型，选传，默认'custom'，其他可选值'blue'
 */
var setStatusBarStyle = exports.setStatusBarStyle = function setStatusBarStyle() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'custom';

  if (_utils2.default.env.isAndroid()) {
    var ttyConfig = weex.requireModule('ttyConfig');
    if (type === 'blue') {
      ttyConfig.setStatusBarStyle({
        style: 'light',
        bgColor: {
          from: '#00A0E6',
          to: '#1C69D3',
          opacity: 1,
          direction: 'to right'
        }
      });
    } else {
      ttyConfig.setStatusBarStyle({
        style: 'dark',
        bgColor: {
          from: '#FFFFFF',
          to: '#FFFFFF',
          opacity: 1,
          direction: 'to right'
        }
      });
    }
  }
};

/**
 * 设置顶部导航栏标题
 * @param {String} title - 标题，必传
 */
var setTitle = exports.setTitle = function setTitle(title) {
  if (navigationBar && navigationBar.setTitle) {
    var NOOP = function NOOP() {};
    navigationBar.setTitle({
      title: title
    }, NOOP, NOOP);

    var CALLBACK = function CALLBACK(event) {
      if (event.index !== undefined) {
        navigator.push({
          url: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
          animated: true
        }, NOOP);
      }
    };
    _utils2.default.env.isAliWeex() && navigationBar.setRightItem({
      items: [{
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcTMzMzMzMzAwMDIyMjIyMjExMTAwMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzIyMjAwMDMzMzMzMzIyMjMzMxR9TlYAAAAVdFJOUwCgvzCfgD9AYMCQcO+P389/IG9Q0HT9VioAAADRSURBVEjH7ZXrDoMgDEZhVgFvu/L+r7pZgQlSLcuSJYvfHwKcU5HUKMSRj6P7Xhfx9hVdyBcYjmcbyEvJNmZeCK7hea5xCTzPgAXPMZCv3/M9A1b7aAx83hnA54XoSAOI82rCAPL98gZs3EfOgM37Wxuwc9+pgTw0V4qvGoiM1vd/l+fDfusW/NyOeaEPgFswyUI1nObckoLGl1BTHkEYbXzGqYERiR9sgmCTknEHf0mo5+EQfiM0GOx1HM5+TglkcoIsFe5bgsp+iIpM9V+//CcugShOKAURTAAAAABJRU5ErkJggg=='
      }]
    }, CALLBACK, NOOP);
  }
};

/**
 * 获取weex屏幕真实的设置高度，需要减去导航栏高度
 * @returns {Number}
 */
var getPageHeight = exports.getPageHeight = function getPageHeight() {
  var modal = weex.requireModule('modal');
  var env = weex.config.env;

  var navHeight = 0;
  if (_utils2.default.env.isIPhoneX()) {
    navHeight = 176;
  } else if (_utils2.default.env.isIOS()) {
    navHeight = 132;
  } else if (_utils2.default.env.isAndroid()) {
    var ttyConfig = weex.requireModule('ttyConfig');
    var res = ttyConfig.getBarsHeight();
    if (res.result === 'success') {
      navHeight = res.data.statusBarHeight;
    } else {
      modal.toast({
        message: res.msg,
        duration: 3
      });
    }

    // modal.confirm({
    //   message: 'width:' + env.deviceWidth + ' height:' + env.deviceHeight + ' statusBarHeight:' + res.data.statusBarHeight + ' navigationBarHeight:' + res.data.navigationBarHeight
    // })

    return (env.deviceHeight - navHeight) / env.deviceWidth * 750;
  }

  return env.deviceHeight / env.deviceWidth * 750 - navHeight;
};

/**
 * 封装操作storage的对象，包含设置（set）、获取（get）、删除（remove）、清空（clear）、存储项数量（length）、存储项键名的数组（keys）等方法
 */
var storage = weex.requireModule('storage');
var localStore = exports.localStore = {
  /**
   * 设置localStorage的方法
   * @param {String} key - 键，必传
   * @param {Object | String | Number | Boolean} value - 值，必传
   * @param {Function} callback - 值，选传, 执行操作后的回调
   * @param {Number} time - 过期时间（单位秒），选传，默认值0（不过期）
   */
  set: function set(key, value) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (value) {
      var expiringDate = time === 0 ? 0 : new Date().getTime() + time * 1000;
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        value = JSON.stringify(value);
        value = 'obj-' + value;
      } else {
        value = 'str-' + value;
      }
      value = JSON.stringify({
        data: value,
        time: expiringDate
      });
      storage.setItem(key, value, function (e) {
        if (e.result === 'success') {
          callback(e.data);
        }
      });
    }
  },

  /**
   * 获取storage的方法
   * @param {String} key - 键，必传
   * @param {Function} callback - 值，必传, 执行操作后的回调
   * @return {Object | String}
   */
  get: function get(key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    storage.getItem(key, function (e) {
      var returnValue = void 0;
      if (e.result === 'success' && e.data) {
        var store = JSON.parse(e.data);
        var value = store.data;
        var time = +store.time;
        if (time !== 0 && new Date().getTime() - time > 0) {
          storage.removeItem(key, function () {});
        } else {
          if (value.indexOf('obj-') === 0) {
            value = value.slice(4);
            returnValue = JSON.parse(value);
          } else if (value.indexOf('str-') === 0) {
            returnValue = value.slice(4);
          }
        }
      }
      callback(returnValue);
    });
  },

  /**
   * 删除storage的方法
   * @param {String} key - 键，必传
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  remove: function remove(key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (!key) {
      return;
    }
    storage.removeItem(key, callback);
  },

  /**
   * 清空localStorage的方法
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  clear: function clear() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    storage.getAllKeys(function (e) {
      if (e.result === 'success') {
        e.data.map(function (key) {
          storage.removeItem(key, function () {});
        });
        callback(e.data);
      }
    });
  },

  /**
   * 返回本地存储的数据中所有存储项数量的整数
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  length: function length() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    storage.length(function (e) {
      if (e.result === 'success') {
        callback(e.data);
      }
    });
  },

  /**
   * 返回一个包含全部已存储项键名的数组
   * @param {Function} callback - 值，选传, 执行操作后的回调
   */
  getAllKeys: function getAllKeys() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    storage.getAllKeys(function (e) {
      if (e.result === 'success') {
        callback(e.data);
      }
    });
  }
};

/**
 * 计算字符串的字节数
 * @param {String} str - 字符串，必传
 * @param {String} charset - 字符编码，选传
 */
var getStringByteLength = exports.getStringByteLength = function getStringByteLength(str, charset) {
  var total = 0,
      charCode = void 0,
      i = void 0,
      len = void 0;
  charset = charset ? charset.toLowerCase() : '';
  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0xffff) {
        total += 2;
      } else {
        total += 4;
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0x007f) {
        total += 1;
      } else if (charCode <= 0x07ff) {
        total += 2;
      } else if (charCode <= 0xffff) {
        total += 3;
      } else {
        total += 4;
      }
    }
  }
  return total;
};

/**
 * 浮点数运算
 */
var floatOpration = exports.floatOpration = {
  /**
   * 加法运输，避免数据相加小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  add: function add(num1, num2) {
    var baseNum = void 0,
        baseNum1 = void 0,
        baseNum2 = void 0;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
  },

  /**
   * 减法运算，避免数据相减小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  sub: function sub(num1, num2) {
    var baseNum = void 0,
        baseNum1 = void 0,
        baseNum2 = void 0;
    var precision = void 0; // 精度
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
  },

  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  multi: function multi(num1, num2) {
    var baseNum = 0;
    try {
      baseNum += num1.toString().split('.')[1].length;
    } catch (e) {}
    try {
      baseNum += num2.toString().split('.')[1].length;
    } catch (e) {}
    return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum);
  },

  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失
   * @param {Number} num1 - 键，必传
   * @param {Number} num1 - 值，必传
   */
  div: function div(num1, num2) {
    var baseNum1 = 0,
        baseNum2 = 0;
    var baseNum3 = void 0,
        baseNum4 = void 0;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }

    baseNum3 = Number(num1.toString().replace('.', ''));
    baseNum4 = Number(num2.toString().replace('.', ''));
    return baseNum3 / baseNum4 * Math.pow(10, baseNum2 - baseNum1);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(38);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseUrl = 'http://172.168.1.234:8180/mockjs/2';
var apiUrls = {
  getIndexGoods: '/shop/index/getGoods'
};

var apiConfig = exports.apiConfig = {
  urls: function (urls) {
    Object.keys(urls).map(function (item) {
      urls[item] = baseUrl + urls[item];
    });
    return urls;
  }(apiUrls)

  /**
   * Created by jhh678 on 2018/07/14.
   */
};var tabPageConfig = exports.tabPageConfig = {
  tabTitles: [{
    title: '关注'
  }, {
    title: '云店'
  }, {
    title: '云医'
  }, {
    title: '云商'
  }, {
    title: '云服'
  }],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#333333',
    activeTitleColor: '#1C69D3',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: false,
    width: 150,
    height: 88,
    fontSize: 34,
    hasActiveBottom: true,
    activeBottomColor: '#1C69D3',
    activeBottomHeight: 6,
    activeBottomWidth: 68,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
};

var tabBarConfig = exports.tabBarConfig = {
  // 正常模式的tab title配置
  tabTitles: [{
    isPage: true,
    title: '首页',
    icon: 'home_default',
    activeIcon: 'home_selected'
  }, {
    isPage: true,
    title: '视频',
    icon: 'video_default',
    activeIcon: 'video_selected'
  }, {
    isPage: false,
    title: '发帖',
    icon: 'post'
  }, {
    isPage: true,
    title: '发现',
    icon: 'find_default',
    activeIcon: 'find_selected'
  }, {
    isPage: true,
    title: '我的',
    icon: 'my_default',
    activeIcon: 'my_selected'
  }],
  tabStyles: {
    bgColor: '#FAFAFA',
    titleColor: '#666666',
    activeTitleColor: '#666666',
    activeBgColor: '#FAFAFA',
    iconWidth: 70,
    iconHeight: 70,
    width: 150,
    height: 98,
    fontSize: 20,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(72)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7cb75ac2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ttyLogo = exports.ttyLogo = 'data:image/png;base64,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';

var ttyLogoName = exports.ttyLogoName = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUUwMTYwNkY5OTQ1MTFFOEE1QTNDNTRCQzJCRDU4OTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUUwMTYwNzA5OTQ1MTFFOEE1QTNDNTRCQzJCRDU4OTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTAxNjA2RDk5NDUxMUU4QTVBM0M1NEJDMkJENTg5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRTAxNjA2RTk5NDUxMUU4QTVBM0M1NEJDMkJENTg5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvXEdwAAAAb9SURBVHja7JxtiBVVGMfP7K774pZvu0VrZpQZRUZFbdSXJKM3LCIpi8rU+lKblURvFqGyFFEf1gwNDEzBIMveIahIozIJsVTcKFNBNndZNV1tI93de0/Ps/OMe/Z4Zu7cl7n3Vv8//Nk5M+fOnJnfmfPyzMx6WmsF/XdVgUsAwBAAQwAMATAEwBAAQwAMwBAAQwAMATAEwBAAQwAMwBAAQwAMATAEwBAAQwAMATAAQwAMATAEwBAAQwAMATAAQwAMATAEwBAAQwAMATAAQwAMATAEwBAAQwAMxVdVpgze6q6rlFattHgeuc/TOn1io7b/6pPXO9Z55rqhPBW0PILcQelFlN5gbQ/y1w5u12oGpSrpb9/gdiuvZ6bt8kjaM9PGOXhD+WsofYzS71JqMaUHM3tGfj+vlvOy1il7Hf0NrkGwPVgXY9m1bt/yKbkDJrjT6M9XRa5055DXkyeR9zi2rybPLHKZFpKryc+FbB9NvlGophIsx0jybvKmQt3B15awdZkaAri5ROW5LkOlXFvEsswjLysE4EZjeTP5VnK91OYw/UZuIz8qaW7e7pM7MkwD5IPkdcaFHO3IVyPHD3Qv+RPyhIh97ydfarREKak8O8kNEb/bK+VeEVGeQMeKXNmaC3UHDwOn5zR1nzRKW9npynvQWD5C7if/EuMYuw3Arn9kbfaWPBb4htwbY987JX8wqNxFPiCO0mbr2GHi468kP8DjFDlWEqol95CXFAqwLvKI24txQbVjHBJntpB0+R8kPyXXNCnAlQL4eBJ38P9RXpb5D2EeDAEwBMAQ+uDExdOmsTJDKMXYoEJmAX8DsD/3TckotFBaTH5cJRu5yjSiPjqhZce035dP2VJswKcby6eWAeBGAy7/PYXcnec+tbG/UmkU+X5yQQD7TwTe6qw60XcPn6ny3I8jUteTHzHWz5QgwJdyPFe/35fnidaEzJuD/b5srX9eghKsakfzl5JziQpucLx8fhZlTCc07mkvVBO9y1vVNdHzQ3h/OJomLYVvcAzkPpffDDhOcBx5G/kKyRNXHB7kKNY75LuUH5J0Nc1cy+ut9XOl4h113IEMfIzy4/DbI47/KZkf5VwoZdER/WWPVMIPrRZtAflHNTwkHLcPriP/Ss3zt4UCzBdrhCw35FCgqJO4nHxZDs1mSmDY3UIc1TvAm+I7/JkYd097zOPNsOB+4WhZSjpNGqfnNO1WmeO3uaiD/FOWNbla7sD1CV2bdZlGqFmOuFdY61rLbZoU3CEXkC+S/k1bfcxh5T+BWWT9dr40paOsJtGTMuzJ4S7kyjme/IrcDfWOKUuvVJo3yecb6/nJUovyY7p1jopzWCrdJQW6zs9arR4/AfsuJO8kOZftJZkHp+eO53jriXbf8TSJpw8TjUHMe+TXZLm7wBU0qCxbM+SbRf7BSD+s/MeaxQgEne1o6ttC8povWHALcmcxm+hstNdY7imDaVKnMYpNSdNeLC1Swx9a8PPxr0PyXmws30FeU66Ay00VJTrX28hzjDR3CU9G5N9gpfmFhnkAXJ6qMbomc1rUEfEb7ndftda9Tr4GgMtPS6T/NeG1xfjd0+SPrHXvS7wAgMtEj5EfstbNzuL3HH7cZ6R5JrAMgMtDNzua5pYYI31Tf5KnW+vuVkMvMgJwgaSzzM/Tms+sdfwe9xs5HHubTOdMLc12bp5pHmwO71NldkHTKv7LbcHbmF6C5VnquMPajXhAnQy8+EkWB3w4bDlG+tZGw6cpP+AzVm7AtHUj8nGmJgH4XG9VV52ndb0UNOz096nhMdeR8vfMiONwBOqABEjsIIZdngpje7McL2rfHFxpss7lDJmfR4VGeb9TYrZ2a2RKY4ujYt+TJ0u6VkB7edwEPKJ+SYV/ZZEVYDMgcLXyQ3/pDAXUFpx7pP9QMSqTeRFdceA+NfyV0Q9U9q+octm25NCFhcWlucLfFLJtckIt3QIJmGzNF/BG5b/rm0/AwFO5PRTfFFJ5dpDPynPfufxmY8j6v6Sst+SwT66c/GHAITF/MLBfWrNucZdUyBetPnlW3oD17KaPvdVdPAJslYvSn8PAI9uKwI8kF8ogwyV+meBt5T/w6E94bFApzSx/4fBCRL7bpYm+UprgtLQ0x6UC9EpreES6hh4LbJwX2Z8g36CGPgGqjXVRtc7Mi/peTy780KefZh9cmM9Hg3S/Cgrl3h588lml/M9HdYKfj3qUHqB0augcSvr5aIPnd0v84sV08s+ZPh+NBRj69wrzYACGABgCYAiAIQCGABgCYACGABgCYAiAIQCGABgCYACGABgCYAiAIQCGABgCYAiAARgCYAiAIQCGABgCYAiAARgCYAiAIQCGABgCYAiAARgCYAiAIQCGABgCYCgL/SPAAM2h3LvXJ7bSAAAAAElFTkSuQmCC';

var loadingGifBlack = exports.loadingGifBlack = 'data:image/gif;base64,R0lGODlhLAAsANU/AJ+fn9jY2KioqPv7+7m5uXZ2dry8vImJifb29snJyZCQkM3NzePj47W1tWhoaPj4+OTk5H19fWtra+jo6I6Ojt7e3pqamuzs7MXFxdHR0ZWVlfT09LKysnJycqGhocHBwa6urnBwcIWFhfLy8qamptvb225ubqysrNra2piYmHh4eO/v79bW1oeHh7CwsGxsbHp6euDg4PDw8KOjo8LCwubm5oKCgpycnNPT076+vtTU1P39/WdnZ/7+/mZmZv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjFkMjAxNy04ZTFmLWU0NDYtODRkMi1kY2I0NzBjYzlmOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzAyNkRCMjM5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzAyNkRCMjI5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06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';

var loadingGifWhite = exports.loadingGifWhite = 'data:image/gif;base64,R0lGODlhYABgAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjFkMjAxNy04ZTFmLWU0NDYtODRkMi1kY2I0NzBjYzlmOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkIyMDBGRjI5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkIyMDBGRjE5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MmYzZmFjZS03YzQ1LTQ2NTYtODA2NC03ZjNhMzcxMjI2MDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NWYxZDIwMTctOGUxZi1lNDQ2LTg0ZDItZGNiNDcwY2M5ZjhkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQUAAQAsAAAAAGAAYAAAApiMj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx2QV4AzootfpLJutfcPd8nO83qbLt3h+3b8HOKf3JjiI1XcXSHholci4ZogmOanY6LiImHn1ZxlJqfbpVVlWanqKmqq6ytrq+gobKztLW2tSAAAh+QQFBQABACxIACIAEgARAAACJIwNCccdmlyDUD5aJaZ6K+t9TihO5GKe44kebMS8q5qGoN15BQAh+QQFBQABACw8ABQAFAATAAACKoyBpsuK32J4FMhV6Z1Zy15FYMeMJGZ6aJo0bFu+IvvRs3mlG56PG9cpAAAh+QQFBQABACwqABEAFgAMAAACHoSPCcGt/xicKdBr78w6dsh9SCgazYmSY8pKVQsjBQAh+QQFBQABACwZABEAEgAPAAACIIyPCAuZDJuL9NFqrs76hg6GYviNyyFOm4NGrHq+lnwUACH5BAUFAAEALA0AFwAWABcAAAI0jI8Gy53f4npISqpsxPrCviWgd4zOZ1ImwKUtiAVr7KpjLMP0vXd4qfkBQ8LhpFg5IkXFAgAh+QQFBQABACwEACkAEgAVAAACKoxvoMis39qbICY6I95o++tlRyiCpENWXSqdbajB8TdzNWa5r73j1mspAAAh+QQFBQABACwEAD0AEQAPAAACIYQPocvoydRzMUxU7TV1n+5BS8g1pHhGYbZl0uOOWGxWBQAh+QQFBQABACwOAEQAFwALAAACGoQfqct536J6FEhWs968+w9aYRaM1WQajRkUACH5BAUFAAEALCQARwARAAgAAAINhI+py+0PVYhnUmBpKAAh+QQFBQABACw0AEMAEwAMAAACGoyPBskMv5qDTx6KFd478A+G4khmJaSRiJoUACH5BAUFAAEALDwAMQAPABkAAAIujAOni+C8nExwzmplzPdwa3xgKGpkqZSUJ25t+rKfy9EZHDezvOut+vC9gLxeAQAh+QQFBQABACwnADAAHQAKAAACFoSPqRbtC+NpstqLs968+7854kg+SwEAIfkEBQUAAQAsIQAmABQAEwAAAiKMjwcL6criS1FOU+sN2c7ObOAijtuJXuPKtu4Lx/JMS3QBACH5BAUFAAEALCsALgAKABIAAAIMhI+py+0Po5y02lYAACH5BAUKAAEALCsAQAAKAAMAAAIHhI+BGbpdAAA7';

var loadingSuccess = exports.loadingSuccess = 'data:image/gif;base64,R0lGODlhYABgAIABAP///////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVmMWQyMDE3LThlMWYtZTQ0Ni04NGQyLWRjYjQ3MGNjOWY4ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRDQzMzYyNTk3M0YxMUU4QjhDQ0E3OTExMEE4Q0E2NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRDQzMzYyNDk3M0YxMUU4QjhDQ0E3OTExMEE4Q0E2NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzZTZiN2MyLTYzNWItNGU0My1iOGIyLWU0YmIyZTIxNWE0YSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVlMWRlYzk2LWRmNzQtMTE3Yi04Njk0LWQ4NDUwMWJkMmE2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUAAAEALAAAAABgAGAAAAKSjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8NwAA9ifoJVi4VYgIeJWYaMWIWPXYGPQnIfk4dKl5WbTpaWj06ZkkyqlUOsmEWtnX6vrqWgAAIfkEBQAAAQAsSAArABIAJQAAAkaMjwbL6cHaQ3FNWu+pQKvscR4EamJYXqeZPlzHts6LRrUd46qc0Lk08e14m1XQOEP2hC4lxvmBkqQvWFMa1Q0to2l30y0AACH5BAUAAAEALDkABwAhACQAAAJShBGpy+1x4pszWoqV3Znu3zkfGDYjV5qnkYpr646wes7Ma2tyvux84vsFecMc6Qc5CpVEFDJ5eTKbUeTU6FxWrVutRJr1sp7QL7eLRacP5LKhAAAh+QQJAAABACwRAAYATgBaAAACkYyPqQHtD92atFobswa3e7+F0UeWh4g+5nqlbsPGykvLNvOC3L26/N9CAYcUEfG4CCGXCCWTuXk+o1JopiqFYLGSLdcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6SlpqeqrZBahSolrUUAAAIfkEBQAAAQAsAAAAAGAAYAAAAv+Mj6nL7Q+jnLTai7PevPsPhuJIliYGpOrKqud7tPLMwiKN56nN6X7Ou/yGwGCEiCwaGURJc5n4aaTQgO+jgypDWxju9bWFweMSbVm+zapnUrtqlY3WcAQdK69H85273s634fcX09IXSFhoOIWYqFiT0ej46IIiOWlwCaGJydng2blIATpJCgiJ+WCaKZr62bqJ6uoAS1s7q2C6Gipru4J71Pv6C6x6uydcjEzsy6y8AHr8TAkQ6zydm7y8g82kfVrZnX0N/Y0tTS1eTj4erp5uzC6OzirfTR9nf25e7/6e729dQHX48CkryO8ZwoTAohnERerhrIgMIVbcVeohRkdgG//B82ihI0iR/0iWlAiSWrWUFUwSRMlyEMt4+mZuG2izXc2cAHfmlMnzJreg3lxOS0O0H8x3XYhmSarUqMWnB1dao6IwCdWjWt/c67qUI1ic+7ra1Ao1rdq1bNu6LVEAACH5BAUAAAEALAgAPQAfAB0AAAJFhB+py70HnZwQzcuqwTxo0HFfeI0kpZ3SB6oN675p/Jh0At+4fec626IBg7Hhz9hDFofEE9Oiem6iT6FyybNWdBko91EAACH5BAUAAAEALBcALQAUABQAAAIsTACmy4rf4nlQLoqtwVnzLn1gI1JWaYZooq5teaIePH+aw914qk9V72MBfQUAIfkEBQAAAQAsKwAqABIAFwAAAjGMjwfJCd/amxHNW8PdcWPmfU5IjeRikuCJWux6SrEcVqrtZVqe8b34g+gMpeHOeCgAACH5BAUsAQEALDkAHQAQABEAAAIjjI8HyQb/moJRUmhvTXqjvjBgM4odWX7pdJpadknBK8dyUAAAOw==';

var bottomLoading = exports.bottomLoading = 'data:image/gif;base64,R0lGODlhyABUANU/AKmpqa2trZmZmaCgoNHR0YODg3l5efz8/M/Pz4WFhdfX15aWlvLy8m1tbcHBwXBwcJ2dnfn5+bm5uXZ2doyMjImJiff398rKypCQkLW1tWhoaPj4+OTk5H19fWtra+jo6N7e3o6OjnNzc6amptvb29ra2u7u7rCwsHp6euDg4KOjo8zMzObm5sbGxpubm76+vrKystnZ2fX19cXFxezs7OLi4ry8vGdnZ/7+/uPj4729vfT09LOzs9jY2GZmZv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjFkMjAxNy04ZTFmLWU0NDYtODRkMi1kY2I0NzBjYzlmOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzAyNkRCMjc5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzAyNkRCMjY5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06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';

var topRefresh = exports.topRefresh = 'data:image/gif;base64,R0lGODlhyABUANU/AK2trZmZmdHR0cXFxYODg8/Pz6CgoPz8/IWFhdfX15aWlvLy8m1tbcHBwXBwcKmpqXl5eZ2dnYyMjPn5+bm5uXZ2domJiff398rKypCQkLW1tWhoaPj4+OTk5H19fWtra+jo6N7e3o6OjnNzc6amptvb29ra2u7u7rCwsHp6euDg4KOjo8zMzObm5pubm76+vtnZ2bKysuzs7OLi4vX19by8vGdnZ/7+/uPj4729vfT09LOzs9jY2Ovr62ZmZv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjFkMjAxNy04ZTFmLWU0NDYtODRkMi1kY2I0NzBjYzlmOGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkIyMDBGRUU5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkIyMDBGRUQ5NzQyMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06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';

var resultPost = exports.resultPost = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI0QTFFM0Q5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI0QTFFM0U5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDAyN0E5QzkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MjRBMUUzQzkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlWcZKsAACXzSURBVHja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';

var resultComment = exports.resultComment = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEIwQTdGNTg5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEIwQTdGNTk5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QjBBN0Y1NjkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QjBBN0Y1NzkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr7IBzsAAEAnSURBVHja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';

var resultQuestion = exports.resultQuestion = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI0QTFFNDE5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI0QTFFNDI5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjRBMUUzRjkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MjRBMUU0MDkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph9W+JEAAE2pSURBVHja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';

var resultAttention = exports.resultAttention = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkIyMEMwN0Q5MTdDMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkIyMEMwN0U5MTdDMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjIwQzA3QjkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjIwQzA3QzkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoLgCgEAAELJSURBVHja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';

var resultFans = exports.resultFans = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkIyMEMwNzk5MTdDMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkIyMEMwN0E5MTdDMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjIwQzA3NzkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjIwQzA3ODkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnZjGDkAAErbSURBVHja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';

var resultSysMsg = exports.resultSysMsg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAwMjdBOTY5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjAwMjdBOTc5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDAyN0E5NDkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDAyN0E5NTkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtEjBoMAAD9DSURBVHja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';

var resultCrop = exports.resultCrop = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAwMjdBOTI5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjAwMjdBOTM5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjIwQzA3RjkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjIwQzA4MDkxN0MxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpMIgXQAAE2CSURBVHja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';

var resultOffline = exports.resultOffline = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjAwMjdBOUE5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjAwMjdBOUI5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDAyN0E5ODkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDAyN0E5OTkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi5IArsAAFfBSURBVHja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';

var resultApplyFail = exports.resultApplyFail = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI0QTFFNDU5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI0QTFFNDY5MTdEMTFFOEE5MUNDRUE2ODQyNDk0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjRBMUU0MzkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MjRBMUU0NDkxN0QxMUU4QTkxQ0NFQTY4NDI0OTQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvgaSCcAAD2tSURBVHja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';

var resultNotFound = exports.resultNotFound = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDU0REVDMkI5NkZGMTFFOEI4Q0NBNzkxMTBBOENBNjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDU0REVDMkM5NkZGMTFFOEI4Q0NBNzkxMTBBOENBNjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTRERUMyOTk2RkYxMUU4QjhDQ0E3OTExMEE4Q0E2NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNTRERUMyQTk2RkYxMUU4QjhDQ0E3OTExMEE4Q0E2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpOX3l8AAFWeSURBVHja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';

var questionBg = exports.questionBg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB6CAYAAAB0rJfZAAAAAXNSR0IArs4c6QAAOj9JREFUeAHtfQmYZVV17r63qrqq57mhaQijQiCiYRAFTSCQqChqHs8JoiQ+YkISQuJTo9EvMeGhgS8OUfM0MYkGoxB5KAkGZZRAIILtwChTIxianufu6q7h3vv+/19r7bPvqVs90cCX73NXn7PXXsO/pr1P3aq6VZ3ST8dPK/DTCvz3rUDjv2/oOfLnIodO9vbfjHguirMvS7KreHcl391YdtXQXcl318+zrrevCvJsBbqz+Oqy+pox9eJNFmu9abtalzh13VL2vNJ7UoDnKtCdxVTKgo6Z8U1G707sZZN60b14vXBLvV7y55RXFuQ5ddzD2WSxBH9v53AV9rGuNyLWezsHbsyBE+vnZa4n/XwE0SuGkkc61r3oyWUnnT9t6MBjprdnzR7qNKcODjTaTSXYanfG262RxqbVO0Y2PrEt3XvlcFq/vg1ZNKWcSe9sTchSznU5QlbynjM6ivOcOSwc9fIdvHImPdlFuMbgOX+1OC0+6ojm1HlHNfqHXtjo6z+k0ejbr9FozuukzgwYD6ZGYyC1gdPpgGx0Urs9DtsRUNtSp70htdorU2vsJ+3WjkfT8NYfjax+6LHRGz70dNqwoQW9aPLOZsYSzYyZvBi9eCF71uYo5LPmoAdwL5/B41ynuebJC1kjnf2JRVNfcNyJjWnzX5H6Bl7a7Os/Al2bp+a5eYeNpHOUlTPXohtYtV0mOesOHuVGmX6rszl1Wss6ozuWdka23j6y/L67R676neVQoWJ5xck3gEpGuOCRjtGLF7J9PqsG+xx1csC6v1hzDrq7mdHccz6xaOiIl53enDr3tanZf3Kj2bewagpMvUFReoEFj+BRVs1sMA6zN7pL1/WM54kAp4NT3hgf+25ndOs3hp9YeuPo1Rc+BSm1ywZzXb8I4qgk8+jFy8J9RSiPfQW2E5y6n1iXc9nYoJuD773h5Y15S97WHBh6DXq9HxvJ5migRKSq08qagSMdCrDiUo2Upni0zQ3nwjErHPIMm+IST0+C1Fmfxnbc1Nm86oqNX3nPv6dN942axU6bLSTeisGAn9XBrJ/tUfcRa85x5YaKd+DLB6f8xifObM6cf37q638FlPrY1IZOkheeTUH38qOXWXQ1xRksYRffT29sAlfLTaxtEPI5Imhiacge/sdGl3Z2bPy7Dd/54jXprr/bBhlPdJzqmD0Ks9S9ugVixdmHVI57H2IGVB071pzLq2ru3Ln9U37vm2ehsRc1+gdOsKKHGeqAf1zZSQPF4pMnprsNHpeQcQiBqt4U4YZN8KhIfdrHcJlUycc/w6o2CVUlb40/2Nm28TMbrv/gVemRW7eDTaCy2VzHBVI05xiU7fOhePc5qtehwA0/nHlVTTW62f9HN57ct/Dg9zf7ppwadvEY7WoMhVEKlctPctcLpyKAsjEw1OdeNc5xgMGAzAfBMZwXtDYE2cGPmYr4JwQKOcbHlo5vWn7ppr951fVYRYPjJMfsymYtO7sFv2A9MzIK/8xQuq3rmFzXLzbYrrdctt/gca/7ozRl2nlQmqLHbm4W8sW/elN0YqGTh3Sw8jk3y1XovHuT1B7tkNd1hB0bgdIckyQEzP5MF3fq89NGG97Gdlw18sSdl2y7+nceh6TeaEZWXoLwm0ddsvaeZl77ctTxuC6vqrFo8JQ/+Y/XN+YdcDG+Zj1UBWMkSE8gPrOOtra8SedmEVxsvMpFCaVHHi7DA+VNKm3qzSKGyWkYmEZ34VgIGTv8SQcy81vYddqrWlvXXbzhr195Obhlk0kTLS4aBXqd5nqvR99eW040zPlCRLq8ysb2pVe+a9bAhZdf0pi58JJmozk3iqgXUjqeJTgfq0RzeBUyaK8Jee6NE5slE93txpOloVNm1XQO2Dx5mAKEitoYPOmRiGkT2bBAuSxaIw3dqCXFGc0p08+c9rLzD2/N2v/u1rJbh8n1ixrlMAfGKelSZ4/pfQVU4gTNmVd3cy/86s9OOez4T+O7TS/tKgwrGXVhGlE8kio2wKhCPlGp6zbV2nhqAGV0HzpYaWDNjUQAO/W2zpuCZj6olf2AjHXM2WaCHjQKP8TotMYfGlv92IWbLn/jXVDnd8fiRNNjnOhA4sxRRGOMPb0r1j01qumXGEFzZmNj5pOi2ffh217VP/egz6QGvp51YVcKLEqklGdvCBvlNiTDkQqZdaWi4oYu8akrc+LbaoIf4bkPxRQ+5AxSziXPkQy48hGfMkJX5gwGBDbE5vbWNe9d/9lfvBIcNjkaDeRnp8m5TnCwN6O0D5pzNFeNxbpv4CNLfz3NWHhps9EYiqJURWDhWSR78RNAVuhoChRQJMlY66DBDhySpuMIrG40RTJpSKebH3qwow1G+BGAMCqZ4uJNfCibiWwsLt9GhX/iOXS7M7zxkrWfedlfghUNjtO8z0/yM/kcrBogSI6gOccjOTe3/9J73t2YMf+jeJQOWOpmwkcra5M/PzrNQthjFw315694lOPCWXC+uaWOcGiHjygybZruQ42nEhGoZ6ZGC9WwQ0Cx/LhMDsxaEvrJcTsYbcSDY5tLP3Iuq9Q/+IvTTzhv9vBdV92a0g5Y9RwRIYUl3VN5MubeNrjuULnByYST23/ZvR9sTp/7QSQMnaq9CoiFjsgothpYjUmLx1NbFdMchZXJ1LzAkRnlLLIm+ZBnrBUGddxXBEC+XAafOhRyl5AmFufibn7JMV/5qRJxu7lsHEC5EKd/8MShE85ZtP1H192SRjYXXuUgbubOViUd8l3ObMgzHXTMa2JzL73vfc3pc95nVamKQIfeb5QGubGIUUgKew2Xs4hlNbrXlaSiDMys7HSLEx0TLqSOz1glCgBl580HHXrO9vhz+ICmxEZAaCX8yj8b3Tdl2jsXnPe1SyHvxxVPvHgCVkAGx3svXiXtQe1Ng0snpMsrguvrv/SHFzRnzvmg1w9KTI7FgzouFsqAbE1enCLZdGUjQwufeqQMTN4NhwZGGTZpX0uUtcCtCm065tuRMzTNFYti5YIuMItk+9yCLF24cXgCgSeeYvOnilSMbg7OPH/B79z1J2CVDSZQeQlib2572mDPQK7KAHJjIenr+z//+atpxtyLI1ErCG1YFE4+20J38tQYFEJFpJpJcIerXDTyIWHBqFApSUdBQWYn1oTkEZsX7WwDBLjpSO5ggiab6lRzPNMkn5Qk2T1Zhm/6uGNkC7chj7FpMjEM+6bO+sP5v33bb4FbNpk1VTo+Y9Iwx7HaxbwnDS6Bg44AosHN/vf86wmNuQf8Fb6BMaAyUMPzjMYxJu5u1Uk5GIekikQD92A2BlDZuzD02BFBWPGIq9PjfjlxLXtbgFH5p3VchJR9uMjdloncGJrFamp+z7o8nRYLWTbcPxbByhsVjP5p8y+e985vvRpiNrlsNNXjAqkRELGedN6TBtdBwmk0ty+dc/H+jUNf9DkkN9saRRMmapVm4WKXW3IWefCiX2q8mcinSHijHq8qO7XNMKkpQxFckGAfe/KpKxlx5dgaEuAZSigWJ9UiVtrYhlNgwjKZAKuY5B6GUrP4HRIT4w/M5pT+WQd+avbrP/dCsKKmFMcFcs/H7jaYTmKEw5gtmFmzBvpe9tbL8G6LFyhwVI8K1hAzj4JazHHHTAErKkTudBiaSVEowysEVlRWPQ/TyYV32GzjoNQqrSivNo45VgzELTsNkWFnh1QQvNTCCDP1iKS0nG8ct6WZufKosGGazf2GDn35p9IxZ06HVjSZMzXjcgA3i9UkMx8FuzM8lOyE6wiAGP3NP7vj/L5pc36/qyAQKImwRrZK0qqh2vBmifNuhfaaqTrGJYC1hHj59BCnKBTMTY88JzlFIfNmYxxSoLr5z5tCsdGKg3qIAJe8Z1yz0YmFVkBxFk/KMs8yrMSgX4rln4RiMQTF0GgeNHXJSc3hpX9/Oy18BGKsYw7XsZ4ws0m7Gr1AyONF+7500RVHNWYt/JCiUOQmtqJBI4dXQoGpZfDYNhbOkwdhCdOcAKFHKuhqVl8sANcVAGjVUDNDy+GJw5thWLMiJuNG/LYxskG2EZ7YjiEJNwQJ2xg5VOnxVkWfWSTgOvz0D836vbm/dvUrwI1DxFmoVN2TsTsNDrxwwLlyPHPJQN/hJ17SbDZnh6KiZVtQ9VxzPxniqALQruqJBWCpDFk0i7qWtJ9smkgnCAOQDqPCsIlKuNwn3VkkhsMSU+RidwteHUEK4HpM7sJDZWwyMF8kyQgl0PoIHSl7HhaQ2Yk2H4QgALb5lCnzj/hoOvL1M8Coam3o9BBezID3ScauGlwCEYJr2sTc1/zjr72pMWXw9DK3iIMnIAOAYC5WXMua60rBitPdrEqBFIfVwwsifCBCqPpBTuQ4eRLQqBxQtk1jWPRP7OARgWtdBI5RkOaMfsEsdLRWaqbMXEszQlGHviggLTkxPAFuCi7xRciLFp32vt+GSTSYqnEJirddjV01OOwDOGZzetZ75jVm7/d+KYVECyTAgHEpbuXDxFg+JkBlzwk8U7JyhExy3qCvq7DJZSM+P4jv/jmxgLQyW7tnXMioa3IpCcPsDUQeCcp/tkBlKXM7KdOvK1AnhtSModicb/7NxpAcm3LigEkdyuQTzhtDsy+cc+Zlh4I1WZNpzRGQtiruO2tw3YhrXuGsr/mL73gX3p98sNiI0fJlclCTNgLmjCGu08axO/mmZMmraK5gEHxkcSBh51eE2NkHFWkfhbIgTMdBHMHiUiGpj48cu5hQY+D85wmwWVpTpMuisfgNVhtL9iYjblf+snRsmVjOoWT29ElhAz8o6ZszdPBp78Yias7Z3FczlScdO2twGNUBuW6m8z6+pDF9zm+aEovqHhUdKw0Jki3yteIzPi9i2AjDFwSPYRDWADUPAqq5uS1ooCq7FRRUKC1NIBuqeTBqFkTkM2pq5U0RAZCpKytmv4GfbWRvNza1CsjzB4fG/NCGyflDN4KTnS/plya8TZn6prlv+PyLQNWbTGk5IvKSJ6Muhi/qylzzyk6ax57xTmyx+WEcRY8iMhEGqCKyRlLshu2ywUInKQC7VR3IhBTJjwN4PdyJFVGFDCzMjEM8x63bRNxW1cKdOVNsbko0RuAbRqSa71zJI38sNCyeCoF+GH5lw0VRs1DFz8+nLHnx7wIkvrtFSXmZg0nuuzrBJVDQzfSrH1jUmD77XNut9EaRDUsklw9Mk1kBu/ksOjlmo5KJjsazAoFn9uYjnwTHpo6QcdMmIQD/ce0+8oYAjzLyNUg7TreAKypX8XNlwzZjxF2BEZcOXZPY7qfMX1LwKcq5kMl88SHzWAOgMTD1rFmv+xS+gSSTOGSOLJ6F1eO+qwbThEC8ArjZPPnNZyf89p4KgAAsSAaL4dGLB7PcGGUaMZmiGkCSg3LYUl+qxCG2skWSYkoTqIFjBWFFKg7NuDKc8CEbsCUycYApZNpY/Lobj6jy73ZmgbvpRmyVLyUg5cjDzbsA6J5DKcoHFp5f1FIKjIm5NZrThpac8A7weIppXl5S9VtAZ16vBodSCRJ0Mx1y4lCaPudcxsOiWZJRB4QcmqqTFVk8pEOb0FcTuGaarEIUModWI1xOe0G7uHtdSSrKFM2qijcKan4hdXzGqloHgPKxhnbFD1itFX8On1yPjLkVQ/iV/9ik5peaXdqFIUm84Bqc+T8Gj3/XPCzYM0VVm7GcOHo1eKJWBdhM517y8tQ/cHQUJNJhshG0iiYGEwIcLtsMmDMfDZcnGtoVp6iotcdCANPmLIpKssMUEbsOYzMtkzAE+XU9i4VcDuqAI1zXD3dYWvyOJz6Y5KshHgtZunDj8ARcajzFZpvcVJwWn3YEMFU3jyWY0G32LZ597Nm/gkU8Sd2oUDPzrvuuGlyCaOc09zvobLzdJUcTZWJQQauYYjgH2kb5OjJQKBVPjWGhlXTYUIkApseAVFzqkOXm1KIO5bS3BhQ2kGlTUuZ6snEA8syG9oISNvHIqKRYQ1cxkcTFQZbhY0EAjZBiIRsyiaXJjDOfAIZq5hGNK0OvMbTgf2KlPhSzKyh10l2j3uCIjHN5Ua+ZfuX8OXjZ/kuUWBG8oI4tY8bJQFUU04sqROMYAXe35SYrcwdSRYpMyVW2AMy0KK1rFZEzaso/YzIzTfQnLPLokvFJTomzMFPZ4ucCwxLNpAhigag2CldUxSxQ1IX44klEyuSijKcW0sbMNSskiQ3LPYnTHBh86ZwzPnowFtFkWoa1dOrreoNDiXMYV/PJbz0JPw5cTKEVASIlwoTAY0rUJmXVA81ELWyyYpeHLtWDF+ZeIwJpyJr4EPCSC0mYPhtl+CAKC6MZVy8+eZIRV46tIQGeoRxRPgEZsdLGNh8BPH8aWSFML6IR32xzrJJ5++RMgci9li4nI68bjRn9B51wKkT1Bis8mdRuO2twqNKYV7M598DTK6QopqlZECFF4EiUK2uI8aOgvgsk/9Kr56crX7swve3IacamHdUdqiqI4RUCr2UZh+nkwgOjHhejpVZpRc7ph09NV5+zOH32jXpPvsVA5VxdGSovsqvBprqaAodEOVgsNLd4qOZJ0Vh8QzFuRAStUBNu8E23f+rcM0BRo2wyhWFFOg++m68+qFheBMKr52OmdKYMniwUD1rFJ00E3PRWVC9IhJWDBSM3Wzp28t54xDT8MLmRHts4Dohh6Sh5YkLvpMWD6Zyj+UMVApBZjPo6ROAzpmse2ppue3KHFYzmwFNzOVOB9s579Qunp9OP4M/ZU/q3H21N33iIv8ttp1Sq0KM+6bCJzSce2KUe1bK+FlzGSYculAkpLF9wI1hNLU5T8Ia7f/zK3vGDP3fe3JH7/3EtrOkyLqIphGLW2zWx1qCwPsK4kV7zB4c0+voOF4Rr2Y50XAQgSsGaAkkFSYFG6QLMcqn0mRiG84l/5LyB9Jsvnmnme3hftmFMDWZtCMl4OOdwhGfOPvCtNennsZmOXzKUPnnWonT3f/0krdmGXzyAsm2MlL5yLv6YzyyciW6ASaMyZHP4yJrRdMEVT2OhLTbRhn7wIRuvoU5+4Z9CvJpeNPOo1/wsGvwfAjMkmvGaEFmvE0yTMKjmA486Fl9wDxJCSL6jSBNXMWV4I6jCoUbr93n5aKQurNzeNKRl4UEWfxyFuhkSKn9w0zqpy2eAO4DxbHHJafPS1AE8eAr/XacXGdhJqaoy3mmk865amW7/rYPS/Gl96RNnLUznXrFCuTIBxnTUosF08NwB97hnk4VifpW/6gFu1CJmj435KEbMcbKVI5bNOfudAPadFPmFqfeYrMHUDmPNzRnzXiIIrJgsxYxJA8VmvWMZlOTRCAglRyHjRGR7A5GCZFQUXoVIlc/fs0UYZm+y+GWv8veD/+QX5qLBMOg2JwR41iyJXE4MYi7fPJ4+eP3a9H/xefjMI2ekc39+VvrKDza7XUpXgp6L5is4gGf4yJGaLE0xzjhyejp0/pTMyc2CsRCoz0KopjS3w6L8Gauw/WS7aqNvGntB9+WFpdZdEdQb3MtAvMbA4NFEUAIMiEXBR06TWhyCl9CWIA2UwZpCnOCyLtQSFpVdIHWhVDeKsk8sHDJvNmt4pU+KOuaTCysgcQ6Y2ZcG8eddto2201o+joF8xb1b1dhTDp6aPvKqhenflw2n5Zv4+qCRLrt1vWFBUzEqFtJk0NoHwZ23eNYBRYO7DwLVZOOE8gJtS6suEQlV1ayDL2SmvDBNP2QgbXuCf8zNymuzVN0Ek/3KhIget4i3kY59zdQOfu5rhfXdBClPjbvHFMX2pqvStIBP+5emYPO/bH/80TnGxCzwL5wchGK/YontdIrueGpEspDT09+8ar4lywUH9CYM8Kbx8VyOCXqIAPFd8ebF6SX4vHstXlS9HY9nAjLs//2N1enb7zooXfPgltRyW5UbwVBuMTEzy5n7nbHYaaPcGDZXgXAtCx0QAmNFPF/LXmuKwpoHw3QNCXx8V2vGS94yf+sdly4Hz8Ix4YR7/QSHQhjZ/HOnLeg0+xcwGgsdakVgXESSIhgQY8oJmP7cwUa68VftyxBKy/EWPMp4cewY76R5n/6JIATjir/2c3v3Yquqp20+Fln7z3HpI4rMBB9eO5aO+tgTacsO7GDrgGaR0LWCo9AZmPbMFjzP26DL6ClnnahofNKVulU2xLYiSmHjcO1Gc9bggsMXb03JXrVZk2lSmVkAXa+inSUl0mHQSEsOXYT37E7n36nS8Kg4UYmjTJ57zwJlcBSGXmjLZOc3tyuV3nA1TxkGHSsGrQp8E34Zn0OnT+k+xYojooVtaS4rJMC4o/hbRvR48pK5LFtZcJEz2cRzrnAif4/QJ2r4mGADPoy4eSxWrHOQIMRkHCA7jWaavuAAkN/HNdlQOHGCC88T9Btp+uxF8Kz+SlFBgFIAlrwePTCtdmhAcuajqJNWD7fSwf+ApworozJ00mO/sURfB3/uns3pL+7eJG7bX3BQL1AY1U1P4GtaookPqvRPHusA+Vi8YOGaatRzuTScD64GbWyUBoS33EQJxPC51magIfnZCUkw6V+8wI0ZfFjqDjXGm0+1YjZcy8+wo54Vjy7x+0wDM/Z3VEYRl7OqKRpccYwKA85428iMBZYQQ+PgTuOMgJCInENTuYrPJGrBSi+lVcP+2DNz3jW2jkG2zU6NnBKHNi4vJ8Uihhcaji1QRlQN1RgMk+GOipKWTqFIMudhieFVeCO9eP8hSyogwyZmz5GIxL37ie1Wl6ImYVrOFo/FYU8NSD1YazjWFpTVluIAEIFb39CCkh1i5+UI6w3OOKUBvsk92xpm+VKJ8fCFQOysaLgJIFOvkHggsglMHDvV7G0TVH4splCv+BV1O77RMGHkVCrJzNrjmZJyw0kzB2Z2zMP4VszD8A2W6955oPF2837Ihx/BK/JKeWJoVb3YWMYU9auselEqtgQRJ77pNAcMldJnyitFrjDqDSYvahzGCX9Ge0YfC8ImUQPDAqvOkuqFhrsQKEbnhsKSNdQjJ9ubut2BBRslQD0ww1doHYdX4HszWGj59YqruNFQB6zkLPpE37vl14qgOlG/qk5Y+4YHvuqHBFVRj8uf2dk/8zcRA6IyV47aaNgr0oDuDjmb9mpwZWJUo4k/HJkLT1OdThIWgNA8SNJqlH8elBKYVk8L0BcSVTffzb4xqEPt6/B16Cu/vCIA1HRKlCYVoGeRkK6ypL+n8I0LDosPDMq5ifwpIqHflJ/rqpaF8IKvr0q3LcP3pgMfc4xzj5uVPnAGn5YYdKpgIuFC0TRwt5OrNCmmjUVY4VvAytLMHI/wJBl/pxnfPaH2pKNscKlY0jBu6vtztsvpxUOKx20ETTcQK2QWksUnEhkY1SmhvZ9WE1Gqf6f/zGCagh8+fPPH+HuesFs/0knrV42IDv+5jiqOYVmhAENfuJSAy8nShohYJNQNEtPNKyibvkS6bdg2nlZsaTkmWI7P/DbzS6kYVn2ttJHcfyWGF7clT1tYBdJCgdDEYqGub2RFBL6xTKGZf5oU8D3nssE9FYzZHjOndqpIKxAPLhpps0VR5cYdy7+lz4aaoQWaM5GLYxcMpJvftF86+YCh9Me3beDfD06Lp/Pbghi0i5GTNobFUpxiskOfLqDwxIbRdPPj/Gs2ISBZ0aKgGHlQrZIS0ItOPv1nXXovBjHpEBvfKlXIQNKWwJWVtp1hkkts6YUOVmRjD4kvOGs6VPmttxgU9xy71eB2a3y0Ty7oCBFqcK5wGXu1RuCKCGkqaNMjz6wlTPMGmxnhVw6ZKlTe1u5opYuOn5VOwU929sX4t0e2eYPNrzZbzsM8WJykQ6eHZ4isJT1kMjVbJk+KDStHl1+IrEZRtdCFln39JIE2RQniFQO/eDnXpdC12K0GN1N7m3Ykg6K5grMdL5o8Js8YPakcrgzMhsEeOL0/vf6wIVzT0iuXDKY+PI5jXIvPt5d8Z2O6Z/VYOn6/QT2DQlafp/Y30kugw3EvHuHbxsKjaVaoKT201mphTSxOqqkqp/zpoxa/VNAJoeMmXOioWa7rMJrUkAglZldgDbXJiQMgmRPLF/FkoEBbRApsOABIO558pHH+3ctdjt1qcHtk+yadYHWwwlQQ8mrR0n8ulGjcisDOwbciv/DL+ZchKiBQn8FPat6LRzNdMKE//PZ62zCCqBJmrnT5QnwZ8/13LuEq/fa31qV7V9r3rsUghgjc3D/XxOXMOOvDmg+uK3DKAxjddiZV4bOSEaqJ6mTVqYmxJL9HBGBpA9CAwMzB5zI294zHdmtDgd0D0KTl9/NKpZJOafvwOp1g2tAxJyRtO8mY3cnS3OQCMoP04Hp8N8PH91ePpvfdzv/NxlzhqSxsJsee0A99vglv5fnK6xamd72Y7+oAjzLHE0M8ngJb2RQAnKNeZmjFch9mQlcqpmuLa7QreEzuQv4Zm2JxFTOCVSixPkIuFeiXOlCSg6B9lmoVm2oMRZ1sh8k+x7bzHR1CKT3U6d05wZ20dfVqALcRlz5p8mU6M4miMlPFndEtS8kjIrDuWzeW/vyuTekqfE58VG/RSekjp/DrdQ4myQZ6s7RspF84cCi9EW+n2ejfG1Zt5Mx80NJ4MlfGtvMJIECqVAO8+pdJRLLGU81Oa4XuplJyWjl5/qVi9mfKvc6wmuU5Sq5SQt83OjcFYVQOxipfFhO9ywV0WyNbV0U0PvecejWYLjk4G73qidWNYzp45jdmiCMvFNKxZ+iTWcDMUdQLAFGvhVeDl3zXvt8sB65D2jQAouRMwPsL/B0Uy7AhOAwvnImVzsL7uo7bz78s7MJM6Wb+PJdf4njMBBBZ6JEkT86xYF78iPGRVy9I78e7RLqGixfGK/0QdsVfYZgYqGBF9Jl2whoeOozANIkSm9Ya3miNb13BnySVo3SW6XqDhVVage6ku29Yl059+xr87T08J90tfO/pz4Prhe32w8QsrigAv+P44kXWuGUbx6z3NAoFB/jAKXO7oYrVm766Eu/UqL8eQSmL1xOEM9fILZemcnJY8Y6MAnoiCRB7EggRYVYYVOaabat2GPVrzXPxTn8e3Glvbq160H6AzYbYRReku0a9wSEMIzN4/D9GOuNjT+L7HYda6FCDJHYVFzoB1I4uyjISMP2cfDSyK38s+M88Ko5Tf2YozcKXUhyn4Ovjf3lkOMOL6bfH8LmdP0OuRkVvxqM9QmI1o8ilH2rnXDxBvsPj03eUr2OgBEULWRbmLnLBarQdLQ3/Mbuq6gSEsEFg0tDNHEesHoac5tgcrt0ee3rrg/9vvYQGXd67nEaDybTYS1WjKes0RkcebAxOO1UsQWgvZiPGrKC8iBZo1XgP3xD97nnGCva2wxUIbm/AozfGBcfNTFfgnRc/XDWa/YTs7f+6Ot2PF20a7j/oaArjySkiVqUgJbvVN9+qra30pzfyTX6mrNZFwDIOvqkQxXK0TRT5k18NBWFLMy9swIaR4gg1+aE6CCVAbHy6bo08kobXxjc6qBUXlbtG+So6BAEbRprbm9fco/y0YuOYskUSMwG027rKZzoMvLussIpE3DO3DO2pumhaM73lKPt++o/xeMYfEk+fwZdY9mZJ03Mzs+ECdoxFvkAThz4wOY9M1yt8V6QbEAuj3MLEpKkNFprxu2XMEIqnXLGoDLIdCbFhSuvIWUzYWfyuxLVjW/2M39qx5YehgXmyITe9GkyDCK2aH7/nPuwd+4k7nDIHpUwaH4xDyro5D+HmwBSoF0QhwSrQtTYA6lP13cfP1nurto210+lXrkw/wDcz+I2NG966OC2ZEQ8eGcIxC2ODkFYUjwkMylg4/bNFlSFkYaNwPCjxaOBrhW8uhEa55UbA8AUu9aEcefBbrvURrMoHNNxB1FI2jkM62zRwgDf+5AdgKYQeM9XzmKzBVCAAhwF94y//K43jf+N0LuOx3WYM44NmJLzEtsQtuqIIVAHAAL7VXH0jy3BoeujsfrzZ3b7u/ft7t+hNAudftxafZ9vpRLxJ7o53HJDOe5HJoZ4D7U1RgxLi1zecRLpVG5GxycCEyocb1vih52zDhTDqQh8xaPMSfJnHMaLXCJV/bTjwDY+avCYbBWZrbOXww197GJphtDPDCT8PDuVyNqD1y/FKZvN38Kf5j2EY2qFIJlxbUXzlu1h6+JqNXNsMCd+eHNILomGczLNfME2PXuo9jRc1bHoTcf8DviyZ2t9MW/F21k8u5fuSO+mhDePp1V9dla54/cK0GCf4ohOrv7v2Weg/jsf4amBsx7cs4wUXfyWGr8T5Qu16fLn0TbxI4yg3phjkMQFlbU8W5QO+faOfOVDOTWo5VvnDCCy+/ZYxj+NtmGNo5qyhvvT2l85Ji2frB3HpiXV8jWCbnH5kL5e6WRh85SeZIAlrIfGu+BDb2Mj3Rx66zopiYgilxpkjZi1qzzrx4lYaim6v+sktfTPn/69n8vPgvzhldjrBv4ccjvAfhaWvo/hM+vfxQwb+PhLHe/A+5JVsvBf3uytG0ilfWpHee9KsdDbemL7IvwZ9Cd4IwGtn48r7t3hRcYp805X69M3BoqqW/hMcrsko5Vi4plWTOkfhy7mbf/dgavccV31/k/P5NKgaXWEBE//MH1Thg9vKBmb6xL/W8JqbwePPKHmBky+QojnnMVmDS8Og2+nb/7C0c8gnVuD/PFpM11EonQhgKxxo04A7PXZpuCXvbrwKLhvMb1le/uDWtJLv1QLA5Q9sTW84fBoeyy3Q24RjRTBMvnHvPbdsSO/FdfCsvnQsCrtkZn/aH82eN9RMQ/ghxBBOE08UG8V3orRQnO/yfdZkKDjmr2hJiMqrHD8ElghmEvTvPFiIBN/sGulebL71iG2efvNB6rptAO8j169Jtz66PfsPX2yhgTouBHQVmFy4Jwdsbx5+9KbbXJtBxUU56QkjfIWA67j4+ZkXN0FcA82P3/uxxox55yg2CDQ8UTWU5ozS3an5eM4pUPCY/yy8P5ryUbzQ34gfmNtGAM9PFh+r0/C447cnGYzhktDCsOgY6245FYhdbTb1VLjSNAxqQfXsY2akhQjo8fWj6cbH+Ia5yi6w6abEy7FKl75cDvKwuf1pBh7N+nkw+PxaeiXeVaKDoEDAxD9GouG0+SWW+cdkOpzJ9rp0Rrddv/KzL/112PLbevzGPmd+ucSrPNFYKrIJn4OzwBXgoutx0G4vf/TrzSNPehvOJ1znUBkbRqzRTpJg5uApBW8Yn6O281OhJwMKfAhyVg18w6CTRvH5l4P2NrRVELX7oD3sKjm1tI3MEc3QRTN3G9kSwR6TV+NpoUFd4mnBO7E1WVzi4waeewiOKYFPP8vW81dcUHPQNCeTfOWHZfilSDruQ7pkaEDLPxcTpMxvfPNT15hlVzNpGMb1eac/ci2VSdsO+cqHvpv4TQ8Wlx/MgAPBKFCtJZFXFcoykK4KJB02h5GFG0qsYQ7B7MSTjWsSTzb0bwDWDI9BngMgQiv8M0raKS7ayAe4Eahs6aPyY7lKlRZu47EaR3e6IXZ1eU1ch7FZ/GAwD+bPmwczoaaKBdlD3mmPP7Vl6d9+G5ZxUmNmqBwx28rvfATvbNCovNppxY9G0qYV/0wja4lR1JKHKBSlHnjl2itNEzK1DJ5aI1ZAyJ6FEEDomV9BGABIFtsgDZS6uNy/ZOQEq4IyPZoGgMs4RfyUdZn4SnjQky/cGYJqYsZm323oGpjqA8bhJ/xypjn5reH1V488/C2+UmNjy+bmzOuQXNcbTGWOMIo5QDW3v/1317RbY/gRYqXutTRrN6dcGhalA4MTyiTdQhSVIRMsaLUcC6YZviTLeAZAWUAaHoEIwNncxSaRrvCyWDGymK4tGyHIHpTHlGMFYbFJFTezlL9Qgm2XjrA8DwYrE8M2uzD0/InqGCC2jjz0zSvBisbGTBR3PmGGaGKDxSxuAcC5avJNX1ybNq+7UjvNK8v4I0Sj7ARnHgiqls2SaVYwgO5mUWgKoabayBk4WOgDpOoHbQYaJ0AOse4asLEmy1zwxA4eEbjWpQDdmowYcmb5lT7klwHkmBld99BG8mKRlpx+PAFuinAbebRHNl2z+Y7LngRS9IBeosl0IK8k6qN+guvyWBMgLjlp3/GVL+LNePYr99RipIqWC6gyYFyKGyRTEUsJmGLITIka+IjsDMXvBKhsqKdBfH6EGGxKbOdTAwK/Z1woq56S2I0YgrebrIhBghNv4VOI0qNfVxDTARWaMRRbsAsbj96wKScOY4eOxS+mx9HeNvzojZ8HJ5obM53ERYOeo1eDLbrKOEA4B3gr/evHV6aNK79gUSIsSC1fqjFaTmyY+RXXaeNUfFOygqlormAQ2Bhas8iFIGgIw4fFwGZFOwrnBpIBaMN4eaN2jl1M8KnAfw7OZmlNkS7elbYxSMPW4jcZcd1cOURUmQmu9MOH7OmTyK49vOnKrbd8+DEwovacFXltxnLi6NXgulaAlQ5Et//lY1/otPBzYvhjUIzLCgITWTEBMg2SyShsMambRXnhqjIwiLAxSNq4ebaRL3MhngqdEUwtsLCCOlb4F4WkLG+KCEAGENCZKWa/gZ9tZG83awuNOTx/kfTKOlUJiNaaCua4EKd2e3zNlnu//FkI4+vcaG7M4YgAHPX1hBdZplbdaVC/otGtdNdVGzorln2M6lF07Ui2EZHSkAGT8PCpmkeXDRYsDm00zCBWuchkCJLGDtBtY0VU8SprxWEFNWbdJuKOABR35UyxVSEpArh3FA/FuYow8o8QLJ4KgX5oXtlwUdQMgtampz89fNdn+dYc1rzeZBhoxOzL7mmyE1w34ppXNDfmVvtjr78m7dh2S8BaIqW5JWXF6OaziOSYDWlrTtSNFQi8XEwFEnzDpo6QcdMmIQD/ce0+ZO98ysjXIK0yc1UKLB5KJYEtpD7gnx8BEjOk4tEPRwFX5i8pYIkcOQscdhY/+KM7lq795kX/BJWyuTTlmnNcIDUEG4uYJ2twyDkHUDlHg9tp+/ax8bu+9uf4T+o3yoNuLHgEKwYzB5QVy8ChAVHmUI41CyFVmoGwwhTFFEpYmQ8CVRyacWU44YOF0z+KTAzCaHMVm4QrS1o2BMAQpCitGGqOrfIFrhxa3LRx8y4AuucghvkgYVzbRu3h7U/c/qdp1cP8fZvy5JbNhWjXw3/5Z1LFiGVnczPdf/PGdNxZWxsz552h4lIb0XNS3LJmwT1x8QMSfGbqI7ix5lwW2iomjqm4rdnlknnxTIWy2HBRcdsEFDhA4EBZMWMtTN68+Jy0AS0iseXRbemtiIxLDeHIjwCEm/XAlzyUMbc3L//4hn8+919AsrnlVTaYXgvPWPUYu3OCaRZgMVcn2ANoX3z6l9PwZgZlRWM1cCkvWDEh0rYBqkZTokpBVxvAzQlTJS5DsqQrvoGZuUkMB3Q0IRAYdG4oacVCLgfRzDf5HAHNpcXPJnDhOCKFahZYW7ogAgBz4IlHBQBoIgVg0XaTNsHao9tuXXP1uz4HBmu8s+ZCnEckkxlB7OoEU8+jznPYlnzSjfb2DXf3HfULv4QfJ+a/yCOA0GSChFHVArjgeQG7CqMAum10GlkYpkUbOuFg0fgBmZ1YY1OuR73jm57JDKQbX9COK2w1gc7cl+K3KMmVDgk1jStx/B7ysGds4EFFTy6PmXF0xsef2rr0C785/tgNfMckm8ufFkWj5QFrA6pmsCYfe9LgEsUysNgr+if372gfcOQPGouOeB3+q7uhSCRCmniKCBntZMZYwkiAjmo2llNlHzamnPlqRGAAwMzoRF6kRx5EpNknItFVXGETUOqEGkobInGYjT0pbK07FbJu1UjKZOMAGUbJAotm7dbwyJN3X7D1xg89AOXy5JJm1PXHM1gaRZbBqubdaTC1IybOJR1IwW+kH1y3tnH0qT9Os/d7NYrIH7sjujilUOeOLRBI2uMKlAoulS4nzEA2JGhfSIUvnsksPOrYMLuwqWrB0yOZFBlTrSGUOwYnV6tiZU4B4DmVeYQp7So+QLtwLRO8o6XdWrvsAxv/+ZxvQb3e3Ph0CEta79nY0wb3Qo86cObV7PznlT9uHv+69XhjwKlcR0NUDymZSTakAEWiNYsmfgjJdxtjuVxFtc1j8tAyDAMDT+Y5AioB35uplXFs4zhNnQn+yTRbanEYqsUtPxE7JU4rLQfrioJm7qO1afml679w5hcB2au5zKB+gaVB/k7H7jaYIJFyCRg8zl1X+7bLH2yc/LZpzakzT8iWbAoXahpnQsXpogSFpwz/CGZFN74rqyjV52DXlTL0zaiwJwjYLtdJohLjCBuPqTyNZsW7nVLKPNSuuBQr8d2Ac8QvVuThcsPj3WMC0dq88jPrPn/6J8Hi51te0eQ4uTHTjFeMkg7ehHl3X0VPMAQjHHJmEBEYZwtq+YO3gC7CilI4U8vgsW1sticPQkXHTH5VRlJhU83aM0qZPL+8i5I5rlhhBl7gWrMA4DIhZHuLS+qFDcWmbneLEtGZcY6/siNVRd/asvJz6/72tMvALBsbdWQNCamsMO/V2JMGl46CjgBitsZGgxtNqy0T9iqrWV44hm6lYeygiAJZNEstx4IlidMiWcYzAMoC0vA8HCkLEtACF47h5ZDcrZ9Sj0gIsqcPiynHqlCBSCUNJ8gIJdAWf6hQx/MA3vjGpz+x7m9O+wiY9ZNbHZC9fGHlHjVN9q7KUqekLUrjeFaqD2k2lxsm6HaaPm9O5MvERRd/PC2aIgveoJCbpWUUvaobbUxHaPalBl4xlX+oRCdfxZayRRt3NsvfxGYBARu+hCmd4rSaM7OkO2bGoc76Sc1r4EifDFO2sxpG5EsyOrpu2cUb//61/4hl2dzyFMdBoXFcNOfoBjTepPc9bXA4YAYxIoCY86OlMXP+QbGp49QwvmhAyHLBiKjaWA7lXUcUBmbj7rmmDW6sLUc0S7TXgjq5+LCJvkUSRDF7cKAsVOrhw/wZ7RLHilgAriDoEYOgNOLkArLov9MaXzv61H1/tPHKt90IVq/m9mpsiU7YPRp78ojuBRzOe82dxtSZR0XhqRB0CSRDCVgwu0KeCyMGi+wjE1gDIOOCjtNtKq5IJ3JUAdBGfcAtGknbaI5AoaONIXPIuAZtF+8Oa2QRvzGIG7G1R7f/cPier5+L5t4As101Nx8SOaluXVlU7MmpvTnBRKMjT6uLrjzNP7Af/4kW/gs8KFITsz0GsVBlK76MXIknMIZIbwBtuI7GyHkGDgtTUKNIyqKyIYaaCT79mLlpxVNFWdGRnHN2RfonKRaFbF53LkKXnW4CaeNt32l4zZe2fOuPLx197Ha+aS5eRPV6JJcnGKpdI0C7mLta7G2Dd4Wb0mvfvaTTN3C4frkMoakwulemZcEoz8WnihlUymUxwbXNYmJmTnWzQZnVOazpwIexpKXm1W0sFsjdRvqhBB5jk6HwjDYbY2dVbh5+QKU9PvLE+Ir7/2LTP53zTWixsWVTo9FsKmlCxMkFmbdYneZ6t8e+aDCz5VWOxsDhx5+ILPHXzaIYjJ8jVFkEPxWsBqrFDzbHfhMAqixsyGAelqFnJXAb6koH9qTxgUm/vchZWJyJQj2CiU8OT3EsLBZqyg/1SQkkYjB8EzlYyBl/qz3aGV535eY7P/dXY9/7pzUA2Fljo6kxm2vebTCwvR5722BmzRFz0Fzr6sxYeAb/JE8+aWoU1WKwaAUA5Xh1q6ISgWmxWFBiAyiWAdn4sOGFlk5waAY5eTa5NhbYAbRUxaJsoRO+GJTryI+vA0tCoBiG+8dKcsY/su220Sfv/NTWqy/8LnTjlJZznFjOcREuIoqZrkqa6z0ee9vg0hFrxovD6DN/dx4+/57M+Ji4hgqOwviXKDqpkKuBRRqh7lbVFIXXXLQ4GmBOcDcEQpZY2jjgxEnM3c+47gpGtLM/MBMgvtEgsPjdP9ew55OjPTa8dGzlg5/f8qVz40UUmxrNjAbHmjNDjDkqEDNEz7y5BNmbBjP/XoN8Xc2T3nwafmS4iEq5oSouFLzjdjKZBUwckZMagDQFxDVBeI8jhJkFhaLxiGBKrmMYxRYQhp1qgQHbG6alOVdYwuGmc2i6QQugLRsKyvixHseJvXNs9cNf2vLVC25JOzbxF8LqjS2bSjoueisvLPNQJHn1DIi9aXC4ix7U52bf3APerCoVmiya5QN1W7iUAuNZYQmHgUWVZWVDqU6jGq4FtW3ARo2FLDYQBbIhOP7pyRHf6JCV+dfGcl1Bq7Fmy81VyvEXh5Z3tm+4afTJ7319+OsX8e9lRNPK5pIX65BzpsP6BVYelO2z8UwaXAbBGtp14RVH429Vv4J/NEVFto5It9cp8hKaOY5iG78T02i313bGR1ek0R3LG2Mjq9qjOzY22mOjjb6Bwc7QzMPwf0gcl/oHD4IH/3O1cGK7Q5Ma6ZuGjq2F0IlYOGPR9bgliwPK0s+6IIjdHn+6M7Ll7rG1T94wcvfld4498A3+jaWycUH3amo0Nma64IjZVhPXwd/r+Zk2mGVQuXxu9B38orfiT8RPiR2vQqIO9liEFk+ZaobcMDfGx1d1RrY/kka23N9ev/yBzvIHHhu//7YV6eGbt0ya1UEnTJ/yyne8sHnA0Sf0zVxwXLt/6Cg0f3/A4df8GU5VNzuNXHfzIw76sI1YbUg8ltt4v/eaxvjIY+0dm77fWr3srrHvXXXf6MRf/mLDJmtoNDNmBhGX3PJWjCrogvlMSWa9pyNsOPM7Ybz4Y8e+9Mb3L+j/5QvuwH9ieYCU0EwdLAg5yNOvu+zY/kBj67rvtJY/9L3WPdc+lr53LU9DJF/ONOMgL/xyTbq6fubnp/Ufe9bi/gOPOawxY8HhzaFZBzf6BxenZt+C1OibhRCnIkj+sYw+NRbvLsIP2cfw90B2dFqtbak1vr4zvmNVY3T7k61tG37cWffYsrGHvv1fYw9cV8YVjeJcp4NX8hlzrCMnsIrdx9XEtXH30b0s2u5Ahn5V3KLBzY8ufUff7EV/nYGQlgzGRx/vDG+5s73y8VtbP7z23vTvX+TXhpF0zFEMmgcvaM4cvfxHLCGPNf6WA/6mw35HD6Y5Bw4NzJyP//8Y/38eQYbxxyvHhsfGNuHvOqx5dEfatJqnsO6T64ippIPHuaR76ZDHUZ+NW/Fjvc/nKNjuAod+VcRo8NzDpvRffMtN+O9eTuAjDp8zH07bN93aXv6jm1vXfvK+9Pjd+E8YNJhs/YpCBZ+KvYpS90+9MpaSDlk5ky5H+CAvfO9sjjjrc9gEv8QLmnOM0m/wnpX5mX4OjqA6/Rd94cX4eqWvM7z5L9PTj940du2l96dH/pPfwYmiUzcKUZ93tzDEqDe517rk0YYjeLayexS6nCM2apCO2IIfcy9+2FAnaCfzFLLMeDaJXknvzF/oc47LPg+/7ZLZ6d7bxtID1/NxRx7lnMsRyfUqThSO+qEXc4lRxkB+xFHySzpsgxdrzoHfayZvsitsS3nwypl0jPAR6+dk7pX0zhyHfsxlI3vRoReYZUHqNHWCF3TY1efA5VzS1JtsXceIdVn4oOtx9FrTvuTHOnBjDsxYP6dzFGN3nZb6pOMqmxu8UjfwoyAxk1+ngxc2k82BP9lMu5BNhhH8sglB95qDR7ugYw6smCfjh/w5mXe3ABFMqU861pyjySUv7DhHwpwno3vpl7ygw0d9PRk/9HY2R0zUCTrmklenuY5R6gfveZ3rBdlVMHV9roMXdKx7YUUBOAdNvcnoXhjB6+Vnd3mBEXPpn7xdrcMu5rp+8J/3uVdBdhVUaRN0zLQt6TpWFCJmykt6Mv3g7wx7T3RCt9e8s3hCf3d0Qvd5nXenYPUAe9mUvJKmbb0Y9XWJvzNZqVfSdX+lbF/QexPTvvC7TzD25DcbwuGeFnRXBdqVPPz+dN6LCuxps8LF3trR/qcNjSo+B/MzaVQZ3mQ4P21mWaXngf7/N9Wkev59yz0AAAAASUVORK5CYII=';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(44);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindEnv = __webpack_require__(11);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bindEnv).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(12);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 18/03/22
 */
var BindEnv = {
  supportsEB: function supportsEB() {
    return _indexWeex2.default.isSupportBinding && !_index2.default.env.isWeb();
  },


  /**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
  supportsEBForAndroid: function supportsEBForAndroid() {
    return _index2.default.env.isAndroid() && BindEnv.supportsEB();
  },


  /**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
  supportsEBForIos: function supportsEBForIos() {
    return _index2.default.env.isIOS() && BindEnv.supportsEB();
  }
};

exports.default = BindEnv;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (fn) {
  if (( false ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = fn();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      module.exports = fn();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof self !== "undefined") {
      root = self;
    } else if (typeof global !== "undefined") {
      root = global;
    } else {
      // NOTICE: In JavaScript strict mode, this is null
      root = this;
    }
    root["index"] = fn();
  }
})(function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var _bindingxParser = __webpack_require__(1);

      var isWeb = false;
      var isWeex = true;

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      }

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};

      try {
        WeexBinding = requireModule('bindingx');
        isSupportNewBinding = true;
      } catch (e) {
        isSupportNewBinding = false;
      }
      if (!WeexBinding || !WeexBinding.bind) {
        try {
          WeexBinding = requireModule('binding');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
      }
      isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
      if (!isSupportNewBinding) {
        try {
          WeexBinding = requireModule('expressionBinding');
          isSupportBinding = true;
        } catch (err) {
          isSupportBinding = false;
        }
      }
      isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
            } else {
              WeexBinding.enableBinding(options.anchor, options.eventType);
              // 处理expression的参数格式
              var expressionArgs = options.props.map(function (prop) {
                return {
                  element: prop.element,
                  property: prop.property,
                  expression: prop.expression.transformed
                };
              });
              WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
            }
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbind(options);
            } else {
              return WeexBinding.disableBinding(options.anchor, options.eventType);
            }
          }
        },
        unbindAll: function unbindAll() {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbindAll();
            } else {
              return WeexBinding.disableAll();
            }
          }
        },
        prepare: function prepare(options) {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.prepare(options);
            } else {
              return WeexBinding.enableBinding(options.anchor, options.eventType);
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (isSupportNewBinding) {
            return WeexBinding.getComputedStyle(el);
          } else {
            return {};
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
      };

      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
            if (!xregexps[expname]) return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null) return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i]) result[expnames[i]] = matches[i];
          }return result;
        };
        Object.defineProperty(this, 'lastIndex', {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          }
        });
      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          }
        });
        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']]

      };

      function _Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent) indent = '';
          if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');
          }return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$'
        };
        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName]) continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]]) queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol]) rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div) rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (_typeof2(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
            if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new _Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
            }current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current) throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new _Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                }current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new _Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          }
        });
      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {
          var _this = this;

          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement) onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else return false;
              })) continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p]) return false;
              }return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            }
          };
        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {}
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {
            // MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;
          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
            // MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {
            // MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;
          } else if (symbol.childNodes[0].name === 'Arguments') {
            // MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {
          return !e.token || !e.token.Punctuator;
        });
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {
              return visit(e);
            })
          };
        }

        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
          return tree.token[e];
        })) {
          var type = Object.keys(tree.token).filter(function (e) {
            return e.match(/Literal/) || e.match(/Identifier/);
          })[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token
          }[type];

          return {
            type: type,
            value: value
          };
        }

        if (tree.name === 'CallExpression') return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])]
        };

        return {
          type: childNodes.filter(function (e) {
            return e.token && e.token.Punctuator;
          })[0].name,
          children: childNodes.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          }).map(function (e) {
            return visit(e);
          })
        };
      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse
      };

      /***/
    }]
    /******/)
  );
});;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2fe9c898"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(115);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(192);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(17);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_api2.default);
/* weex initialized here, please do not move this line */
/* global Vue */

// 将API方法绑定到全局
var store = __webpack_require__(21);
var router = __webpack_require__(26);
var App = __webpack_require__(211);

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router: router,
  store: store
}, App));
router.push('/');

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _qs = __webpack_require__(18);

var _qs2 = _interopRequireDefault(_qs);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 返回在vue模板中的调用接口
exports.default = {
  install: function install(Vue, options) {
    var timerId = {};
    var TIMEOUT = 60000; // 接口60秒超时

    // 身份验证
    // import jwtdecode from 'jwt-simple'

    // 自定义判断元素类型JS
    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    // 参数过滤函数
    function filterNull(o) {
      for (var key in o) {
        if (o[key] === null) {
          delete o[key];
        }
        if (toType(o[key]) === 'string') {
          o[key] = o[key].trim();
        } else if (toType(o[key]) === 'object') {
          o[key] = filterNull(o[key]);
        } else if (toType(o[key]) === 'array') {
          o[key] = filterNull(o[key]);
        }
      }
      return o;
    }

    function responseHandle(resolve, reject, res, handleError, url) {
      // 引入 弹窗组件
      var modal = weex.requireModule('modal');
      // 请求正确响应时处理
      clearTimeout(timerId[url]);
      Vue.prototype.$store.dispatch('updateLoadingProps', {
        show: false,
        type: 'default',
        size: '',
        loadingText: '加载中'
      });

      if (res.ok) {
        if (res.data && res.data.code === 200) {
          resolve(res.data.data);
        } else {
          if (handleError) {
            reject(res.data);
          } else {
            var msg = res.data.msg || '请求失败，请稍后再试...';
            modal.toast({
              message: msg,
              duration: 3
            });
          }
        }
      } else {
        var _msg = res.statusText || '请求失败，请稍后再试...';
        modal.toast({
          message: _msg,
          duration: 3
        });
      }
    }

    /**
     * 接口处理函数
     */
    function apiStream(method, url, params, handleError, progressCallback) {
      // 引入 弹窗组件
      var modal = weex.requireModule('modal');
      url = method === 'GET' ? url + '?' + _qs2.default.stringify(params) : url;
      // 请求之前处理
      // 添加Loading
      if (!params.hideLoading) {
        Vue.prototype.$store.dispatch('updateLoadingProps', {
          show: true,
          type: 'default',
          size: '',
          loadingText: '加载中'
        });
      }
      // 设置接口超时的错误提示。
      timerId[url] = setTimeout(function () {
        Vue.prototype.$store.dispatch('updateLoadingProps', {
          show: false,
          type: 'default',
          size: '',
          loadingText: '加载中'
        });

        modal.toast({
          message: '链接超时！',
          duration: 3
        });
        clearTimeout(timerId[url]);
      }, TIMEOUT);

      // 引入 请求数据组件
      var stream = weex.requireModule('stream');
      // 过滤参数
      if (params) {
        params = filterNull(params);
      }

      /**
       * stream
       */
      if (method === 'GET') {
        // GET 方法
        var getStream = new Promise(function (resolve, reject) {
          stream.fetch({
            method: 'GET',
            url: url,
            type: 'json',
            timeout: TIMEOUT
          }, function (res) {
            responseHandle(resolve, reject, res, handleError, url);
          }, function (progress) {
            progressCallback && progressCallback(progress);
          });
        });

        return getStream;
      } else if (method === 'POST') {
        // POST 方法
        var postStream = new Promise(function (resolve, reject) {
          stream.fetch({
            method: 'POST',
            url: url,
            type: 'json',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(params),
            timeout: TIMEOUT
          }, function (res) {
            responseHandle(resolve, reject, res, handleError, url);
          }, function (progress) {
            progressCallback && progressCallback(progress);
          });
        });

        return postStream;
      }
    }

    var api = function api(urlKey) {
      var url = _index.apiConfig.urls[urlKey];
      return {
        get: function get(params, handleError, progressCallback) {
          return apiStream('GET', url, params, handleError, progressCallback);
        },
        post: function post(params, handleError, progressCallback) {
          return apiStream('POST', url, params, handleError, progressCallback);
        }
      };
    };
    Vue.prototype.$api = api;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(19);
var parse = __webpack_require__(20);
var formats = __webpack_require__(8);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);
var formats = __webpack_require__(8);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(7);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vuex = __webpack_require__(22);

var _vuex2 = _interopRequireDefault(_vuex);

var _getters = __webpack_require__(23);

var getters = _interopRequireWildcard(_getters);

var _actions = __webpack_require__(24);

var actions = _interopRequireWildcard(_actions);

var _mutations = __webpack_require__(25);

var mutations = _interopRequireWildcard(_mutations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vuex2.default);

var state = {
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
};

var store = new _vuex2.default.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  modules: {}
});

Vue.prototype.$store = store;
module.exports = store;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file main getters
 * @author jianghh
 * @date 2018/7/30
 */
var demo = exports.demo = function demo(state) {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file main actions
 * @author jianghh
 * @date 2018/5/09
 */

// export const login = async ({
//   commit
// }, params) => {
//   let res = await api('login').post(params)
//   let userInfo = res.data.resultdata
//   commit('updateUserInfo', userInfo)
//   return userInfo
// }

var updateUserInfo = exports.updateUserInfo = function updateUserInfo(_ref, value) {
  var commit = _ref.commit;

  commit('updateUserInfo', value);
};

var updateTabIndex = exports.updateTabIndex = function updateTabIndex(_ref2, num) {
  var commit = _ref2.commit;

  commit('updateTabIndex', num);
};

var updateLoadingProps = exports.updateLoadingProps = function updateLoadingProps(_ref3, obj) {
  var commit = _ref3.commit;

  commit('updateLoadingProps', obj);
};

var updateToastProps = exports.updateToastProps = function updateToastProps(_ref4, obj) {
  var commit = _ref4.commit;

  commit('updateToastProps', obj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateUserInfo = exports.updateUserInfo = function updateUserInfo(state, value) {
  state.userInfo = value;
};

var updateTabIndex = exports.updateTabIndex = function updateTabIndex(state, n) {
  state.currentTabIndex = n;
};

var updateLoadingProps = exports.updateLoadingProps = function updateLoadingProps(state, obj) {
  state.loadingProps = Object.assign({}, state.loadingProps, obj);
};

var updateToastProps = exports.updateToastProps = function updateToastProps(state, obj) {
  state.toastProps = Object.assign({}, state.toastProps, obj);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(27);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(28);

var _index2 = _interopRequireDefault(_index);

var _result = __webpack_require__(111);

var _result2 = _interopRequireDefault(_result);

var _index3 = __webpack_require__(121);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(125);

var _index6 = _interopRequireDefault(_index5);

var _inviteExpert = __webpack_require__(129);

var _inviteExpert2 = _interopRequireDefault(_inviteExpert);

var _selectCrop = __webpack_require__(133);

var _selectCrop2 = _interopRequireDefault(_selectCrop);

var _index7 = __webpack_require__(137);

var _index8 = _interopRequireDefault(_index7);

var _serviceProtocol = __webpack_require__(141);

var _serviceProtocol2 = _interopRequireDefault(_serviceProtocol);

var _index9 = __webpack_require__(145);

var _index10 = _interopRequireDefault(_index9);

var _editNickname = __webpack_require__(149);

var _editNickname2 = _interopRequireDefault(_editNickname);

var _editSignature = __webpack_require__(153);

var _editSignature2 = _interopRequireDefault(_editSignature);

var _myPublish = __webpack_require__(157);

var _myPublish2 = _interopRequireDefault(_myPublish);

var _myFocus = __webpack_require__(161);

var _myFocus2 = _interopRequireDefault(_myFocus);

var _myFans = __webpack_require__(165);

var _myFans2 = _interopRequireDefault(_myFans);

var _myMessage = __webpack_require__(169);

var _myMessage2 = _interopRequireDefault(_myMessage);

var _applyAuth = __webpack_require__(173);

var _applyAuth2 = _interopRequireDefault(_applyAuth);

var _index11 = __webpack_require__(177);

var _index12 = _interopRequireDefault(_index11);

var _addCrop = __webpack_require__(181);

var _addCrop2 = _interopRequireDefault(_addCrop);

var _versionInfo = __webpack_require__(185);

var _versionInfo2 = _interopRequireDefault(_versionInfo);

var _buttonDemo = __webpack_require__(189);

var _buttonDemo2 = _interopRequireDefault(_buttonDemo);

var _dialogDemo = __webpack_require__(197);

var _dialogDemo2 = _interopRequireDefault(_dialogDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue */
Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'Index',
    component: _index2.default
  }, {
    path: '/result',
    name: 'Result',
    component: _result2.default
  }, {
    path: '/post/index',
    name: 'PostIndex',
    component: _index4.default
  }, {
    path: '/question/index',
    name: 'QuestionIndex',
    component: _index6.default
  }, {
    path: '/question/invite-expert',
    name: 'QuestionInviteExpert',
    component: _inviteExpert2.default
  }, {
    path: '/question/select-crop',
    name: 'QuestionSelectCrop',
    component: _selectCrop2.default
  }, {
    path: '/login/index',
    name: 'LoginIndex',
    component: _index8.default
  }, {
    path: '/login/service-protocol',
    name: 'LoginServiceProtocol',
    component: _serviceProtocol2.default
  }, {
    path: 'my/user-info/index',
    name: 'UserInfoIndex',
    component: _index10.default
  }, {
    path: 'my/user-info/edit-nickname',
    name: 'UserInfoEditNickname',
    component: _editNickname2.default
  }, {
    path: 'my/user-info/edit-signature',
    name: 'UserInfoEditSignature',
    component: _editSignature2.default
  }, {
    path: '/my/my-publish',
    name: 'MyPublish',
    component: _myPublish2.default
  }, {
    path: '/my/my-focus',
    name: 'MyFocus',
    component: _myFocus2.default
  }, {
    path: '/my/my-fans',
    name: 'MyFans',
    component: _myFans2.default
  }, {
    path: '/my/my-message',
    name: 'MyMessage',
    component: _myMessage2.default
  }, {
    path: '/my/apply-auth',
    name: 'ApplyAuth',
    component: _applyAuth2.default
  }, {
    path: '/my/focus-crop/index',
    name: 'FocusCropIndex',
    component: _index12.default
  }, {
    path: '/my/focus-crop/add-crop',
    name: 'FocusCropAddCrop',
    component: _addCrop2.default
  }, {
    path: '/my/version-info',
    name: 'VersionInfo',
    component: _versionInfo2.default
  }, {
    path: '/my/button-demo',
    name: 'ButtonDemo',
    component: _buttonDemo2.default
  }, {
    path: '/my/dialog-demo',
    name: 'DialogDemo',
    component: _dialogDemo2.default
  }]
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(110)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-436ef8ce"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "bar-bar-item-container": {
    "width": "750",
    "backgroundColor": "#F2F2F2",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "post-wrap": {
    "width": "750",
    "position": "absolute",
    "left": 0,
    "bottom": 0,
    "right": 0
  },
  "post-items-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "paddingTop": "48",
    "paddingBottom": "48",
    "paddingLeft": "39",
    "paddingRight": "39"
  },
  "post-item": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "16",
    "paddingBottom": "16",
    "paddingLeft": "32",
    "paddingRight": "32"
  },
  "icon-wrap": {
    "width": "96",
    "height": "96",
    "borderRadius": "48",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "icon-post": {
    "backgroundImage": "linear-gradient(to right, #00A0E6, #1C69D3)"
  },
  "icon-question": {
    "backgroundImage": "linear-gradient(to right, #FFB800, #FF8200)"
  },
  "post-item-text": {
    "marginTop": "16",
    "lineHeight": "36",
    "fontSize": "28",
    "color": "#333333",
    "textAlign": "center"
  },
  "post-footer": {
    "width": "750",
    "height": "98",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(4);

var _index = __webpack_require__(2);

var _tabBar = __webpack_require__(34);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _overlay = __webpack_require__(9);

var _overlay2 = _interopRequireDefault(_overlay);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _index2 = __webpack_require__(48);

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(93);

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(97);

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(101);

var _index9 = _interopRequireDefault(_index8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  name: 'Index',
  components: {
    TTabBar: _tabBar2.default,
    TOverlay: _overlay2.default,
    TIcon: _icon2.default,
    HomeIndex: _index3.default,
    VideoIndex: _index5.default,
    FindIndex: _index7.default,
    MyIndex: _index9.default
  },
  data: function data() {
    return {
      isShow: true,
      contentStyle: {
        height: 0
      },
      tabBarTitles: _config.tabBarConfig.tabTitles,
      tabBarStyles: _config.tabBarConfig.tabStyles,
      tabPageList: ['HomeIndex', 'VideoIndex', 'FindIndex', 'MyIndex'],
      showMiddle: false
    };
  },
  created: function created() {
    this.contentStyle = {
      height: (0, _index.getPageHeight)() - this.tabBarStyles.height + 'px'
    };
    _index.localStore.set('contentHeight', this.contentStyle.height);
  },
  mounted: function mounted() {
    var index = this.$store.state.currentTabIndex;
    this.$refs['tty-tab-bar'].setPage(index, null, false);
  },

  methods: {
    tabBarCurrentTabSelected: function tabBarCurrentTabSelected(e) {
      if (e.isMiddle) {
        this.showMiddle = true;
      } else {
        var index = e.page;
        this.$store.dispatch('updateTabIndex', index);
        if (index === 4) {
          (0, _index.setStatusBarStyle)('blue');
        } else {
          (0, _index.setStatusBarStyle)();
        }
      }
    },
    openPage: function openPage(type) {
      var path = type === 'post' ? '/post/index' : '/question/index';
      this.$router.push({
        path: path
      });
    },
    closeOverlay: function closeOverlay() {
      this.showMiddle = false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(32)
  , qs = __webpack_require__(33)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\tab-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-73fd655e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "tty-tab-bar": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "tab-title-list": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "tab-bar-wrap": {
    "width": "750",
    "flex": 1,
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "desc-tag": {
    "position": "absolute",
    "top": "10",
    "right": "20",
    "borderBottomRightRadius": "14",
    "borderBottomLeftRadius": 0,
    "borderTopLeftRadius": "14",
    "borderTopRightRadius": "14",
    "backgroundColor": "#ff5e00",
    "height": "26",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "dot": {
    "width": "12",
    "height": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "position": "absolute",
    "top": "10",
    "right": "40",
    "backgroundColor": "#ff5e00"
  },
  "desc-text": {
    "fontSize": "18",
    "color": "#ffffff"
  },
  "icon-wrap": {
    "width": "88",
    "height": "88",
    "borderRadius": "44",
    "backgroundImage": "linear-gradient(to right, #00A0E6, #1C69D3)",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');

exports.default = {
  name: 'TabBar',
  components: {
    TIcon: _icon2.default
  },
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FAFAFA',
          titleColor: '#666666',
          activeTitleColor: '#666666',
          activeIconFontColor: '#666666',
          iconFontMarginBottom: 1,
          width: 150,
          height: 98,
          fontSize: 20,
          iconFontColor: '#666666',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      translateX: 0,
      middlePageIndex: 3
    };
  },
  created: function created() {
    this.middlePageIndex = Math.floor(this.tabTitles.length / 2);
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (page === this.middlePageIndex) {
        this.$emit('tabBarCurrentTabSelected', {
          page: page,
          isMiddle: true
        });
        return;
      }

      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['tty-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset,
          animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('tabBarCurrentTabSelected', {
        page: page
      });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var step = page > this.middlePageIndex ? page - 1 : page;
      var dist = step * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\icon\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a492fc2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(41);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  name: 'Icon',
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: '',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': 'ttyIconFont',
      'src': "url('https://at.alicdn.com/t/font_754480_9lnpqsa207a.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '34px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '30px';
          break;
        case 'medium':
          fontSize = '44px';
          break;
        case 'big':
          fontSize = '48px';
          break;
        default:
          fontSize = '34px';
      }
      return _extends({
        fontFamily: 'ttyIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  back: '\uE7E9',
  more: '\uE7EA',
  'arrow_down': '\uE7EB',
  clear: '\uE7EC',
  delete: '\uE7ED',
  add: '\uE7EE',
  success: '\uE7EF',
  exchange: '\uE7F0',
  search: '\uE7F1',
  expert: '\uE7F2',
  'home_default': '\uE7F3',
  'home_selected': '\uE7F4',
  'video_default': '\uE7F5',
  'video_selected': '\uE7F6',
  post: '\uE7F7',
  'find_selected': '\uE7F8',
  'find_default': '\uE7F9',
  'my_default': '\uE7FA',
  'my_selected': '\uE7FB',
  location: '\uE7FC',
  'link_default': '\uE7FD',
  'link_selected': '\uE7FE',
  view: '\uE7FF',
  comment: '\uE800',
  answer: '\uE801',
  'apply_auth': '\uE802',
  crop: '\uE803',
  logo: '\uE804',
  'auth_pass': '\uE805',
  'info_success': '\uE806',
  'post_link': '\uE807',
  'question_bg': '\uE809',
  close: '\uE80A',
  'tty_logo': '\uE808',
  message: '\uE80B',
  'arrow_up': '\uE80C',
  question: '\uE80D'
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tty-tab-bar"],
    style: {
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('div', {
    ref: "tab-bar-wrap",
    staticClass: ["tab-bar-wrap"]
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height + (_vm.isIPhoneX ? 78 : 0)) + 'px',
      paddingBottom: _vm.isIPhoneX ? '78px' : '0'
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'tty-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px'
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(v.isPage) ? [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('t-icon', {
      attrs: {
        "name": _vm.currentPage == index ? v.activeIcon : v.icon,
        "size": "big"
      }
    }) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["desc-tag"]
    }, [_c('text', {
      staticClass: ["desc-text"]
    }, [_vm._v(_vm._s(v.badge))])]) : _vm._e(), (v.dot && !v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["dot"]
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()] : [_c('div', {
      staticClass: ["icon-wrap"]
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('t-icon', {
      attrs: {
        "name": v.icon,
        "size": "big",
        "iconStyle": {
          color: '#FFFFFF'
        }
      }
    }) : _vm._e()], 1), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()]], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(45)
)

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(47)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-055fe586"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  "tty-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0,
    "zIndex": 99
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    canAutoClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: this.backgroundColor
      };
    },
    shouldShow: function shouldShow() {
      var show = this.show,
          hasAnimation = this.hasAnimation;


      hasAnimation && this.appearOverlay(show);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('overlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;

      setTimeout(function () {
        var hasAnimation = _this.hasAnimation,
            timingFunction = _this.timingFunction,
            canAutoClose = _this.canAutoClose;

        var needEmit = !bool && canAutoClose;
        needEmit && _this.$emit('overlayBodyClicking', {});
        var overlayEl = _this.$refs['tty-overlay'];
        if (hasAnimation && overlayEl) {
          animation.transition(overlayEl, {
            styles: {
              opacity: bool ? 1 : 0
            },
            duration: duration,
            timingFunction: timingFunction[bool ? 0 : 1],
            delay: 0
          }, function () {
            needEmit && _this.$emit('overlayBodyClicked', {});
          });
        } else {
          needEmit && _this.$emit('overlayBodyClicked', {});
        }
      }, 50);
    }
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    ref: "tty-overlay",
    staticClass: ["tty-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }, [_vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(92)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\home\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4cb1fbc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "page": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "header-left": {
    "flexDirection": "row"
  },
  "location-text": {
    "fontSize": "28",
    "lineHeight": "36",
    "marginRight": "8"
  },
  "header-middle": {
    "position": "absolute",
    "top": "-16",
    "left": "315",
    "width": "120",
    "height": "120"
  },
  "content": {
    "width": "750",
    "flex": 1
  },
  "tab-page-item-container": {
    "width": "750",
    "backgroundColor": "#f2f3f4"
  },
  "slider": {
    "width": "750",
    "height": "360"
  },
  "slider-image": {
    "width": "750",
    "height": "360"
  },
  "frame": {
    "width": "750",
    "height": "360"
  },
  "border-cell": {
    "backgroundColor": "#f2f3f4",
    "width": "750",
    "height": "24",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#e0e0e0"
  },
  "cell": {
    "backgroundColor": "#ffffff"
  },
  "question": {
    "position": "fixed",
    "width": "120",
    "height": "120",
    "left": "606",
    "bottom": "122"
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindEnv = __webpack_require__(10);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcPanItem = __webpack_require__(51);

var _wxcPanItem2 = _interopRequireDefault(_wxcPanItem);

var _config = __webpack_require__(4);

var _index = __webpack_require__(2);

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

var _tabPage = __webpack_require__(59);

var _tabPage2 = _interopRequireDefault(_tabPage);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _wxcItem = __webpack_require__(65);

var _wxcItem2 = _interopRequireDefault(_wxcItem);

var _imageBase = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'HomeIndex',
  components: {
    TMinibar: _minibar2.default,
    TTabPage: _tabPage2.default,
    WxcPanItem: _wxcPanItem2.default,
    WxcItem: _wxcItem2.default,
    TIcon: _icon2.default
  },
  data: function data() {
    return {
      orgName: '田田云',
      tabPageTitles: _config.tabPageConfig.tabTitles,
      tabPageStyles: _config.tabPageConfig.tabStyles,
      imageList: [{
        src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
      }, {
        src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
      }, {
        src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
      }],
      tabPageList: [],
      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 10000,
      desc: [{
        type: 'text',
        value: '特价机票|班期:清明 3/27-4/2等',
        theme: 'gray'
      }],
      tags: [{
        type: 'tag',
        value: '满100减20测试',
        theme: 'yellow'
      }],
      currentCity: '',
      cityStyleType: 'group',
      location: '定位中',
      ttyLogoName: _imageBase.ttyLogoName,
      questionBg: _imageBase.questionBg
    };
  },
  created: function created() {
    this.tabPageList = [].concat(_toConsumableArray(Array(this.tabPageTitles.length).keys())).map(function (i) {
      return [];
    });
    this.$set(this.tabPageList, 0, this.demoList);
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    this.tabPageHeight = (0, _index.getPageHeight)() - _config.tabBarConfig.tabStyles.height - 90;

    // this.$api('getIndexGoods').post({
    //   page: 2,
    //   rows: 20,
    //   handleError: true
    // }).then((data) => {
    //   console.log(data)
    // }, (err) => {
    //   console.log(err)
    // })
  },
  mounted: function mounted() {
    var _this = this;

    // 模拟定位
    setTimeout(function () {
      _this.location = '深圳';
      _this.currentCity = '深圳';
    }, 1000);
  },

  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {
      this.$store.dispatch('updateToastProps', {
        show: true,
        message: 'left clicked~',
        needMask: false
      });
    },
    wxcTabPageCurrentTabSelected: function wxcTabPageCurrentTabSelected(e) {
      var _this2 = this;

      var self = this;
      var index = e.page;
      /* Unloaded tab analog data request */
      if (!_utils2.default.isNonEmptyArray(self.tabPageList[index])) {
        setTimeout(function () {
          _this2.$set(self.tabPageList, index, self.demoList);
        }, 100);
      }
    },
    wxcPanItemPan: function wxcPanItemPan(e) {
      if (_bindEnv2.default.supportsEBForAndroid()) {
        this.$refs['tty-tab-page'].bindExp(e.element);
      }
    },
    questionClicked: function questionClicked() {
      this.$store.dispatch('updateToastProps', {
        show: true,
        message: '提问点击'
      });
    }
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(52);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(12);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(11);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    url: {
      type: String,
      default: ''
    },
    needSlider: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isPanning: false,
      appearMap: [],
      supportAndroid: _bindEnv2.default.supportsEBForAndroid()
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.supportAndroid && _this.needSlider) {
        var element = _this.$refs['wxc-pan-item'];
        _indexWeex2.default.prepare && _indexWeex2.default.prepare({
          anchor: element.ref,
          eventType: 'pan'
        });
      }
    }, 300);
  },

  methods: {
    itemClicked: function itemClicked() {
      if (this.isPanning) {
        return;
      }
      this.url && _utils2.default.goToH5Page(this.url, true);
      this.$emit('wxcPanItemClicked', { extId: this.extId });
    },
    dispatchPan: function dispatchPan(e) {
      var _this2 = this;

      if (this.supportAndroid && this.needSlider) {
        if (e.state === 'start') {
          this.isPanning = true;
          var element = this.$refs['wxc-pan-item'];
          element && this.$emit('wxcPanItemPan', { element: element });
        } else if (e.state === 'end') {
          setTimeout(function () {
            _this2.isPanning = false;
          }, 50);
        }
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.supportAndroid) ? _c('div', {
    ref: "wxc-pan-item",
    on: {
      "horizontalpan": _vm.dispatchPan,
      "appear": _vm.onItemAppear,
      "disappear": _vm.onItemDisAppear,
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2) : _c('div', {
    ref: "wxc-pan-item",
    on: {
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77a132dc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "minibar": {
    "position": "relative",
    "width": "750",
    "height": "88",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "backgroundColor": "#FFFFFF"
  },
  "left": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "zIndex": 1000,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "height": "88",
    "paddingLeft": "24",
    "paddingRight": "24",
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, .1) inset"
  },
  "middle": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "88"
  },
  "middle-title": {
    "lineHeight": "48",
    "fontSize": "40",
    "fontWeight": "bold",
    "color": "#333333"
  },
  "right": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "zIndex": 1000,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "88",
    "paddingLeft": "24",
    "paddingRight": "24",
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, .1) inset"
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Minibar',
  components: {
    TIcon: _icon2.default
  },
  props: {
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    leftButton: {
      type: String,
      default: 'back'
    },
    rightButton: {
      type: String,
      default: ''
    },
    leftTextColor: {
      type: String,
      default: '#666666'
    },
    middleTextColor: {
      type: String,
      default: '#333333'
    },
    rightTextColor: {
      type: String,
      default: '#666666'
    },
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        this.$router.back();
      }
      this.$emit('minibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('minibarRightButtonClicked', {});
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [(_vm.leftButton || _vm.leftText || (_vm.$slots && _vm.$slots.left)) ? _c('div', {
    staticClass: ["left"],
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('t-icon', {
    attrs: {
      "name": _vm.leftButton,
      "size": "big"
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    style: {
      color: _vm.leftTextColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2) : _vm._e(), _c('div', {
    staticClass: ["middle"]
  }, [_vm._t("middle", [(_vm.title) ? _c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.middleTextColor
    }
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2), (_vm.rightButton || _vm.rightText || (_vm.$slots && _vm.$slots.right)) ? _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('t-icon', {
    attrs: {
      "name": _vm.rightButton,
      "size": "big"
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    style: {
      color: _vm.rightTextColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(60);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\tab-page\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a7e7a026"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "tty-tab-page": {
    "width": "750"
  },
  "tab-title-list": {
    "flexDirection": "row"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "border-bottom": {
    "position": "absolute",
    "bottom": 0
  },
  "tab-page-wrap": {
    "width": "750",
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(10);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _index = __webpack_require__(63);

var _index2 = _interopRequireDefault(_index);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var swipeBack = weex.requireModule('swipeBack');

exports.default = {
  name: 'TabPage',
  components: {
    TIcon: _icon2.default
  },
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    panDist: {
      type: Number,
      default: 200
    },
    spmC: {
      type: [String, Number],
      default: ''
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FFFFFF',
          titleColor: '#333333',
          activeTitleColor: '#1C69D3',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: false,
          width: 150,
          height: 88,
          fontSize: 34,
          hasActiveBottom: true,
          activeBottomColor: '#1C69D3',
          activeBottomWidth: 68,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10,
          leftOffset: 0
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    tabPageHeight: {
      type: [String, Number],
      default: 1334
    },
    needSlider: {
      type: Boolean,
      default: true
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#F2F2F2'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      gesToken: 0,
      isMoving: false,
      startTime: 0,
      deltaX: 0,
      translateX: 0
    };
  },
  mounted: function mounted() {
    if (swipeBack && swipeBack.forbidSwipeBack) {
      swipeBack.forbidSwipeBack(true);
    }
    if (_bindEnv2.default.supportsEBForIos() && this.isTabView && this.needSlider) {
      var tabPageEl = this.$refs['tab-page-wrap'];
      _index2.default.prepare && _index2.default.prepare({
        anchor: tabPageEl.ref,
        eventType: 'pan'
      });
    }
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    startHandler: function startHandler() {
      if (_bindEnv2.default.supportsEBForIos() && this.isTabView && this.needSlider) {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    bindExp: function bindExp(element) {
      var _this = this;

      if (element && element.ref) {
        if (this.isMoving && this.gesToken !== 0) {
          _index2.default.unbind({
            eventType: 'pan',
            token: this.gesToken
          });
          this.gesToken = 0;
          return;
        }

        var tabElement = this.$refs['tab-container'];
        var currentPage = this.currentPage,
            panDist = this.panDist;

        var dist = currentPage * 750;

        // x-dist
        var props = [{
          element: tabElement.ref,
          property: 'transform.translateX',
          expression: 'x-' + dist
        }];

        var gesTokenObj = _index2.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: props
        }, function (e) {
          var deltaX = e.deltaX,
              state = e.state;

          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
        this.gesToken = gesTokenObj.token;
      }
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['tty-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset,
          animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('tabPageCurrentTabSelected', {
        page: page
      });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    }
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == ( false ? "undefined" : _typeof2(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (n, t, i) {
    i.exports = e();
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    ("undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : this)["index.weex"] = e();
  }
}(function () {
  return function (e) {
    var n = {};function t(i) {
      if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "", t(t.s = 0);
  }([function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof2(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
    },
        r = t(1);function o(e) {
      try {
        if (void 0 !== ("undefined" == typeof weex ? "undefined" : i(weex)) && weex.requireModule) return weex.requireModule(e);
      } catch (e) {}return window.require("@weex-module/" + e);
    }var s = !0,
        a = !0,
        l = void 0;try {
      l = o("bindingx"), s = !0;
    } catch (e) {
      s = !1;
    }if (!l || !l.bind) try {
      l = o("binding"), s = !0;
    } catch (e) {
      s = !1;
    }if (!(s = !!(l && l.bind && l.unbind && l.getComputedStyle))) try {
      l = o("expressionBinding"), a = !0;
    } catch (e) {
      a = !1;
    }function u(e) {
      if (void 0 !== e) {
        try {
          e = JSON.parse(e);
        } catch (e) {}var n = {};if ("string" == typeof e ? n.origin = e : e && (n.origin = e.origin, n.transformed = e.transformed), n.transformed || n.origin) return n.transformed = n.transformed || (0, r.parse)(n.origin), n;
      }
    }function c(e) {
      return e ? (e.exitExpression = u(e.exitExpression), e.props && e.props.forEach(function (e) {
        e.expression = u(e.expression);
      }), e) : e;
    }function p(e) {
      if (e && e.props) return e.props.map(function (e) {
        return { element: e.element, property: e.property, expression: e.expression.transformed };
      });
    }function d(e) {
      return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if ("function" == typeof e) return e({ state: "end" === n.state ? "exit" : n.state, t: void 0 !== n.t ? n.t : n.deltaT });
      };
    }a = !(!l || !l.bind && !l.createBinding), n.default = { isSupportNewBinding: s, isSupportBinding: a, _bindingInstances: [], bind: function bind(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};if (!e) throw new Error("should pass options for binding");if (c(e), l && a) {
          if (s) return l.bind(e, e && "timing" === e.eventType ? d(n) : n);l.enableBinding(e.anchor, e.eventType), l.createBinding(e.anchor, e.eventType, "", p(e), n);
        }
      }, bindAsync: function bindAsync(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};return new Promise(function (t, i) {
          e || i("should pass options for binding"), c(e), l && a && (s ? (e && "timing" === e.eventType && (n = d(n)), "function" == typeof l.bindAsync ? l.bindAsync(e, n, function (e) {
            t(e);
          }) : t(l.bind(e, n))) : (l.enableBinding(e.anchor, e.eventType), t(l.createBinding(e.anchor, e.eventType, "", p(e), n))));
        });
      }, unbind: function unbind(e) {
        if (!e) throw new Error("should pass options for binding");if (l && a) return s ? l.unbind(e) : l.disableBinding(e.anchor, e.eventType);
      }, unbindAll: function unbindAll() {
        if (l && a) return s ? l.unbindAll() : l.disableAll();
      }, prepare: function prepare(e) {
        if (l && a) return s ? l.prepare(e) : l.enableBinding(e.anchor, e.eventType);
      }, getComputedStyle: function getComputedStyle(e) {
        return s ? l.getComputedStyle(e) : {};
      }, getComputedStyleAsync: function getComputedStyleAsync(e) {
        return new Promise(function (n) {
          s ? "function" == typeof l.getComputedStyleAsync ? l.getComputedStyleAsync(e, function (e) {
            n(e);
          }) : n(l.getComputedStyle(e)) : n({});
        });
      } }, e.exports = n.default;
  }, function (module, exports, __webpack_require__) {
    !function (e, n) {
      module.exports = n();
    }("undefined" != typeof self && self, function () {
      return function (e) {
        var n = {};function t(i) {
          if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }return t.m = e, t.c = n, t.d = function (e, n, i) {
          t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
        }, t.n = function (e) {
          var n = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };return t.d(n, "a", n), n;
        }, t.o = function (e, n) {
          return Object.prototype.hasOwnProperty.call(e, n);
        }, t.p = "", t(t.s = 0);
      }([function (module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        },
            lex = { InputElementDiv: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", InputElementRegExp: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", ReservedWord: "<Keyword>|<NullLiteral>|<BooleanLiteral>", WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/, LineTerminator: /[\n\r\u2028\u2029]/, Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/, NullLiteral: /null(?![_$a-zA-Z0-9])/, BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/, Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/, Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/, DivPunctuator: /\/=|\//, NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/, StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/, RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/ };function XRegExp(e, n, t) {
          var i = [n];var r = function n(r) {
            var o = new RegExp();return o.compile(r.replace(/<([^>]+)>/g, function (t, r) {
              return e[r] ? (i.push(r), e[r] instanceof RegExp ? "(" + e[r].source + ")" : "(" + n(e[r]).source + ")") : "";
            }), t), o;
          }(e[n]);this.exec = function (e) {
            var n = r.exec(e);if (null == n) return null;for (var t = new String(n[0]), o = 0; o < i.length; o++) {
              n[o] && (t[i[o]] = n[o]);
            }return t;
          }, Object.defineProperty(this, "lastIndex", { get: function get() {
              return r.lastIndex;
            }, set: function set(e) {
              r.lastIndex = e;
            } });
        }function LexicalParser() {
          var e,
              n = new XRegExp(lex, "InputElementDiv", "g"),
              t = new XRegExp(lex, "InputElementRegExp", "g");Object.defineProperty(this, "source", { get: function get() {
              return e;
            }, set: function set(i) {
              e = i, n.lastIndex = 0, t.lastIndex = 0;
            } }), this.reset = function () {
            n.lastIndex = 0, t.lastIndex = 0;
          }, this.getNextToken = function (i) {
            var r,
                o = n.lastIndex,
                s = (r = i ? n : t).exec(e);if (s && r.lastIndex - o > s.length) throw new SyntaxError("Unexpected token ILLEGAL");return n.lastIndex = r.lastIndex, t.lastIndex = r.lastIndex, s;
          };
        }var rules = { IdentifierName: [["Identifier"]], Literal: [["NullLiteral"], ["BooleanLiteral"], ["NumericLiteral"], ["StringLiteral"], ["RegularExpressionLiteral"]], PrimaryExpression: [["Identifier"], ["Literal"], ["(", "Expression", ")"]], CallExpression: [["PrimaryExpression", "Arguments"], ["CallExpression", "Arguments"]], Arguments: [["(", ")"], ["(", "ArgumentList", ")"]], ArgumentList: [["ConditionalExpression"], ["ArgumentList", ",", "ConditionalExpression"]], LeftHandSideExpression: [["PrimaryExpression"], ["CallExpression"]], UnaryExpression: [["LeftHandSideExpression"], ["void", "UnaryExpression"], ["+", "UnaryExpression"], ["-", "UnaryExpression"], ["~", "UnaryExpression"], ["!", "UnaryExpression"]], ExponentiationExpression: [["UnaryExpression"], ["ExponentiationExpression", "**", "UnaryExpression"]], MultiplicativeExpression: [["MultiplicativeExpression", "/", "ExponentiationExpression"], ["ExponentiationExpression"], ["MultiplicativeExpression", "*", "ExponentiationExpression"], ["MultiplicativeExpression", "%", "ExponentiationExpression"]], AdditiveExpression: [["MultiplicativeExpression"], ["AdditiveExpression", "+", "MultiplicativeExpression"], ["AdditiveExpression", "-", "MultiplicativeExpression"]], ShiftExpression: [["AdditiveExpression"], ["ShiftExpression", "<<", "AdditiveExpression"], ["ShiftExpression", ">>", "AdditiveExpression"], ["ShiftExpression", ">>>", "AdditiveExpression"]], RelationalExpression: [["ShiftExpression"], ["RelationalExpression", "<", "ShiftExpression"], ["RelationalExpression", ">", "ShiftExpression"], ["RelationalExpression", "<=", "ShiftExpression"], ["RelationalExpression", ">=", "ShiftExpression"], ["RelationalExpression", "instanceof", "ShiftExpression"], ["RelationalExpression", "in", "ShiftExpression"]], EqualityExpression: [["RelationalExpression"], ["EqualityExpression", "==", "RelationalExpression"], ["EqualityExpression", "!=", "RelationalExpression"], ["EqualityExpression", "===", "RelationalExpression"], ["EqualityExpression", "!==", "RelationalExpression"]], BitwiseANDExpression: [["EqualityExpression"], ["BitwiseANDExpression", "&", "EqualityExpression"]], BitwiseXORExpression: [["BitwiseANDExpression"], ["BitwiseXORExpression", "^", "BitwiseANDExpression"]], BitwiseORExpression: [["BitwiseXORExpression"], ["BitwiseORExpression", "|", "BitwiseXORExpression"]], LogicalANDExpression: [["BitwiseORExpression"], ["LogicalANDExpression", "&&", "BitwiseORExpression"]], LogicalORExpression: [["LogicalANDExpression"], ["LogicalORExpression", "||", "LogicalANDExpression"]], ConditionalExpression: [["LogicalORExpression"], ["LogicalORExpression", "?", "LogicalORExpression", ":", "LogicalORExpression"]], Expression: [["ConditionalExpression"], ["Expression", ",", "ConditionalExpression"]], Program: [["Expression"]] };function _Symbol(e, n) {
          this.name = e, this.token = n, this.childNodes = [], this.toString = function (e) {
            if (e || (e = ""), 1 == this.childNodes.length) return this.childNodes[0].toString(e);for (var n = e + this.name + (void 0 != this.token && this.name != this.token ? ":" + this.token : "") + "\n", t = 0; t < this.childNodes.length; t++) {
              n += this.childNodes[t].toString(e + "    ");
            }return n;
          };
        }function SyntacticalParser() {
          var e = { Program: "$" },
              n = {};!function e(t) {
            n[JSON.stringify(t)] = t;for (var i = Object.getOwnPropertyNames(t); i.length;) {
              var r = i.shift();rules[r] && rules[r].forEach(function (e) {
                t[e[0]] || i.push(e[0]);var n = t;e.forEach(function (e) {
                  n[e] || (n[e] = {}), n = n[e];
                }), t[r].$div && (n.$div = !0), n.$reduce = r, n.$count = e.length;
              });
            }for (var o in t) {
              "object" != _typeof(t[o]) || "$" == o.charAt(0) || t[o].$closure || (n[JSON.stringify(t[o])] ? t[o] = n[JSON.stringify(t[o])] : e(t[o]));
            }t.$closure = !0;
          }(e);var t = [],
              i = [e],
              r = e;this.insertSymbol = function (e, n) {
            for (; !r[e.name] && r.$reduce;) {
              for (var o = r.$count, s = new _Symbol(r.$reduce); o--;) {
                s.childNodes.push(t.pop()), i.pop();
              }r = i[i.length - 1], this.insertSymbol(s);
            }if (r = r[e.name], t.push(e), i.push(r), !r) throw new Error();return r.$div;
          }, this.reset = function () {
            r = e, t = [], i = [e];
          }, Object.defineProperty(this, "grammarTree", { get: function get() {
              try {
                for (; r.$reduce;) {
                  for (var e = r.$count, n = new _Symbol(r.$reduce); e--;) {
                    n.childNodes.push(t.pop()), i.pop();
                  }r = i[i.length - 1], this.insertSymbol(n);
                }if (t.length > 0 && r[";"]) return this.insertSymbol(new _Symbol(";", ";")), this.grammarTree;if (1 != t.length || "Program" != t[0].name) throw new Error();
              } catch (e) {
                throw new SyntaxError("Unexpected end of input");
              }return t[0];
            } });
        }function Parser() {
          this.lexicalParser = new LexicalParser(), this.syntacticalParser = new SyntacticalParser();var e = {};["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "RegularExpressionLiteral", "Identifier", "**", "=>", "{", "}", "(", ")", "[", "]", ".", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===", "!==", "+", "-", "*", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "=", "+=", "-=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "/", "/=", "instanceof", "typeof", "new", "void", "debugger", "this", "delete", "in"].forEach(function (n) {
            Object.defineProperty(e, n, {});
          }), this.reset = function () {
            this.lexicalParser.reset(), this.syntacticalParser.reset();
          }, this.parse = function (n, t) {
            var i,
                r = this,
                o = !1;this.lexicalParser.source = n;for (var s = !1; i = this.lexicalParser.getNextToken(s);) {
              t && t(i);try {
                if (Object.getOwnPropertyNames(i).some(function (n) {
                  return !!e.hasOwnProperty(n) && (s = r.syntacticalParser.insertSymbol(new _Symbol(n, i), o), o = !1, !0);
                })) continue;(i.Keyword || i.Punctuator || i.DivPunctuator) && e.hasOwnProperty(i.toString()) && (s = this.syntacticalParser.insertSymbol(new _Symbol(i.toString(), i), o));
              } catch (e) {
                throw new SyntaxError("Unexpected token " + i);
              }
            }return this.syntacticalParser.grammarTree;
          };
        }var parser = new Parser();function JavaScriptExpression(text) {
          parser.reset(), this.tree = parser.parse(text), this.paths = [];var context = Object.create(null),
              me = this,
              pathIndex = Object.create(null);function checkSimple(e) {
            for (var n = e; n.childNodes.length <= 1 && "MemberExpression" !== n.name;) {
              n = n.childNodes[0];
            }"MemberExpression" === n.name ? me.isSimple = !0 : me.isSimple = !1;
          }function walk(e) {
            if ("CallExpression" === e.name && "CallExpression" !== e.childNodes[e.childNodes.length - 1].name) {
              getPath(e.childNodes[1]);walk(e.childNodes[0]);
            } else if ("NewExpression" === e.name && 1 === e.childNodes.length) getPath(e.childNodes[0]);else if ("MemberExpression" === e.name && 1 === e.childNodes.length) getPath(e);else for (var n = 0; n < e.childNodes.length; n++) {
              walk(e.childNodes[n]);
            }
          }function getPath(e) {
            var n;if ("IdentifierName" === e.childNodes[0].name) return (n = getPath(e.childNodes[2])) && (n = n.concat(e.childNodes[0].childNodes[0].token.toString())), createPath(n), n;if ("PrimaryExpression" === e.childNodes[0].name) return "Identifier" === e.childNodes[0].childNodes[0].name ? (createPath(n = [e.childNodes[0].childNodes[0].token.toString()]), n) : null;if ("]" === e.childNodes[0].name) return getPath(e.childNodes[3]), walk(e.childNodes[1]), null;if ("Arguments" === e.childNodes[0].name) return walk(e.childNodes[0]), walk(e.childNodes[1]), null;for (var t = 0; t < e.childNodes.length; t++) {
              walk(e.childNodes[t]);
            }
          }function createPath(e) {
            for (var n = context, t = 0; t < e.length - 1; t++) {
              n[e[t]] || (n[e[t]] = Object.create(null)), n = n[e[t]];
            }me.paths.push(e), pathIndex[e.join(".")] = !1;
          }this.isSimple, this.isConst, walk(this.tree), checkSimple(this.tree), 0 === this.paths.length && (this.isConst = !0), this.setter = function (e) {
            for (var n = context, t = 0; t < e.length - 1; t++) {
              n[e[t]] || (n[e[t]] = Object.create(null)), n = n[e[t]];
            }return { isCompleted: function isCompleted() {
                for (var e in pathIndex) {
                  if (!pathIndex[e]) return !1;
                }return !0;
              }, set: function set(i) {
                return pathIndex[e.join(".")] || (pathIndex[e.join(".")] = !0), n[e[t]] = i, this.isCompleted() ? me.exec() : void 0;
              } };
          }, this.valueOf = this.exec = function () {
            try {
              return function () {
                return eval(text);
              }.call(context);
            } catch (e) {}
          };
        }function visit(e) {
          var n,
              t = e.childNodes.slice().reverse(),
              i = t.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          });if ("UnaryExpression" === e.name && 2 === t.length && "-" === t[0].name && 1 === i.length) return (n = visit(i[0])).value = -n.value, n;if ("Arguments" === e.name) {
            for (var r = [], o = i[0]; o;) {
              3 === o.childNodes.length && (r.unshift(o.childNodes[0]), o = o.childNodes[2]), 1 === o.childNodes.length && (r.unshift(o.childNodes[0]), o = null);
            }return { type: "Arguments", children: r.map(function (e) {
                return visit(e);
              }) };
          }if (i && 1 === i.length) return n = visit(i[0]);if (e.token && ["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "Identifier"].some(function (n) {
            return e.token[n];
          })) {
            var s = Object.keys(e.token).filter(function (e) {
              return e.match(/Literal/) || e.match(/Identifier/);
            })[0];return { type: s, value: { NullLiteral: null, BooleanLiteral: Boolean(e.token), NumericLiteral: Number(e.token), StringLiteral: e.token, Identifier: e.token }[s] };
          }return "CallExpression" === e.name ? { type: "CallExpression", children: [visit(t[0]), visit(t[1])] } : { type: t.filter(function (e) {
              return e.token && e.token.Punctuator;
            })[0].name, children: t.filter(function (e) {
              return !e.token || !e.token.Punctuator;
            }).map(function (e) {
              return visit(e);
            }) };
        }function parse(e) {
          var n = new JavaScriptExpression(e);return JSON.stringify(visit(n.tree), null);
        }module.exports = { parse: parse };
      }]);
    });
  }]);
});

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tty-tab-page"],
    style: {
      height: (_vm.tabPageHeight) + 'px',
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('scroller', {
    ref: "tab-title-list",
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height) + 'px',
      paddingLeft: _vm.tabStyles.leftOffset + 'px'
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal",
      "dataSpm": _vm.spmC
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'tty-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && v.icon && !_vm.titleUseSlot) ? _c('t-icon', {
      attrs: {
        "name": _vm.currentPage == index ? v.activeIcon : v.icon,
        "size": "big",
        "iconStyle": {
          fontSize: _vm.tabStyles.iconFontSize + 'px',
          marginBottom: _vm.tabStyles.iconFontMarginBottom + 'px',
          color: _vm.currentPage == index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
        }
      }
    }) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage === index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage === index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (_vm.tabStyles.hasActiveBottom && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  })), _c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"],
    style: {
      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
    },
    on: {
      "horizontalpan": _vm.startHandler
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(91)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\wxc-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f68e9964"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-item": {
    "width": "750",
    "height": "246",
    "flexDirection": "row"
  },
  "item-image": {
    "width": "198",
    "height": "198",
    "marginTop": "24",
    "marginLeft": "24",
    "marginBottom": "24",
    "marginRight": "24"
  },
  "image-desc": {
    "position": "absolute",
    "left": "24",
    "top": "186",
    "width": "198",
    "height": "36",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "image-text": {
    "fontSize": "24",
    "color": "#ffffff"
  },
  "item-content": {
    "flex": 1,
    "borderBottomWidth": "1",
    "borderBottomColor": "#e0e0e0",
    "borderBottomStyle": "solid",
    "justifyContent": "space-between",
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "18"
  },
  "item-text": {
    "fontSize": "28",
    "lineHeight": "40",
    "color": "#333333",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "item-price": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "height": "36"
  },
  "price-num": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "yen": {
    "color": "#FF5E00",
    "fontSize": "24",
    "lineHeight": "26",
    "marginRight": "2",
    "marginTop": "4"
  },
  "price": {
    "color": "#FF5E00",
    "fontSize": "36",
    "lineHeight": "40"
  },
  "postfix": {
    "fontSize": "24",
    "lineHeight": "28",
    "color": "#A5A5A5",
    "marginTop": "6",
    "marginLeft": "2"
  },
  "category-tag": {
    "paddingRight": "16",
    "paddingLeft": "12",
    "height": "36",
    "justifyContent": "center",
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": "24",
    "backgroundColor": "#FFC900",
    "position": "absolute",
    "top": "24",
    "left": "24"
  },
  "tag-text": {
    "color": "#3d3d3d",
    "fontSize": "22",
    "lineHeight": "36"
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcSpecialRichText = __webpack_require__(68);

var _wxcSpecialRichText2 = _interopRequireDefault(_wxcSpecialRichText);

var _wxcRichText = __webpack_require__(79);

var _wxcRichText2 = _interopRequireDefault(_wxcRichText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const expressionBinding = weex.requireModule('expressionBinding')

exports.default = {
  components: {
    WxcRichText: _wxcRichText2.default,
    WxcSpecialRichText: _wxcSpecialRichText2.default
  },
  props: {
    title: {
      type: [String, Array],
      default: ''
    },
    imageText: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    desc: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    priceDesc: {
      type: [String, Array],
      default: ''
    },
    price: {
      type: [String, Number],
      default: 0
    },
    tags: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    postfix: {
      type: Boolean,
      default: false
    },
    categoryTag: {
      type: String,
      default: ''
    },
    extId: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      yenSymbol: '\xA5'
    };
  },
  computed: {
    isTitleString: function isTitleString() {
      return _utils2.default.isString(this.title);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(69);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(78)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a14a914"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-special-rich-text": {
    "position": "relative"
  },
  "tag-div": {
    "position": "absolute",
    "top": 0,
    "color": "#A5A5A5",
    "fontSize": "24",
    "lineHeight": "30"
  },
  "wxc-text": {
    "fontSize": "24",
    "lineHeight": "34",
    "color": "#3d3d3d",
    "lines": 2,
    "textOverflow": "ellipsis",
    "overflow": "hidden"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "margin-text": {
    "marginRight": "6"
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcRichTextText = __webpack_require__(5);

var _wxcRichTextText2 = _interopRequireDefault(_wxcRichTextText);

var _wxcRichTextTag = __webpack_require__(13);

var _wxcRichTextTag2 = _interopRequireDefault(_wxcRichTextTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _weex$config$env = weex.config.env,
    appName = _weex$config$env.appName,
    osName = _weex$config$env.osName,
    deviceWidth = _weex$config$env.deviceWidth;

var needHack = (_utils2.default.env.isAlipay() || appName === 'UC' || appName === 'TUnionSDK') && osName !== 'iOS' || _utils2.default.env.isAndroid();
var isPad = osName === 'iOS' && deviceWidth > 1300;

exports.default = {
  components: {
    WxcRichTextText: _wxcRichTextText2.default,
    WxcRichTextTag: _wxcRichTextTag2.default
  },
  props: {
    configList: {
      type: [Array, String],
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      iconWidth: 90,
      iconHeight: 24,
      needHack: needHack
    };
  },
  computed: {
    newList: function newList() {
      var configList = this.configList,
          iconHeight = this.iconHeight,
          iconWidth = this.iconWidth,
          needHack = this.needHack;

      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
        var r1 = configList[0];
        var r2 = configList[1];
        var iconStyle = r1.style;
        var textStyle = r2.style;
        var style = {};
        var fontSize = 24;
        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 24;

        if (textStyle && textStyle.fontSize && !isNaN(textStyle.fontSize)) {
          fontSize = textStyle.fontSize;
          style = {
            fontSize: textStyle.fontSize + 'px',
            lineHeight: Number(textStyle.fontSize * 1.4).toFixed(2) + 'px'
          };
        }

        if (textStyle && textStyle.color) {
          style = _extends({}, style, {
            color: textStyle.color
          });
        }

        if (textStyle && textStyle.lines) {
          style = _extends({}, style, {
            lines: textStyle.lines
          });
        }

        if (r1.type === 'icon' && iconStyle && iconStyle.height && !iconStyle.width) {
          tagWidth = parseInt(iconWidth * (iconStyle.height / iconHeight));
          r1 = _extends({}, r1, {
            style: {
              width: tagWidth + 'px',
              height: iconStyle.height + 'px'
            }
          });
        }

        if (r1.type === 'icon' && !(iconStyle && iconStyle.height)) {
          r1 = _extends({}, r1, {
            style: {
              width: iconWidth + 'px',
              height: iconHeight + 'px'
            }
          });
        }

        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
          r1 = _extends({}, r1, {
            style: _extends({}, iconStyle, { width: null })
          });
        }

        var blank = '';
        var num = Math.ceil(tagWidth / fontSize) + 1;

        if (r1.type === 'tag' && r1.value) {
          num = this.countString(r1.value);
        }

        var tagMoreBlank = (!isPad && num < 7 ? '  ' : '') + (needHack ? '  ' : '') + (isPad && num < 3 ? '    ' : '');
        var iconMoreBlank = num > 2 ? needHack ? '     ' : '   ' : ' ';
        if (r1.type === 'tag') {
          blank = new Array(num).join('  ') + tagMoreBlank;
          if (!isPad && num > 6 && !needHack) {
            blank = blank.substring(parseInt(num / 2));
          }
        } else if (r1.type === 'icon') {
          blank = new Array(num).join('  ') + iconMoreBlank;
        }
        blank += isPad && num > 2 ? '     ' : '';
        var newValue = r2.value ? blank + (' ' + r2.value) : '';

        r2 = _extends({}, r2, {
          style: style,
          value: newValue
        });

        return [r1, r2];
      } else {
        return configList;
      }
    },
    top: function top() {
      var configList = this.configList,
          needHack = this.needHack;

      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
        var iconStyle = configList[0].style;
        var textStyle = configList[1].style;
        var fontSize = 24;
        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 26;
        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
        }
        var d = needHack ? 1.1 : 1.4;
        return Math.ceil((fontSize * d - tagHeight) / 2);
      } else {
        return 0;
      }
    }
  },
  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var _e$size = e.size,
            naturalWidth = _e$size.naturalWidth,
            naturalHeight = _e$size.naturalHeight;

        this.iconWidth = naturalWidth;
        this.iconHeight = naturalHeight;
      } else {
        var configList = this.configList;

        if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
          var style = configList[0].style;

          if (style && style.height && style.width) {
            this.iconWidth = style.width;
            this.iconHeight = style.height;
          }
        }
      }
    },
    countString: function countString(str) {
      var chineseRegex = /[^ -~]/g;
      return str.replace(chineseRegex, '**').length;
    }
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-text": {
    "fontSize": "24",
    "color": "#3d3d3d"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "margin-text": {
    "marginRight": "6"
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    textValue: {
      type: String,
      default: ''
    },
    textTheme: {
      type: String,
      default: 'gray'
    },
    textStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    themeStyle: function themeStyle() {
      var style = {};
      var textStyle = this.textStyle;
      if (textStyle && textStyle.fontSize) {
        style = _extends({}, style, {
          fontSize: textStyle.fontSize + 'px',
          height: textStyle.fontSize * 1.2 + 'px'
        });
      }
      if (textStyle && textStyle.color) {
        style = _extends({}, style, {
          color: textStyle.color
        });
      }
      return style;
    }
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: ['wxc-text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
    style: _vm.themeStyle
  }, [_vm._v(_vm._s(_vm.textValue))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tag": {
    "borderColor": "#3d3d3d",
    "borderWidth": "2",
    "borderRadius": "4",
    "marginRight": "6",
    "backgroundColor": "rgba(0,0,0,0)",
    "paddingLeft": "6",
    "paddingRight": "6",
    "height": "26",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tag-text": {
    "fontSize": "20",
    "color": "#3d3d3d"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "border-black": {
    "borderColor": "#A5A5A5"
  },
  "border-yellow": {
    "borderColor": "#EE9900"
  },
  "border-blue": {
    "borderColor": "#30A0FF"
  },
  "border-gray": {
    "borderColor": "#A5A5A5"
  },
  "border-red": {
    "borderColor": "#FF5000"
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    tagValue: {
      type: [String, Number],
      default: ''
    },
    tagTheme: {
      type: String,
      default: 'blue'
    },
    tagStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    newTheme: function newTheme() {
      var tagStyle = this.tagStyle;
      var tagValue = this.tagValue;
      var divStyle = {};
      var textStyle = {};
      if (tagStyle && tagStyle.fontSize) {
        textStyle = _extends({}, textStyle, {
          fontSize: tagStyle.fontSize + 'px'
        });
      }
      if (tagStyle && tagStyle.color) {
        textStyle = _extends({}, textStyle, {
          color: tagStyle.color
        });
      }

      if (tagStyle && tagStyle.borderColor) {
        divStyle = _extends({}, divStyle, {
          borderColor: tagStyle.borderColor
        });
      }

      if (tagStyle && tagStyle.borderWidth) {
        divStyle = _extends({}, divStyle, {
          borderWidth: tagStyle.borderWidth + 'px'
        });
      }

      if (tagStyle && tagStyle.borderRadius) {
        divStyle = _extends({}, divStyle, {
          borderRadius: tagStyle.borderRadius + 'px'
        });
      }

      if (tagStyle && tagStyle.backgroundColor) {
        divStyle = _extends({}, divStyle, {
          backgroundColor: tagStyle.backgroundColor
        });
      }

      if (tagStyle && tagStyle.height) {
        divStyle = _extends({}, divStyle, {
          height: tagStyle.height + 'px'
        });
      }

      if (tagStyle && tagStyle.width) {
        divStyle = _extends({}, divStyle, {
          width: tagStyle.width + 'px'
        });
      }

      if (tagValue && tagValue.length === 1) {
        divStyle = _extends({}, divStyle, {
          paddingLeft: 0,
          paddingRight: 0
        });
      }

      return {
        divStyle: divStyle,
        textStyle: textStyle
      };
    }
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-tag', 'border-' + _vm.tagTheme],
    style: _vm.newTheme.divStyle
  }, [_c('text', {
    class: ['tag-text', _vm.tagTheme],
    style: _vm.newTheme.textStyle
  }, [_vm._v(_vm._s(_vm.tagValue))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-special-rich-text"]
  }, [_c('div', {
    staticClass: ["tag-div"],
    style: {
      top: _vm.top + 'px'
    }
  }, [(_vm.newList[0] && _vm.newList[0].type === 'icon' && _vm.newList[0].src) ? _c('image', {
    staticClass: ["wxc-image"],
    style: _vm.newList[0].style,
    attrs: {
      "src": _vm.newList[0].src,
      "quality": "original",
      "original": true,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.newList[0] && _vm.newList[0].type === 'tag' && _vm.newList[0].value) ? _c('wxc-rich-text-tag', {
    attrs: {
      "tagValue": _vm.newList[0].value,
      "tagTheme": _vm.newList[0].theme,
      "tagStyle": _vm.newList[0].style
    }
  }) : _vm._e()], 1), (_vm.newList[0] && _vm.newList[0].type === 'text' && _vm.newList[0].value) ? _c('text', {
    class: ['wxc-text', _vm.newList[0].theme],
    style: _vm.newList[0].style
  }, [_vm._v(_vm._s(_vm.newList[0].value))]) : _vm._e(), (_vm.newList[1] && _vm.newList[1].value) ? _c('text', {
    class: ['wxc-text', _vm.newList[1].theme],
    style: _vm.newList[1].style
  }, [_vm._v(_vm._s(_vm.newList[1].value))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(80);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(90)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-51a39eec"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-rich-text": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "default-text": {
    "color": "#A5A5A5",
    "fontSize": "24",
    "lineHeight": "30"
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    WxcRichTextText: __webpack_require__(5),
    WxcRichTextLink: __webpack_require__(83),
    WxcRichTextIcon: __webpack_require__(86),
    WxcRichTextTag: __webpack_require__(13)
  },
  props: {
    configList: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    isNotEmptyArray: function isNotEmptyArray() {
      return _utils2.default.isNonEmptyArray(this.configList);
    },
    isString: function isString() {
      return _utils2.default.isString(this.configList);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcRichTextText = __webpack_require__(5);

var _wxcRichTextText2 = _interopRequireDefault(_wxcRichTextText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcRichTextText: _wxcRichTextText2.default },
  props: {
    linkValue: {
      type: [String, Number],
      default: ''
    },
    hasTextMargin: {
      type: Boolean,
      default: true
    },
    linkHref: {
      type: String,
      default: ''
    },
    linkTheme: {
      type: String,
      default: 'black'
    },
    linkStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      defObj: {}
    };
  },
  methods: {
    onLinkClick: function onLinkClick(e) {
      var self = this;
      _utils2.default.goToH5Page(self.linkHref);
      self.$emit('wxcRichTextLinkClick', { element: e, href: self.linkHref });
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "click": _vm.onLinkClick
    }
  }, [_c('wxc-rich-text-text', {
    attrs: {
      "textValue": _vm.linkValue,
      "hasTextMargin": _vm.hasTextMargin,
      "textStyle": _vm.linkStyle ? _vm.linkStyle : _vm.defObj,
      "textTheme": _vm.linkTheme ? _vm.linkTheme : 'black'
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(89)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5d0a782a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-image": {
    "width": "90",
    "height": "24",
    "marginRight": "6"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    iconSrc: String,
    iconStyle: {
      type: Object,
      default: function _default() {
        return {
          height: 24
        };
      }
    }
  },
  data: function data() {
    return {
      width: 90
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      var width = this.width,
          iconStyle = this.iconStyle;

      if (iconStyle && iconStyle.width && iconStyle.height) {
        return {
          width: iconStyle.width + "px",
          height: iconStyle.height + "px"
        };
      } else {
        return {
          width: width + "px",
          height: iconStyle.height + "px"
        };
      }
    }
  },
  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.width = width * (this.iconStyle.height / height);
      }
    }
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    staticClass: ["wxc-image"],
    style: {
      width: _vm.computedStyle.width,
      height: _vm.computedStyle.height
    },
    attrs: {
      "src": _vm.iconSrc,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
    staticClass: ["wxc-rich-text"]
  }, _vm._l((_vm.configList), function(v) {
    return _c('div', [(v.type == 'text' && v.value) ? _c('wxc-rich-text-text', {
      attrs: {
        "textValue": v.value,
        "textStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin,
        "textTheme": v.theme
      }
    }) : _vm._e(), (v.type == 'link' && v.href && v.value) ? _c('wxc-rich-text-link', {
      attrs: {
        "linkValue": v.value,
        "linkHref": v.href,
        "linkStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin,
        "linkTheme": v.theme
      }
    }) : _vm._e(), (v.type == 'icon' && v.src) ? _c('wxc-rich-text-icon', {
      attrs: {
        "iconSrc": v.src,
        "iconStyle": v.style
      }
    }) : _vm._e(), (v.type == 'tag' && v.value) ? _c('wxc-rich-text-tag', {
      attrs: {
        "tagValue": v.value,
        "tagTheme": v.theme,
        "tagStyle": v.style
      }
    }) : _vm._e()], 1)
  })) : _vm._e(), (_vm.isString) ? _c('text', {
    staticClass: ["default-text"]
  }, [_vm._v(_vm._s(_vm.configList))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-item"]
  }, [_c('image', {
    staticClass: ["item-image"],
    attrs: {
      "src": _vm.image,
      "resize": "cover"
    }
  }), (_vm.categoryTag) ? _c('div', {
    staticClass: ["category-tag"]
  }, [_c('text', {
    staticClass: ["tag-text"]
  }, [_vm._v(_vm._s(_vm.categoryTag))])]) : _vm._e(), (_vm.imageText) ? _c('div', {
    staticClass: ["image-desc"]
  }, [_c('text', {
    staticClass: ["image-text"]
  }, [_vm._v(_vm._s(_vm.imageText))])]) : _vm._e(), _c('div', {
    staticClass: ["item-content"]
  }, [(_vm.isTitleString) ? _c('text', {
    staticClass: ["item-text"]
  }, [_vm._v(_vm._s(_vm.title))]) : _c('wxc-special-rich-text', {
    attrs: {
      "configList": _vm.title
    }
  }), _c('wxc-rich-text', {
    attrs: {
      "configList": _vm.desc
    }
  }), _c('wxc-rich-text', {
    attrs: {
      "configList": _vm.tags
    }
  }), _c('div', {
    staticClass: ["item-price"]
  }, [_c('wxc-rich-text', {
    attrs: {
      "configList": _vm.priceDesc
    }
  }), _c('div', {
    staticClass: ["price-num"]
  }, [_c('text', {
    staticClass: ["yen"]
  }, [_vm._v(_vm._s(_vm.yenSymbol))]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s(_vm.price))]), (_vm.postfix) ? _c('text', {
    staticClass: ["postfix"]
  }, [_vm._v("起")]) : _vm._e()])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["page"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('t-minibar', {
    attrs: {
      "useDefaultReturn": false
    },
    on: {
      "minibarLeftButtonClicked": _vm.minibarLeftButtonClick
    }
  }, [_c('div', {
    staticClass: ["header-left"],
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }, [_c('text', {
    staticClass: ["location-text"]
  }, [_vm._v(_vm._s(_vm.currentCity))]), (_vm.currentCity) ? _c('t-icon', {
    attrs: {
      "name": "arrow_down"
    }
  }) : _vm._e()], 1), _c('image', {
    staticClass: ["header-middle"],
    attrs: {
      "slot": "middle",
      "src": _vm.ttyLogoName
    },
    slot: "middle"
  })])], 1), _c('div', {
    staticClass: ["content"]
  }, [_c('t-tab-page', {
    ref: "tty-tab-page",
    attrs: {
      "tabTitles": _vm.tabPageTitles,
      "tabStyles": _vm.tabPageStyles,
      "titleType": "icon",
      "needSlider": _vm.needSlider,
      "isTabView": _vm.isTabView,
      "tabPageHeight": _vm.tabPageHeight
    },
    on: {
      "tabPageCurrentTabSelected": _vm.wxcTabPageCurrentTabSelected
    }
  }, _vm._l((_vm.tabPageList), function(v, index) {
    return _c('list', {
      key: index,
      staticClass: ["tab-page-item-container"],
      style: {
        height: (_vm.tabPageHeight - _vm.tabPageStyles.height) + 'px'
      }
    }, [_c('cell', {
      staticClass: ["border-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }), _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('slider', {
      staticClass: ["slider"],
      attrs: {
        "interval": "3000",
        "autoPlay": true,
        "showIndicators": true
      }
    }, _vm._l((_vm.imageList), function(img, index) {
      return _c('div', {
        key: index,
        staticClass: ["frame"]
      }, [_c('image', {
        staticClass: ["slider-image"],
        attrs: {
          "resize": "cover",
          "src": img.src
        }
      })])
    }))]), _vm._l((v), function(demo, key) {
      return _c('cell', {
        key: key,
        staticClass: ["cell"],
        appendAsTree: true,
        attrs: {
          "accessible": true,
          "ariaLabel": "卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元",
          "append": "tree"
        }
      }, [_c('wxc-pan-item', {
        attrs: {
          "url": "https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
        },
        on: {
          "wxcPanItemPan": _vm.wxcPanItemPan
        }
      }, [_c('wxc-item', {
        attrs: {
          "image": "https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg",
          "imageText": _vm.tabPageTitles[index].title,
          "title": "卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游",
          "desc": _vm.desc,
          "tags": _vm.tags,
          "price": "666",
          "priceDesc": "月售58笔｜999+条评论"
        }
      })], 1)], 1)
    })], 2)
  })), _c('image', {
    staticClass: ["question"],
    attrs: {
      "src": _vm.questionBg
    },
    on: {
      "click": _vm.questionClicked
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\video\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03133bad"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "webview": {
    "width": "750"
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

exports.default = {
  name: 'Video',
  data: function data() {
    return {
      isShow: true,
      webHeight: 1334
    };
  },
  created: function created() {
    var _this = this;

    _index.localStore.get('contentHeight', function (data) {
      _this.webHeight = data;
    });
  },

  methods: {
    onPageStart: function onPageStart(event) {
      // page start load
    },
    onPageFinish: function onPageFinish(event) {
      // page finish load
    },
    onError: function onError(event) {
      // page load error
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('web', {
    staticClass: ["webview"],
    style: {
      height: _vm.webHeight
    },
    attrs: {
      "src": "https://cn.vuejs.org"
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish,
      "error": _vm.onError
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(99)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\find\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-64b13423"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "webview": {
    "width": "750"
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

exports.default = {
  name: 'Find',
  data: function data() {
    return {
      isShow: true,
      webHeight: 1334
    };
  },
  created: function created() {
    var _this = this;

    _index.localStore.get('contentHeight', function (data) {
      _this.webHeight = data;
    });
  },

  methods: {
    onPageStart: function onPageStart(event) {
      // page start load
    },
    onPageFinish: function onPageFinish(event) {
      // page finish load
    },
    onError: function onError(event) {
      // page load error
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('web', {
    staticClass: ["webview"],
    style: {
      height: _vm.webHeight
    },
    attrs: {
      "src": "http://shop.vivo.com.cn/wap"
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish,
      "error": _vm.onError
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(102)
)

/* script */
__vue_exports__ = __webpack_require__(103)

/* template */
var __vue_template__ = __webpack_require__(109)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7f218f56"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "user-info-wrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750",
    "height": "360",
    "marginBottom": "106",
    "backgroundImage": "linear-gradient(to right, #00A0E6, #1C69D3)"
  },
  "avatar": {
    "width": "136",
    "height": "136",
    "borderRadius": "68",
    "marginLeft": "24",
    "marginRight": "24",
    "backgroundColor": "#CCCCCC"
  },
  "user-name-signature": {
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "18",
    "paddingBottom": "18"
  },
  "user-name": {
    "color": "#ffffff",
    "fontSize": "34",
    "lineHeight": "42"
  },
  "user-signature": {
    "color": "#ffffff",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "arrow-icon-wrap": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "user-data-wrap": {
    "position": "absolute",
    "top": "272",
    "left": "24",
    "width": "702",
    "height": "170",
    "borderRadius": "20",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "user-data-item": {
    "flex": 1,
    "height": "170",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "user-data-num": {
    "fontSize": "34",
    "lineHeight": "42",
    "color": "#333333",
    "marginBottom": "8"
  },
  "user-data-title": {
    "fontSize": "30",
    "lineHeight": "40",
    "color": "#333333"
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cell = __webpack_require__(104);

var _cell2 = _interopRequireDefault(_cell);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MyIndex',
  components: {
    TCell: _cell2.default,
    TIcon: _icon2.default
  },
  data: function data() {
    return {
      contentStyle: {
        height: 0
      },
      userInfo: {
        avatar: 'https://ttyun-image.oss-cn-shenzhen.aliyuncs.com/ttyunapp/15324807923759870.jpg',
        name: '立即登录',
        signature: '签名是一种态度，点击可编辑',
        data: [{
          title: '发布',
          num: 0,
          routePath: '/my/my-publish'
        }, {
          title: '关注',
          num: 0,
          routePath: '/my/my-focus'
        }, {
          title: '粉丝',
          num: 0,
          routePath: '/my/my-fans'
        }, {
          title: '消息',
          num: 0,
          routePath: '/my/my-message'
        }]
      },
      pageEntrys: [{
        iconStyle: {
          color: '#1C69D3'
        },
        iconName: 'apply_auth',
        entryName: '申请认证',
        routePath: '/my/apply-auth',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#00D16F'
        },
        iconName: 'crop',
        entryName: '关注作物',
        routePath: '/my/focus-crop/index',
        hasMargin: true
      }, {
        iconStyle: {
          color: '#1C69D3'
        },
        iconName: 'logo',
        entryName: '检测新版本',
        extraContent: '1.0.1',
        hasMargin: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '结果页面演示',
        routePath: '/result',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '按钮演示',
        routePath: '/my/button-demo',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '对话框演示',
        routePath: '/my/dialog-demo',
        hasMargin: true
      }]
    };
  },
  created: function created() {
    var _this = this;

    _index.localStore.get('contentHeight', function (data) {
      _this.contentStyle = {
        height: data
      };
    });
  },
  destroyed: function destroyed() {
    (0, _index.setStatusBarStyle)();
  },

  methods: {
    openUserInfo: function openUserInfo() {},
    openPage: function openPage(item) {
      if (item.routePath) {
        this.$router.push({
          path: item.routePath
        });
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2bd065c8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "cell-wrap": {
    "backgroundColor": "#FFFFFF"
  },
  "cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#DDDDDD",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#DDDDDD",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "16"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "34",
    "lineHeight": "42",
    "marginLeft": "16",
    "marginRight": "16"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "30",
    "lineHeight": "40",
    "color": "#999999",
    "marginRight": "16"
  },
  "bottom-line": {
    "width": "726",
    "height": "1",
    "marginLeft": "24",
    "backgroundColor": "#dddddd"
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Cell',
  components: {
    TIcon: _icon2.default
  },
  props: {
    hasBottomLine: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    marginHeight: {
      type: [Number, String],
      default: 20
    },
    hasBottomBorder: {
      type: Boolean,
      default: false
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cellWrapStyle: function cellWrapStyle() {
      var style = {};
      if (this.hasMargin) {
        style.marginBottom = this.marginHeight + 'px';
      }
      return style;
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('cellClicked', {
        e: e
      });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-wrap"],
    style: _vm.cellWrapStyle
  }, [_c('div', {
    class: ['cell', _vm.hasTopBorder && 'cell-top-border', !_vm.hasBottomLine && _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [(_vm.title) ? _c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('t-icon', {
    attrs: {
      "name": "more",
      "iconStyle": {
        color: '#CCCCCC'
      },
      "ariaHidden": true
    }
  }) : _vm._e()], 2), (_vm.hasBottomLine) ? _c('div', {
    staticClass: ["bottom-line"]
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    style: _vm.contentStyle
  }, [_c('div', {
    staticClass: ["user-info-wrap"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": _vm.userInfo.avatar,
      "resize": "cover"
    },
    on: {
      "click": _vm.openUserInfo
    }
  }), _c('div', {
    staticClass: ["user-name-signature"],
    on: {
      "click": _vm.openUserInfo
    }
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v(_vm._s(_vm.userInfo.name))]), _c('text', {
    staticClass: ["user-signature"]
  }, [_vm._v(_vm._s(_vm.userInfo.signature))])]), _c('div', {
    staticClass: ["arrow-icon-wrap"],
    on: {
      "click": _vm.openUserInfo
    }
  }, [_c('t-icon', {
    attrs: {
      "iconStyle": {
        color: '#FFFFFF'
      },
      "name": "more"
    }
  })], 1)]), _c('div', {
    staticClass: ["user-data-wrap"]
  }, _vm._l((_vm.userInfo.data), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["user-data-item", "hover-shadow"],
      on: {
        "click": function($event) {
          _vm.openPage(item)
        }
      }
    }, [_c('text', {
      staticClass: ["user-data-num"]
    }, [_vm._v(_vm._s(item.num))]), _c('text', {
      staticClass: ["user-data-title"]
    }, [_vm._v(_vm._s(item.title))])])
  })), _c('div', {}, _vm._l((_vm.pageEntrys), function(item, index) {
    return _c('t-cell', {
      key: index,
      attrs: {
        "title": item.entryName,
        "extraContent": item.extraContent,
        "hasArrow": true,
        "hasBottomLine": item.hasBottomLine,
        "hasMargin": item.hasMargin
      },
      on: {
        "cellClicked": function($event) {
          _vm.openPage(item)
        }
      }
    }, [_c('t-icon', {
      attrs: {
        "slot": "label",
        "iconStyle": item.iconStyle,
        "name": item.iconName
      },
      slot: "label"
    })], 1)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-tab-bar', {
    ref: "tty-tab-bar",
    attrs: {
      "tabTitles": _vm.tabBarTitles,
      "tabStyles": _vm.tabBarStyles,
      "titleType": "icon"
    },
    on: {
      "tabBarCurrentTabSelected": _vm.tabBarCurrentTabSelected
    }
  }, _vm._l((_vm.tabPageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["bar-bar-item-container"],
      style: _vm.contentStyle
    }, [_c(item, {
      tag: "div"
    })])
  })), _c('t-overlay', {
    attrs: {
      "show": _vm.showMiddle,
      "backgroundColor": "rgba(255, 255, 255, 0.96)"
    }
  }, [_c('div', {
    staticClass: ["post-wrap"]
  }, [_c('div', {
    staticClass: ["post-items-wrap"]
  }, [_c('div', {
    staticClass: ["post-item", "hover-shadow"],
    on: {
      "click": function($event) {
        _vm.openPage('post')
      }
    }
  }, [_c('div', {
    staticClass: ["icon-wrap", "icon-post"]
  }, [_c('t-icon', {
    style: {
      color: '#FFFFFF'
    },
    attrs: {
      "name": "post",
      "size": "medium"
    }
  })], 1), _c('text', {
    staticClass: ["post-item-text"]
  }, [_vm._v("发帖")])]), _c('div', {
    staticClass: ["post-item", "hover-shadow"],
    on: {
      "click": function($event) {
        _vm.openPage('question')
      }
    }
  }, [_c('div', {
    staticClass: ["icon-wrap", "icon-question"]
  }, [_c('t-icon', {
    style: {
      color: '#FFFFFF'
    },
    attrs: {
      "name": "question",
      "size": "medium"
    }
  })], 1), _c('text', {
    staticClass: ["post-item-text"]
  }, [_vm._v("提问")])])]), _c('div', {
    staticClass: ["post-footer"]
  }, [_c('div', {
    staticClass: ["icon-wrap", "hover-shadow"],
    on: {
      "click": _vm.closeOverlay
    }
  }, [_c('t-icon', {
    attrs: {
      "name": "close",
      "size": "medium"
    }
  })], 1)])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(112)
)

/* script */
__vue_exports__ = __webpack_require__(113)

/* template */
var __vue_template__ = __webpack_require__(120)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\result.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-431bcb5e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "result": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "paddingTop": "160",
    "backgroundColor": "#f2f2f2"
  },
  "result-image": {
    "width": "280",
    "height": "280"
  },
  "result-content": {
    "marginTop": "16",
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": "34",
    "color": "#333333",
    "height": "42",
    "lineHeight": "42",
    "textAlign": "center"
  },
  "content-desc": {
    "marginTop": "16",
    "fontSize": "28",
    "color": "#999999",
    "height": "36",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "result-button": {
    "marginTop": "48"
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _resultTypes = __webpack_require__(114);

var _resultTypes2 = _interopRequireDefault(_resultTypes);

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Result',
  components: {
    TMinibar: _minibar2.default,
    TButton: _button2.default
  },
  data: function data() {
    return {
      type: 'offine',
      customSet: {}
    };
  },
  computed: {
    resultType: function resultType() {
      var type = this.type,
          customSet = this.customSet;

      var allTypes = _utils2.default.isEmptyObject(customSet) ? _resultTypes2.default : _utils2.default.mergeDeep(_resultTypes2.default, customSet);
      var types = allTypes['offine'];
      if (Object.keys(allTypes).indexOf(type) > -1) {
        types = allTypes[type];
      }
      return types;
    }
  },
  created: function created() {
    this.type = this.$route.query.type;
  },

  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // web上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    minibarRightButtonClicked: function minibarRightButtonClicked() {
      this.resultType.rightButtonHandle && this.resultType.rightButtonHandle();
    },
    buttonClicked: function buttonClicked() {
      this.resultType.buttonHandle && this.resultType.buttonHandle();
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imageBase = __webpack_require__(6);

exports.default = {
  post: {
    pic: _imageBase.resultPost,
    content: '抱歉出错了，我们正在全力解决中',
    desc: '',
    buttonText: '再试一次',
    title: '出错啦'
  },
  comment: {
    pic: _imageBase.resultComment,
    content: '主人，这里什么都没有找到',
    desc: '',
    buttonText: '再试一次',
    title: '暂无商品'
  },
  question: {
    pic: _imageBase.resultQuestion,
    content: '哎呀，没有网络了......',
    desc: '',
    buttonText: '刷新一下',
    title: '无网络'
  },
  attention: {
    pic: _imageBase.resultAttention,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  fans: {
    pic: _imageBase.resultFans,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  sysMsg: {
    pic: _imageBase.resultSysMsg,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  crop: {
    pic: _imageBase.resultCrop,
    content: '暂无关注的作物',
    title: '关注作物',
    rightText: '添加作物',
    rightButtonHandle: function rightButtonHandle() {
      undefined.$router.back();
    }
  },
  offine: {
    pic: _imageBase.resultOffline,
    content: '网路竟然崩溃了',
    desc: '别紧张，试试看刷新页面~',
    buttonText: '刷新',
    buttonType: 'white',
    buttonSize: 'small',
    buttonTextStyle: { color: '#333333' },
    buttonHandle: function buttonHandle() {
      undefined.$router.back();
    },
    title: '无网络'
  },
  applyFail: {
    pic: _imageBase.resultApplyFail,
    content: '\u60A8\u7684\u4FE1\u606F\u9A8C\u8BC1\u4E0D\u901A\u8FC7\n              \u56E0\u4E3AXXX\u4E0D\u901A\u8FC7',
    buttonText: '重新申请',
    buttonType: 'blue',
    buttonSize: 'medium',
    buttonStyle: { height: '96px', borderRadius: '48px' },
    buttonHandle: function buttonHandle() {
      undefined.$router.back();
    },
    title: '认证申请'
  }
}; /**
    * CopyRight (C) 2017-2022 TTYun Group Holding Limited.
    * Created by Tw93 on 2018/08/10.
    */

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(119)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63ddecd0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1,
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, .1) inset"
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "34",
    "lineHeight": "42",
    "color": "#ffffff"
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//

var _type = __webpack_require__(118);

exports.default = {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'medium'
    },
    type: {
      type: String,
      default: 'blue'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], _type.BUTTON_STYLE_MAP[size], btnStyle);

      var disableStyle = {
        backgroundColor: '#CCCCCC'
      };
      if (type === 'blue') {
        disableStyle.backgroundImage = '';
      }

      return disabled ? _extends({}, mrBtnStyle, disableStyle) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, {
        color: '#FFFFFF'
      }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('buttonClicked', {
        e: e,
        type: type,
        disabled: disabled
      });
    }
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF'
  },
  blue: {
    backgroundImage: 'linear-gradient(to right,#00A0E6,#1C69D3)'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#00A0E6'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '750px',
    height: '96px'
  },
  big: {
    width: '750px',
    height: '88px'
  },
  medium: {
    width: '654px',
    height: '88px',
    borderRadius: '44px'
  },
  small: {
    width: '168px',
    height: '48px',
    borderRadius: '24px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '34px'
  },
  big: {
    fontSize: '30px'
  },
  medium: {
    fontSize: '34px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": _vm.resultType.title,
      "rightText": _vm.resultType.rightText
    },
    on: {
      "minibarRightButtonClicked": _vm.minibarRightButtonClicked
    }
  }), _c('div', {
    staticClass: ["result"]
  }, [_c('image', {
    staticClass: ["result-image"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.resultType.pic
    }
  }), (_vm.resultType.content) ? _c('div', {
    staticClass: ["result-content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
    staticClass: ["content-desc"]
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.buttonText) ? _c('t-button', {
    staticClass: ["result-button"],
    attrs: {
      "text": _vm.resultType.buttonText,
      "type": _vm.resultType.buttonType,
      "size": _vm.resultType.buttonSize,
      "btnStyle": _vm.resultType.buttonStyle,
      "textStyle": _vm.resultType.buttonTextStyle
    },
    on: {
      "buttonClicked": _vm.buttonClicked
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(122)
)

/* script */
__vue_exports__ = __webpack_require__(123)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\post\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4330a24a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Post',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      rightTextColor: '#CCCCCC'
    };
  },
  methods: {
    publish: function publish() {}
  }
}; //
//
//
//
//
//

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "发帖",
      "rightText": "发布",
      "rightTextColor": _vm.rightTextColor
    },
    on: {
      "minibarRightButtonClicked": _vm.publish
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(126)
)

/* script */
__vue_exports__ = __webpack_require__(127)

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\question\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10c40fe0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Queston',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      rightTextColor: '#CCCCCC'
    };
  },
  methods: {
    publish: function publish() {}
  }
}; //
//
//
//
//
//

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "提问",
      "rightText": "发布",
      "rightTextColor": _vm.rightTextColor
    },
    on: {
      "minibarRightButtonClicked": _vm.publish
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(130)
)

/* script */
__vue_exports__ = __webpack_require__(131)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\question\\invite-expert.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7bde0ea8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'InviteExpert',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "邀请专家"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(134)
)

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(136)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\question\\select-crop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42496002"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SelectCrop',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "选择作物"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(138)
)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(140)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\login\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-211ec51b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Login',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//
//

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar'), _c('text', [_vm._v("登录页面")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(142)
)

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(144)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\login\\service-protocol.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f7655f7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ServiceProtocol',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "服务协议"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(146)
)

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(148)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\user-info\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0cec34ea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'UserInfo',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "个人信息"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(150)
)

/* script */
__vue_exports__ = __webpack_require__(151)

/* template */
var __vue_template__ = __webpack_require__(152)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\user-info\\edit-nickname.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-211d452e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EditNickName',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      rightTextColor: '#CCCCCC'
    };
  },
  methods: {
    save: function save() {
      this.$router.push({
        path: '/my/user-info/index'
      });
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "昵称",
      "rightText": "保存",
      "rightTextColor": _vm.rightTextColor
    },
    on: {
      "minibarRightButtonClicked": _vm.save
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(154)
)

/* script */
__vue_exports__ = __webpack_require__(155)

/* template */
var __vue_template__ = __webpack_require__(156)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\user-info\\edit-signature.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-73871b66"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'EditSignature',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      rightTextColor: '#CCCCCC'
    };
  },
  methods: {
    save: function save() {
      this.$router.push({
        path: '/my/user-info/index'
      });
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "个性签名",
      "rightText": "保存",
      "rightTextColor": _vm.rightTextColor
    },
    on: {
      "minibarRightButtonClicked": _vm.save
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(158)
)

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(160)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\my-publish.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7fac17cc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MyPublish',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "我的发布"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(162)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(164)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\my-focus.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a560023"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MyFocus',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "我的关注"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(166)
)

/* script */
__vue_exports__ = __webpack_require__(167)

/* template */
var __vue_template__ = __webpack_require__(168)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\my-fans.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-491fa345"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MyFans',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "我的粉丝"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(170)
)

/* script */
__vue_exports__ = __webpack_require__(171)

/* template */
var __vue_template__ = __webpack_require__(172)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\my-message.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9e7bc9dc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'MyMessage',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "我的消息"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(174)
)

/* script */
__vue_exports__ = __webpack_require__(175)

/* template */
var __vue_template__ = __webpack_require__(176)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\apply-auth.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c83b835a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
  name: 'ApplyAuth',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      webHeight: 1334
    };
  },
  mounted: function mounted() {
    var _this = this;

    var dom = weex.requireModule('dom');
    dom.getComponentRect(this.$refs.minibar, function (option) {
      if (option.result) {
        _this.webHeight = (0, _index.getPageHeight)() - option.size.height;
      }
    });
  },

  methods: {
    onPageStart: function onPageStart(event) {
      // page start load
    },
    onPageFinish: function onPageFinish(event) {
      // page finish load
    },
    onError: function onError(event) {
      // page load error
    }
  }
};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    ref: "minibar",
    attrs: {
      "title": "申请认证"
    }
  }), _c('web', {
    staticClass: ["webview"],
    style: {
      height: _vm.webHeight
    },
    attrs: {
      "src": "https://www.opposhop.cn/"
    },
    on: {
      "pagestart": _vm.onPageStart,
      "pagefinish": _vm.onPageFinish,
      "error": _vm.onError
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(178)
)

/* script */
__vue_exports__ = __webpack_require__(179)

/* template */
var __vue_template__ = __webpack_require__(180)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\focus-crop\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a9a2547"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'FocusCrop',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {
      rightTextColor: '#CCCCCC'
    };
  },
  methods: {
    addCrop: function addCrop() {
      this.$router.push({
        path: '/my/focus-crop/add-crop'
      });
    }
  }
}; //
//
//
//
//
//

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "关注作物",
      "rightText": "添加作物"
    },
    on: {
      "minibarRightButtonClicked": _vm.addCrop
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(182)
)

/* script */
__vue_exports__ = __webpack_require__(183)

/* template */
var __vue_template__ = __webpack_require__(184)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\focus-crop\\add-crop.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-760308d7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'AddCrop',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "选择擅长作物"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(186)
)

/* script */
__vue_exports__ = __webpack_require__(187)

/* template */
var __vue_template__ = __webpack_require__(188)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\version-info.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-477a49a2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'VersionInfo',
  components: {
    TMinibar: _minibar2.default
  },
  data: function data() {
    return {};
  },
  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "版本信息"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(190)
)

/* script */
__vue_exports__ = __webpack_require__(191)

/* template */
var __vue_template__ = __webpack_require__(196)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\button-demo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-80ed31bc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "scroller": {
    "flex": 1
  },
  "category": {
    "backgroundColor": "#ffc300",
    "width": "750",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "40"
  },
  "demo": {
    "alignItems": "center",
    "marginTop": "40",
    "marginBottom": "40"
  },
  "button-list": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "button-text": {
    "marginTop": "40",
    "marginLeft": "8",
    "marginBottom": "16"
  },
  "input": {
    "width": "500",
    "textAlign": "right",
    "fontSize": "28"
  },
  "size": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "button-size-text": {
    "marginLeft": "24",
    "marginBottom": "24",
    "marginTop": "40"
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(15);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = {
  name: 'ButtonDemo',
  components: {
    TMinibar: _minibar2.default,
    TButton: _button2.default,
    WxcCell: _wxcCell2.default
  },
  data: function data() {
    return {
      type: 'red',
      text: '按钮文字',
      width: '702px',
      height: '88px',
      disabled: false,
      backgroundColor: '#FF5000',
      borderRadius: '12px',
      fontSize: '34px',
      color: '#FFFFFF'
    };
  },
  computed: {
    btnStyle: function btnStyle() {
      var width = this.width,
          height = this.height,
          backgroundColor = this.backgroundColor,
          borderRadius = this.borderRadius;

      var customStyle = {};
      if (width) {
        customStyle.width = width;
      }
      if (height) {
        customStyle.height = height;
        customStyle.lineHeight = height;
      }
      if (backgroundColor) {
        customStyle.backgroundColor = backgroundColor;
      }
      if (borderRadius) {
        customStyle.borderRadius = borderRadius;
      }
      return customStyle;
    },
    textStyle: function textStyle() {
      var fontSize = this.fontSize,
          color = this.color;

      var customStyle = {};
      if (fontSize) {
        customStyle.fontSize = fontSize;
      }
      if (color) {
        customStyle.color = color;
      }
      return {
        fontSize: fontSize,
        color: color
      };
    }
  },
  methods: {
    buttonClicked: function buttonClicked(e) {
      var type = e.type,
          disabled = e.disabled;

      modal.toast({
        message: disabled ? 'disabled=' + disabled : 'type=' + type
      });
    }
  }
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(193)
)

/* script */
__vue_exports__ = __webpack_require__(194)

/* template */
var __vue_template__ = __webpack_require__(195)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63bed4b2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "按钮演示"
    }
  }), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["button-list"]
  }, [_c('text', {
    staticClass: ["category"]
  }, [_vm._v("类型样式")]), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("blue")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "blue"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("blue && disabled")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "blue",
      "disabled": true
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("white")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "white"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("white && disabled")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "white",
      "disabled": true
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("red")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "red"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("red && disabled")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "red",
      "disabled": true
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("yellow")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "yellow"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("yellow && disabled")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "type": "yellow",
      "disabled": true
    }
  }), _c('text', {
    staticClass: ["category"]
  }, [_vm._v("尺寸样式")]), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("full")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "size": "full",
      "type": "white"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("big")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "size": "big",
      "type": "white"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("medium")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "size": "medium"
    }
  }), _c('text', {
    staticClass: ["button-text"]
  }, [_vm._v("small")]), _c('t-button', {
    attrs: {
      "text": "确定",
      "size": "small",
      "type": "white"
    }
  })], 1), _c('text', {
    staticClass: ["category"]
  }, [_vm._v("自定义样式")]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "按钮的文字"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "文字",
      "value": _vm.text
    },
    on: {
      "input": function($event) {
        _vm.text = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "文字颜色"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "自定义文字颜色",
      "value": _vm.color
    },
    on: {
      "input": function($event) {
        _vm.color = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "是否禁用"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.disabled
    },
    on: {
      "change": function($event) {
        _vm.disabled = !_vm.disabled
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "按钮宽度"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "自定义样式实现, 默认宽度702px",
      "value": _vm.width
    },
    on: {
      "input": function($event) {
        _vm.width = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "按钮高度"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "自定义样式实现, 默认高度88px",
      "value": _vm.height
    },
    on: {
      "input": function($event) {
        _vm.height = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "背景颜色"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "自定义样式实现",
      "value": _vm.backgroundColor
    },
    on: {
      "input": function($event) {
        _vm.backgroundColor = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "边框圆角"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "自定义样式实现,默认12px",
      "value": _vm.borderRadius
    },
    on: {
      "input": function($event) {
        _vm.borderRadius = $event.value
      }
    },
    slot: "value"
  })]), _c('div', {
    staticClass: ["demo"]
  }, [_c('t-button', {
    attrs: {
      "text": _vm.text,
      "type": _vm.type,
      "disabled": _vm.disabled,
      "btnStyle": _vm.btnStyle,
      "textStyle": _vm.textStyle
    },
    on: {
      "buttonClicked": _vm.buttonClicked
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(198)
)

/* script */
__vue_exports__ = __webpack_require__(199)

/* template */
var __vue_template__ = __webpack_require__(210)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\views\\my\\dialog-demo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3d9209cc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  },
  "scroller": {
    "flex": 1
  },
  "category": {
    "backgroundColor": "#ffc300",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "40"
  },
  "input": {
    "width": "500",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "right",
    "fontSize": "34"
  },
  "btn": {
    "width": "600",
    "height": "80",
    "marginTop": "40",
    "marginLeft": "75",
    "marginBottom": "40",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "backgroundColor": "#ffc300",
    "borderColor": "#ffc300"
  },
  "btn-txt": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "download": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "download-title": {
    "color": "#333333",
    "fontSize": "34",
    "marginBottom": "48"
  },
  "download-info": {
    "color": "#999999",
    "fontSize": "30",
    "marginTop": "16"
  }
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(15);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _minibar = __webpack_require__(0);

var _minibar2 = _interopRequireDefault(_minibar);

var _dialog = __webpack_require__(200);

var _dialog2 = _interopRequireDefault(_dialog);

var _progress = __webpack_require__(205);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DialogDemo',
  components: {
    TMinibar: _minibar2.default,
    TDialog: _dialog2.default,
    TProgress: _progress2.default,
    WxcCell: _wxcCell2.default
  },
  data: function data() {
    return {
      show: false,
      isConfirmDialog: true,
      type: 'confirm',
      showTitle: false,
      title: '标题',
      content: '用户需要阅读的内容，这是用户需要阅读的内容。',
      confirmText: '确定',
      cancelText: '取消',
      noPromptText: '不再提示',
      showFooter: false,
      single: false,
      showNoPrompt: false,
      isChecked: false,
      showDownload: false,
      progressValue: 50
    };
  },
  methods: {
    openDialog: function openDialog() {
      var self = this;
      self.show = true;
    },
    dialogCloseBtnClick: function dialogCloseBtnClick() {
      this.show = false;

      this.$store.dispatch('updateToastProps', {
        show: true,
        message: '关闭回调'
      });
    },
    dialogCancelBtnClick: function dialogCancelBtnClick() {
      this.show = false;

      this.$store.dispatch('updateToastProps', {
        show: true,
        message: '取消回调'
      });
    },
    dialogConfirmBtnClick: function dialogConfirmBtnClick() {
      this.show = false;

      this.$store.dispatch('updateToastProps', {
        show: true,
        message: '确认回调'
      });
    },
    dialogNoPromptClick: function dialogNoPromptClick(e) {
      this.isChecked = e.isChecked;

      this.$store.dispatch('updateToastProps', {
        show: true,
        message: 'noPrompt isChecked: ' + e.isChecked
      });
    },
    isConfirmDialogChange: function isConfirmDialogChange() {
      this.isConfirmDialog = !this.isConfirmDialog;
      if (this.isConfirmDialog) {
        this.type = 'confirm';
      } else {
        this.type = 'custom';
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(201);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(202)
)

/* script */
__vue_exports__ = __webpack_require__(203)

/* template */
var __vue_template__ = __webpack_require__(204)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-111cbc2e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "top": "500",
    "left": "75",
    "zIndex": 9999,
    "width": "600",
    "borderRadius": "20",
    "backgroundColor": "#ffffff",
    "fontSize": "34",
    "color": "#333333",
    "overflow": "hidden"
  },
  "dialog-close-wrap": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "zIndex": 999,
    "width": "88",
    "height": "88",
    "justifyContent": "center",
    "alignItems": "center",
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.4) inset"
  },
  "icon-close": {
    "fontSize": "34",
    "color": "#999999"
  },
  "dialog-content": {
    "paddingTop": "72",
    "paddingBottom": "72",
    "paddingLeft": "48",
    "paddingRight": "48"
  },
  "content-title": {
    "fontSize": "40",
    "lineHeight": "48",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "fontSize": "34",
    "lineHeight": "42",
    "textAlign": "center",
    "color": "#333333"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#dddddd",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#dddddd",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "34",
    "lineHeight": "42",
    "color": "#333333"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "lineHeight": "32",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "lineHeight": "32",
    "color": "#999999"
  }
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overlay = __webpack_require__(9);

var _overlay2 = _interopRequireDefault(_overlay);

var _icon = __webpack_require__(3);

var _icon2 = _interopRequireDefault(_icon);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

exports.default = {
  name: 'Dialog',
  components: {
    TOverlay: _overlay2.default,
    TIcon: _icon2.default
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showOverlay: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'confirm'
    },
    single: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    boxStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    mainBtnColor: {
      type: String,
      default: '#00A0E6'
    },
    secondBtnColor: {
      type: String,
      default: '#333333'
    },
    showNoPrompt: {
      type: Boolean,
      default: false
    },
    noPromptText: {
      type: String,
      default: '不再提示'
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      noPromptIcon: UN_CHECKED,
      pageHeight: 1334
    };
  },
  computed: {
    dialogBoxStyle: function dialogBoxStyle() {
      var style = Object.assign({}, this.boxStyle);
      var height = style.height ? parseInt(style.height.replace('px', '')) : 334;
      style.top = (this.pageHeight - height) / 2;
      return style;
    }
  },
  created: function created() {
    this.pageHeight = (0, _index.getPageHeight)();
  },

  methods: {
    closeClicked: function closeClicked() {
      this.$emit('dialogCloseBtnClicked', {
        type: 'close'
      });
    },
    secondaryClicked: function secondaryClicked() {
      this.$emit('dialogCancelBtnClicked', {
        type: 'cancel'
      });
    },
    primaryClicked: function primaryClicked() {
      this.$emit('dialogConfirmBtnClicked', {
        type: 'confirm'
      });
    },
    noPromptClicked: function noPromptClicked() {
      var isChecked = !this.isChecked;
      this.noPromptIcon = isChecked ? CHECKED : UN_CHECKED;
      this.$emit('wxcDialogNoPromptClicked', {
        isChecked: isChecked
      });
    }
  }
};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["container"]
  }, [(_vm.showOverlay) ? _c('t-overlay', {
    attrs: {
      "show": true
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["dialog-box"],
    style: _vm.dialogBoxStyle
  }, [(_vm.type !== 'confirm') ? _c('div', {
    staticClass: ["dialog-close-wrap"],
    on: {
      "click": _vm.closeClicked
    }
  }, [_c('t-icon', {
    staticClass: ["icon-close"],
    attrs: {
      "name": "close"
    }
  })], 1) : _vm._e(), _c('div', {
    staticClass: ["dialog-content"]
  }, [(_vm.showTitle) ? _vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), (_vm.showFooter || _vm.type === 'confirm') ? _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])]) : _vm._e()])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(206);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(207)
)

/* script */
__vue_exports__ = __webpack_require__(208)

/* template */
var __vue_template__ = __webpack_require__(209)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\progress\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-78701e5a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = {
  "progress-wrap": {
    "backgroundColor": "#F5F5F5",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#DDDDDD"
  },
  "progress": {
    "position": "absolute",
    "backgroundImage": "linear-gradient(to right, #1C69D3, #00A0E6)"
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Progress',
  props: {
    barColor: {
      type: String,
      default: '#FFC900'
    },
    barImage: {
      type: String,
      default: 'linear-gradient(to right, #1C69D3, #00A0E6)'
    },
    barWidth: {
      type: Number,
      default: 504
    },
    barHeight: {
      type: Number,
      default: 24
    },
    barRadius: {
      type: Number,
      default: 12
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    runWayStyle: function runWayStyle() {
      var barWidth = this.barWidth,
          barHeight = this.barHeight,
          barRadius = this.barRadius;

      return {
        width: barWidth + 'px',
        height: barHeight + 'px',
        borderRadius: barRadius + 'px'
      };
    },
    progressStyle: function progressStyle() {
      var value = this.value,
          barWidth = this.barWidth,
          barHeight = this.barHeight,
          barColor = this.barColor,
          barImage = this.barImage,
          barRadius = this.barRadius;

      var newValue = value < 0 ? 0 : value > 100 ? 100 : value;
      return {
        backgroundColor: barColor,
        backgroundImage: barImage,
        borderRadius: barRadius + 'px',
        height: barHeight + 'px',
        width: newValue / 100 * barWidth + 'px'
      };
    }
  }
};

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["progress-wrap"],
    style: _vm.runWayStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ("进度为百分之" + _vm.value)
    }
  }, [_c('div', {
    staticClass: ["progress"],
    style: _vm.progressStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('t-minibar', {
    attrs: {
      "title": "弹出对话框演示"
    }
  }), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('text', {
    staticClass: ["category"]
  }, [_vm._v("Dialog配置")]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "是否是确认框"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.isConfirmDialog
    },
    on: {
      "change": _vm.isConfirmDialogChange
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "显示标题"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.showTitle
    },
    on: {
      "change": function($event) {
        _vm.showTitle = !_vm.showTitle
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "标题文案"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "请输入标题",
      "value": _vm.title
    },
    on: {
      "input": function($event) {
        _vm.title = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "说明文案"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "请输入说明内容",
      "value": _vm.content
    },
    on: {
      "input": function($event) {
        _vm.content = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "主按钮"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "确定按钮文案",
      "value": _vm.confirmText
    },
    on: {
      "input": function($event) {
        _vm.confirmText = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "title": "副按钮"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "取消按钮文案",
      "value": _vm.cancelText
    },
    on: {
      "input": function($event) {
        _vm.cancelText = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "显示底部按钮区"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.showFooter
    },
    on: {
      "change": function($event) {
        _vm.showFooter = !_vm.showFooter
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "取消按钮"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": !_vm.single
    },
    on: {
      "change": function($event) {
        _vm.single = !_vm.single
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "显示不再提示"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.showNoPrompt
    },
    on: {
      "change": function($event) {
        _vm.showNoPrompt = !_vm.showNoPrompt
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "不再提示是否勾选"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.isChecked
    },
    on: {
      "change": function($event) {
        _vm.isChecked = !_vm.isChecked
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "不再提示文案"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "slot": "value",
      "placeholder": "取消按钮文案",
      "value": _vm.noPromptText
    },
    on: {
      "input": function($event) {
        _vm.noPromptText = $event.value
      }
    },
    slot: "value"
  })]), _c('wxc-cell', {
    attrs: {
      "hasTopBorder": false,
      "autoAccessible": false,
      "title": "显示自定义内容"
    }
  }, [_c('switch', {
    attrs: {
      "slot": "value",
      "checked": _vm.showDownload
    },
    on: {
      "change": function($event) {
        _vm.showDownload = !_vm.showDownload
      }
    },
    slot: "value"
  })]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.openDialog
    }
  }, [_c('text', {
    staticClass: ["btn-txt"]
  }, [_vm._v("打开Dialog试一试")])])], 1), _c('t-dialog', {
    attrs: {
      "show": _vm.show,
      "type": _vm.type,
      "showTitle": _vm.showTitle,
      "title": _vm.title,
      "content": _vm.content,
      "confirmText": _vm.confirmText,
      "cancelText": _vm.cancelText,
      "showFooter": _vm.showFooter,
      "single": _vm.single,
      "isChecked": _vm.isChecked,
      "noPromptText": _vm.noPromptText,
      "showNoPrompt": _vm.showNoPrompt
    },
    on: {
      "dialogCloseBtnClicked": _vm.dialogCloseBtnClick,
      "dialogCancelBtnClicked": _vm.dialogCancelBtnClick,
      "dialogConfirmBtnClicked": _vm.dialogConfirmBtnClick,
      "dialogNoPromptClicked": _vm.dialogNoPromptClick
    }
  }, [(_vm.showDownload) ? _c('div', {
    staticClass: ["download"],
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('text', {
    staticClass: ["download-title"]
  }, [_vm._v("正在下载")]), _c('t-progress', {
    attrs: {
      "value": _vm.progressValue
    }
  }), _c('text', {
    staticClass: ["download-info"]
  }, [_vm._v("已下载" + _vm._s(_vm.progressValue) + "%")])], 1) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(212)
)

/* script */
__vue_exports__ = __webpack_require__(213)

/* template */
var __vue_template__ = __webpack_require__(224)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#f2f2f2",
    "fontSize": "34",
    "fontFamily": "BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
  },
  "hover-shadow": {
    "boxShadow:active": "0 0 0 1000px rgba(0, 0, 0, 0.1) inset"
  }
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _loading = __webpack_require__(214);

var _loading2 = _interopRequireDefault(_loading);

var _toast = __webpack_require__(219);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  components: {
    TLoading: _loading2.default,
    TToast: _toast2.default
  },
  computed: {
    loadingProps: function loadingProps() {
      return this.$store.state.loadingProps;
    },
    toastProps: function toastProps() {
      return this.$store.state.toastProps;
    }
  },
  mounted: function mounted() {
    var _this = this;

    _index.localStore.get('userInfo', function (data) {
      data = data || {};
      _this.$store.dispatch('updateUserInfo', data);
    });
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(215);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(216)
)

/* script */
__vue_exports__ = __webpack_require__(217)

/* template */
var __vue_template__ = __webpack_require__(218)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\loading\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-473e4b72"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = {
  "loading-need-mask": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 9999
  },
  "loading": {
    "position": "fixed",
    "left": "225",
    "top": "500",
    "zIndex": 999
  },
  "loading-lg": {
    "left": "150"
  },
  "loading-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "20",
    "width": "300",
    "height": "258",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "loading-box-lg": {
    "width": "450"
  },
  "loading-trip-image": {
    "height": "96",
    "width": "96"
  },
  "loading-text": {
    "color": "#ffffff",
    "fontSize": "34",
    "lineHeight": "42",
    "height": "42",
    "marginTop": "24",
    "textOverflow": "ellipsis",
    "width": "252",
    "textAlign": "center"
  }
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _imageBase = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    size: {
      type: String,
      default: ''
    },
    interval: {
      type: [Number, String],
      default: 0
    },
    duration: {
      type: [Number, String],
      default: 0
    },
    needMask: {
      type: Boolean,
      default: true
    },
    maskStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showLoading: false,
      tid: 0
    };
  },
  watch: {
    show: function show() {
      this.setShow();
    }
  },
  computed: {
    loading: function loading() {
      var loading = {};
      switch (this.type) {
        case 'success':
          loading = {
            url: _imageBase.loadingSuccess
          };
          break;
        default:
          loading = {
            url: _imageBase.loadingGifWhite
          };
      }
      return loading;
    },
    topPosition: function topPosition() {
      return (_utils2.default.env.getPageHeight() - 200) / 2;
    }
  },
  created: function created() {
    this.setShow();
  },

  methods: {
    maskClicked: function maskClicked() {
      this.needMask && this.$emit('loadingMaskClicked', {});
    },
    setShow: function setShow() {
      var _this = this;

      var interval = this.interval,
          duration = this.duration,
          show = this.show,
          showLoading = this.showLoading;

      var stInterval = parseInt(interval);
      var stDuration = parseInt(duration);
      clearTimeout(this.tid);
      if (show) {
        if (showLoading) {
          return;
        }
        if (stInterval === 0) {
          this.showLoading = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showLoading = true;
          }, stInterval);
        }

        if (stDuration > 0) {
          var timer = setTimeout(function () {
            if (_this.showLoading) {
              _this.showLoading = false;
            }
            clearTimeout(timer);
          }, stDuration);
        }
      } else {
        this.showLoading = false;
      }
    }
  }
};

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.showLoading && _vm.needMask && 'loading-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showLoading) ? _c('div', {
    staticClass: ["loading"],
    class: ['loading-' + _vm.size],
    style: {
      top: _vm.topPosition + 'px'
    }
  }, [_c('div', {
    class: ['loading-box', 'loading-box-' + _vm.size],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    ref: "image",
    staticClass: ["loading-trip-image"],
    attrs: {
      "src": _vm.loading.url,
      "resize": "contain",
      "quality": "original"
    }
  }), (_vm.loadingText) ? _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(220);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(221)
)

/* script */
__vue_exports__ = __webpack_require__(222)

/* template */
var __vue_template__ = __webpack_require__(223)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\Git\\app.fx.ttyun.com\\view\\src\\components\\toast\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-747de09d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = {
  "toast-need-mask": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 9999
  },
  "toast": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 999,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "toast-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "20",
    "paddingTop": "23",
    "paddingBottom": "23",
    "paddingLeft": "40",
    "paddingRight": "40",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "toast-box-1": {
    "height": "88",
    "borderRadius": "44"
  },
  "toast-box-2": {
    "width": "504",
    "height": "130",
    "borderRadius": "65"
  },
  "toast-box-3": {
    "width": "504",
    "height": "172",
    "borderRadius": "86"
  },
  "toast-text": {
    "color": "#ffffff",
    "fontSize": "34",
    "lineHeight": "42",
    "textAlign": "center"
  }
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

exports.default = {
  name: 'Toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    interval: {
      type: [Number, String],
      default: 0
    },
    duration: {
      type: [Number, String],
      default: 3000
    },
    needMask: {
      type: Boolean,
      default: false
    },
    maskStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showToast: false,
      tid: 0
    };
  },
  computed: {
    lines: function lines() {
      var num = Math.ceil((0, _utils.getStringByteLength)(this.message) / 36);
      return num;
    }
  },
  watch: {
    show: function show() {
      this.setShow();
    }
  },
  created: function created() {
    this.setShow();
  },

  methods: {
    maskClicked: function maskClicked() {
      this.needMask && this.$emit('toastMaskClicked', {});
    },
    setShow: function setShow() {
      var _this = this;

      var interval = this.interval,
          duration = this.duration,
          show = this.show,
          showToast = this.showToast;

      var stInterval = parseInt(interval);
      var stDuration = parseInt(duration);
      clearTimeout(this.tid);
      if (show) {
        if (showToast) {
          return;
        }
        if (stInterval === 0) {
          this.showToast = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showToast = true;
          }, stInterval);
        }

        if (stDuration > 0) {
          var timer = setTimeout(function () {
            if (_this.showToast) {
              _this.showToast = false;
              _this.$store.dispatch('updateToastProps', {
                show: false
              });
            }
            clearTimeout(timer);
          }, stDuration);
        }
      } else {
        this.showToast = false;
        this.$store.dispatch('updateToastProps', {
          show: false
        });
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.showToast && _vm.needMask && 'toast-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showToast) ? _c('div', {
    staticClass: ["toast"]
  }, [_c('div', {
    class: ['toast-box', 'toast-box-' + _vm.lines],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    staticClass: ["toast-text"],
    attrs: {
      "lines": +_vm.lines
    }
  }, [_vm._v(_vm._s(_vm.message))])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view'), _c('t-loading', _vm._b({}, 't-loading', _vm.loadingProps, false)), _c('t-toast', _vm._b({}, 't-toast', _vm.toastProps, false))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);