<template>
  <div class="wrapper">
    <web class="webview" :style="{height: webHeight}" @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError" src="http://shop.vivo.com.cn/wap"></web>
  </div>
</template>

<script>
  import {
    localStore
  } from '@/js/utils/index'

  export default {
    name: 'Find',
    data: () => ({
      isShow: true,
      webHeight: 1334
    }),
    created() {
      localStore.get('contentHeight', data => {
        this.webHeight = data
      })
    },
    methods: {
      onPageStart(event) {
        // page start load
      },
      onPageFinish(event) {
        // page finish load
      },
      onError(event) {
        // page load error
      }
    }
  }

</script>

<style scoped>
  .webview {
    width: 750px;
  }

</style>
