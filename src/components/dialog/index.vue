<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/08. -->
<!--A dialog. -->

<template>
  <div class="container" v-if="show">
    <t-overlay v-if="showOverlay" :show="true"></t-overlay>
    <div class="dialog-box" :style="dialogBoxStyle">
      <div class="dialog-close-wrap" v-if="type !== 'confirm'" @click="closeClicked">
        <t-icon name="close" class="icon-close"></t-icon>
      </div>
      <div class="dialog-content">
        <slot name="title" v-if="showTitle">
          <text class="content-title">{{title}}</text>
        </slot>
        <slot name="content">
          <text class="content-subtext">{{content}}</text>
        </slot>
        <div class="no-prompt" v-if="showNoPrompt" @click="noPromptClicked">
          <image :src="noPromptIcon" class="no-prompt-icon"></image>
          <text class="no-prompt-text">{{noPromptText}}</text>
        </div>
      </div>
      <div class="dialog-footer" v-if="showFooter || type ==='confirm'">
        <div class="footer-btn cancel" v-if="!single" @click="secondaryClicked">
          <text class="btn-text" :style="{ color: secondBtnColor }">{{cancelText}}</text>
        </div>
        <div class="footer-btn confirm" @click="primaryClicked">
          <text class="btn-text" :style="{ color: mainBtnColor }">{{confirmText}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: fixed;
    width: 750px;
    /*兼容H5异常*/
    z-index: 99999;
  }

  .dialog-box {
    position: fixed;
    top: 500px;
    left: 75px;
    z-index: 9999;
    width: 600px;
    border-radius: 20px;
    background-color: #ffffff;
    font-size: 34px;
    color: #333333;
    overflow: hidden;
  }

  .dialog-close-wrap {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    width: 88px;
    height: 88px;
    justify-content: center;
    align-items: center;
  }

  .icon-close {
    font-size: 34px;
    color: #999;
  }

  .dialog-close-wrap:active {
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.4) inset;
  }

  .dialog-content {
    padding-top: 72px;
    padding-bottom: 72px;
    padding-left: 48px;
    padding-right: 48px;
  }

  .content-title {
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  }

  .content-subtext {
    font-size: 34px;
    line-height: 42px;
    text-align: center;
    color: #333333;
  }

  .dialog-footer {
    flex-direction: row;
    align-items: center;
    border-top-color: #dddddd;
    border-top-width: 1px;
  }

  .footer-btn {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 90px;
  }

  .cancel {
    border-right-color: #dddddd;
    border-right-width: 1px;
  }

  .btn-text {
    font-size: 34px;
    line-height: 42px;
    color: #333333;
  }

  .no-prompt {
    width: 486px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 24px;
  }

  .no-prompt-icon {
    width: 24px;
    height: 24px;
    line-height: 32px;
    margin-right: 12px;
  }

  .no-prompt-text {
    font-size: 24px;
    line-height: 32px;
    color: #999999;
  }

</style>

<script>
  import TOverlay from '@/components/overlay'
  import TIcon from '@/components/icon'
  import {
    getPageHeight
  } from '@/js/utils/index'

  const CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png'
  const UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png'

  export default {
    name: 'Dialog',
    components: {
      TOverlay,
      TIcon
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
        default: () => ({})
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
    data: () => ({
      noPromptIcon: UN_CHECKED,
      pageHeight: 1334
    }),
    computed: {
      dialogBoxStyle() {
        let style = Object.assign({}, this.boxStyle)
        let height = style.height ? parseInt(style.height.replace('px', '')) : 334
        style.top = (this.pageHeight - height) / 2
        return style
      }
    },
    created() {
      this.pageHeight = getPageHeight()
    },
    methods: {
      closeClicked() {
        this.$emit('dialogCloseBtnClicked', {
          type: 'close'
        })
      },
      secondaryClicked() {
        this.$emit('dialogCancelBtnClicked', {
          type: 'cancel'
        })
      },
      primaryClicked() {
        this.$emit('dialogConfirmBtnClicked', {
          type: 'confirm'
        })
      },
      noPromptClicked() {
        const isChecked = !this.isChecked
        this.noPromptIcon = isChecked ? CHECKED : UN_CHECKED
        this.$emit('wxcDialogNoPromptClicked', {
          isChecked
        })
      }
    }
  }

</script>
