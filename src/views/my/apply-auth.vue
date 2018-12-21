<template>
  <div class="wrapper">
    <t-minibar title="申请认证" ref="minibar"></t-minibar>
    <web class="webview" :style="{height: webHeight}" @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError" src="https://www.opposhop.cn/"></web>
  </div>
</template>

<script>
  import {
    getPageHeight
  } from '@/js/utils/index'
  import TMinibar from '@/components/minibar'

  export default {
    name: 'ApplyAuth',
    components: {
      TMinibar
    },
    data: () => ({
      webHeight: 1334
    }),
    mounted() {
      const dom = weex.requireModule('dom')
      dom.getComponentRect(this.$refs.minibar, option => {
        if (option.result) {
          this.webHeight = getPageHeight() - option.size.height
        }
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

<style scoped lang="scss">


</style>
