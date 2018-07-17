<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
  <div class="header-bar">
    <wxc-minibar :title="title" :right-text="rightText" :use-default-return="useDefaultReturn" @wxcMinibarLeftButtonClicked="leftButtonClick"
      @wxcMinibarRightButtonClicked="rightButtonClick"></wxc-minibar>
  </div>
</template>

<script>
  import {
    WxcMinibar
  } from 'weex-ui'

  export default {
    components: {
      WxcMinibar
    },
    props: {
      title: {
        type: [String, Array],
        default: ''
      },
      leftButtonClick: {
        type: Function,
        default: () => {}
      },
      rightButtonClick: {
        type: Function,
        default: () => {}
      },
      rightText: {
        type: String,
        default: ''
      },
      useDefaultReturn: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({}),
    methods: {}
  }

</script>

<style scoped>


</style>
