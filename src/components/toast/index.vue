<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/09. -->
<!--A loading indicator. Custom text supported. -->

<template>
  <div :class="[showToast && needMask && 'toast-need-mask']" @click="maskClicked" :style="maskStyle">
    <div class="toast" v-if="showToast">
      <div :class="['toast-box', 'toast-box-' + lines]" :aria-hidden="true">
        <text class="toast-text" :lines="+lines">{{message}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .toast-need-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
  }

  .toast {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
  }

  .toast-box {
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding-top: 23px;
    padding-bottom: 23px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .toast-box-1 {
    height: 88px;
    border-radius: 44px;
  }

  .toast-box-2 {
    width: 504px;
    height: 130px;
    border-radius: 65px;
  }

  .toast-box-3 {
    width: 504px;
    height: 172px;
    border-radius: 86px;
  }

  .toast-text {
    color: #ffffff;
    font-size: 34px;
    line-height: 42px;
    text-align: center;
  }

</style>

<script>
  import {
    getStringByteLength
  } from '@/js/utils'

  export default {
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
        default: () => ({})
      }
    },
    data: () => ({
      showToast: false,
      tid: 0
    }),
    computed: {
      lines() {
        let num = Math.ceil(getStringByteLength(this.message) / 36)
        return num
      }
    },
    watch: {
      show() {
        this.setShow()
      }
    },
    created() {
      this.setShow()
    },
    methods: {
      maskClicked() {
        this.needMask && (this.$emit('toastMaskClicked', {}))
      },
      setShow() {
        const {
          interval,
          duration,
          show,
          showToast
        } = this
        const stInterval = parseInt(interval)
        const stDuration = parseInt(duration)
        clearTimeout(this.tid)
        if (show) {
          if (showToast) {
            return
          }
          if (stInterval === 0) {
            this.showToast = true
          } else {
            this.tid = setTimeout(() => {
              this.showToast = true
            }, stInterval)
          }

          if (stDuration > 0) {
            let timer = setTimeout(() => {
              if (this.showToast) {
                this.showToast = false
                this.$store.dispatch('updateToastProps', {
                  show: false
                })
              }
              clearTimeout(timer)
            }, stDuration)
          }
        } else {
          this.showToast = false
          this.$store.dispatch('updateToastProps', {
            show: false
          })
        }
      }
    }
  }

</script>
