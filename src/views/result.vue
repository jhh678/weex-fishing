<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/10. -->
<!--A  result page-->

<template>
  <div class="wrapper">
    <t-minibar :title="resultType.title" :right-text="resultType.rightText" @minibarRightButtonClicked="minibarRightButtonClicked"></t-minibar>
    <div class="result">
      <image class="result-image"
             :aria-hidden="true"
             :src="resultType.pic"></image>

      <div class="result-content" v-if="resultType.content">
        <text class="content-text">{{resultType.content}}</text>
        <text class="content-desc" v-if="resultType.desc">{{resultType.desc}}</text>
      </div>

      <t-button v-if="resultType.buttonText" class="result-button" :text="resultType.buttonText" :type="resultType.buttonType" :size="resultType.buttonSize" :btn-style="resultType.buttonStyle" :text-style="resultType.buttonTextStyle" @buttonClicked="buttonClicked"></t-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../css/common.scss";

  .result {
    width: 750px;
    flex: 1;
    align-items: center;
    padding-top: 160px;
    background-color: #f2f2f2;
  }

  .result-image {
    width: 280px;
    height: 280px;
  }

  .result-content {
    margin-top: 16px;
    align-items: center;
  }

  .content-text {
    font-size: 34px;
    color: #333333;
    height: 42px;
    line-height: 42px;
    text-align: center;
  }

  .content-desc {
    margin-top: 16px;
    font-size: 28px;
    color: #999999;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }

  .result-button {
    margin-top: 48px;
  }
</style>

<script>
  import TYPES from '@/js/config/result-types'
  import {
    Utils
  } from 'weex-ui'
  import TMinibar from '@/components/minibar'
  import TButton from '@/components/button'

  export default {
    name: 'Result',
    components: {
      TMinibar,
      TButton
    },
    data: () => ({
      type: 'offine',
      customSet: {}
    }),
    computed: {
      resultType () {
        const { type, customSet } = this
        const allTypes = Utils.isEmptyObject(customSet) ? TYPES : Utils.mergeDeep(TYPES, customSet)
        let types = allTypes['offine']
        if (Object.keys(allTypes).indexOf(type) > -1) {
          types = allTypes[type]
        }
        return types
      }
    },
    created() {
      this.type = this.$route.query.type
    },
    methods: {
      handleTouchEnd (e) {
        // web上面有点击穿透问题
        const { platform } = weex.config.env
        platform === 'Web' && e.preventDefault && e.preventDefault()
      },
      minibarRightButtonClicked() {
        this.resultType.rightButtonHandle && this.resultType.rightButtonHandle()
      },
      buttonClicked () {
        this.resultType.buttonHandle && this.resultType.buttonHandle()
      }
    }
  }
</script>
