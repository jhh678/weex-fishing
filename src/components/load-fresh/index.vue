<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/09. -->

<template>
  <div class="lf-wrap" :accessible="true" :aria-label="lfText">
    <refresh v-if="type === 'refresh'" class="lf" @refresh="onHandle" :display="show ? 'show' : 'hide'">
      <image class="indicator" :src="image"></image>
      <text class="indicator-text">{{lfText}}</text>
    </refresh>

    <loading v-else class="lf" @loading="onHandle" :display="show ? 'show' : 'hide'">
      <image class="indicator" :src="image"></image>
      <text class="indicator-text">{{lfText}}</text>
    </loading>
  </div>
</template>

<style scoped>
  .lf-wrap {
    width: 750px;
    height: 84px;
    background-color: #F2F2F2;
  }

  .lf {
    width: 750px;
    height: 84px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .indicator {
    width: 44px;
    height: 44px;
  }

  .indicator-text {
    font-size: 30px;
    line-height: 40px;
    color: #666666;
  }
</style>

<script>
  import { loadingGifBlack } from '@/js/config/image-base64'

  export default {
    name: 'LoadFresh',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'refresh'
      },
      text: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: loadingGifBlack
      }
    },
    computed: {
      lfText() {
        let text = this.text
        if(!text) {
          text = this.type === 'refresh' ? '刷新中' : '正在加载'
        }
        return text
      }
    },
    methods: {
      onHandle(event) {
        this.$emit('handle', {e})
      }
    }
  }

</script>
