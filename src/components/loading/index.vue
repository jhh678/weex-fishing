<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/07. -->
<!--A loading indicator. Custom text supported. -->

<template>
  <div :class="[showLoading && needMask && 'loading-need-mask']" @click="maskClicked" :style="maskStyle">
    <div class="loading" :class="['loading-' + size]" :style="{ top: topPosition +'px'}" v-if="showLoading">
      <div :class="['loading-box', 'loading-box-' + size]" :aria-hidden="true">
        <image :src="loading.url" class="loading-trip-image" resize="contain" quality="original" ref="image"></image>
        <text v-if="loadingText" class="loading-text">{{loadingText}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .loading-need-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
  }

  .loading {
    position: fixed;
    left: 225px;
    top: 500px;
    z-index: 999;
  }

  .loading-lg {
    left: 150px;
  }

  .loading-box {
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 300px;
    height: 258px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .loading-box-lg {
    width: 450px;
  }

  .loading-trip-image {
    height: 96px;
    width: 96px;
  }

  .loading-text {
    color: #ffffff;
    font-size: 34px;
    line-height: 42px;
    height: 42px;
    margin-top: 24px;
    text-overflow: ellipsis;
    width: 252px;
    text-align: center;
  }

</style>

<script>
  import {
    Utils
  } from 'weex-ui'

  import {
    loadingGifWhite,
    loadingSuccess
  } from '@/js/config/image-base64'

  export default {
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
        default: () => ({})
      }
    },
    data: () => ({
      showLoading: false,
      tid: 0
    }),
    watch: {
      show() {
        this.setShow()
      }
    },
    computed: {
      loading() {
        let loading = {}
        switch (this.type) {
          case 'success':
            loading = {
              url: loadingSuccess
            }
            break
          default:
            loading = {
              url: loadingGifWhite
            }
        }
        return loading
      },
      topPosition() {
        return (Utils.env.getPageHeight() - 200) / 2
      }
    },
    created() {
      this.setShow()
    },
    methods: {
      maskClicked() {
        this.needMask && (this.$emit('loadingMaskClicked', {}))
      },
      setShow() {
        const {
          interval,
          duration,
          show,
          showLoading
        } = this
        const stInterval = parseInt(interval)
        const stDuration = parseInt(duration)
        clearTimeout(this.tid)
        if (show) {
          if (showLoading) {
            return
          }
          if (stInterval === 0) {
            this.showLoading = true
          } else {
            this.tid = setTimeout(() => {
              this.showLoading = true
            }, stInterval)
          }

          if (stDuration > 0) {
            let timer = setTimeout(() => {
              if (this.showLoading) {
                this.showLoading = false
              }
              clearTimeout(timer)
            }, stDuration)
          }
        } else {
          this.showLoading = false
        }
      }
    }
  }

</script>
