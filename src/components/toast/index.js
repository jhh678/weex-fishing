export {
  default
}
from './index.vue'

// import Vue from 'vue'

// const LoadingConstructor = Vue.extend(require('./index.vue'))
// let toastPool = []

// let getAnInstance = () => {
//   if (toastPool.length > 0) {
//     let instance = toastPool[0]
//     toastPool.splice(0, 1)
//     return instance
//   }
//   return new LoadingConstructor({
//     el: document.createElement('div')
//   })
// }

// let returnAnInstance = instance => {
//   if (instance) {
//     toastPool.push(instance)
//   }
// }

// let removeDom = event => {
//   if (event.target.parentNode) {
//     event.target.parentNode.removeChild(event.target)
//   }
// }

// LoadingConstructor.prototype.close = function () {
//   this.show = false
//   this.$el.addEventListener('transitionend', removeDom)
//   this.closed = true
//   returnAnInstance(this)
// }

// let Loading = (options = {}) => {
//   let duration = options.duration || 0

//   let instance = getAnInstance()
//   instance.closed = false
//   clearTimeout(instance.timer)
//   instance.loadingText = typeof options === 'string' ? options : options.loadingText || '加载中'
//   instance.type = options.type || 'default'
//   instance.size = options.size || ''
//   instance.interval = options.interval || 0
//   instance.needMask = options.needMask || true
//   instance.maskStyle = options.maskStyle || {}
//   //   instance.imageEl = instance.$refs.image

//   document.body.appendChild(instance.$el)
//   Vue.nextTick(function () {
//     instance.show = true
//     instance.$el.removeEventListener('transitionend', removeDom)
//     duration && (instance.timer = setTimeout(function () {
//       if (instance.closed) return
//       instance.close()
//     }, duration))
//   })
//   return instance
// }

// export default Loading
