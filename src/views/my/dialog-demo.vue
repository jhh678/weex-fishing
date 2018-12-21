<template>
  <div class="wrapper">
    <t-minibar title="弹出对话框演示"></t-minibar>
    <scroller class="scroller">
      <text class="category">Dialog配置</text>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="是否是确认框">
        <switch :checked="isConfirmDialog" slot="value" @change="isConfirmDialogChange"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="显示标题">
        <switch :checked="showTitle" slot="value" @change="showTitle= !showTitle"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="标题文案">
        <input class="input" slot="value" placeholder="请输入标题" :value="title" @input="title=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="说明文案">
        <input class="input" slot="value" placeholder="请输入说明内容" :value="content" @input="content=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="主按钮">
        <input class="input" slot="value" placeholder="确定按钮文案" :value="confirmText" @input="confirmText=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="副按钮">
        <input class="input" slot="value" placeholder="取消按钮文案" :value="cancelText" @input="cancelText=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="显示底部按钮区">
        <switch :checked="showFooter" slot="value" @change="showFooter= !showFooter"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="取消按钮">
        <switch :checked="!single" slot="value" @change="single= !single"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="显示不再提示">
        <switch :checked="showNoPrompt" slot="value" @change="showNoPrompt= !showNoPrompt"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="不再提示是否勾选">
        <switch :checked="isChecked" slot="value" @change="isChecked= !isChecked"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="不再提示文案">
        <input class="input" slot="value" placeholder="取消按钮文案" :value="noPromptText" @input="noPromptText=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" :auto-accessible="false" title="显示自定义内容">
        <switch :checked="showDownload" slot="value" @change="showDownload= !showDownload"></switch>
      </wxc-cell>
      <div class="btn" @click="openDialog">
        <text class="btn-txt">打开Dialog试一试</text>
      </div>
    </scroller>
    <t-dialog :show="show" :type="type" :show-title="showTitle" :title="title" :content="content" :confirm-text="confirmText"
      :cancel-text="cancelText" :show-footer="showFooter" :single="single" :is-checked="isChecked" :no-prompt-text="noPromptText"
      :show-no-prompt="showNoPrompt" @dialogCloseBtnClicked="dialogCloseBtnClick" @dialogCancelBtnClicked="dialogCancelBtnClick"
      @dialogConfirmBtnClicked="dialogConfirmBtnClick" @dialogNoPromptClicked="dialogNoPromptClick">
      <div class="download" slot="content" v-if="showDownload">
        <text class="download-title">正在下载</text>
        <t-progress :value="progressValue"></t-progress>
        <text class="download-info">已下载{{progressValue}}%</text>
      </div>
    </t-dialog>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'
  import TDialog from '@/components/dialog'
  import TProgress from '@/components/progress'
  import {
    WxcCell
  } from 'weex-ui'

  export default {
    name: 'DialogDemo',
    components: {
      TMinibar,
      TDialog,
      TProgress,
      WxcCell
    },
    data: () => ({
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
    }),
    methods: {
      openDialog() {
        const self = this
        self.show = true
      },
      dialogCloseBtnClick() {
        this.show = false

        this.$store.dispatch('updateToastProps', {
          show: true,
          message: '关闭回调'
        })
      },
      dialogCancelBtnClick() {
        this.show = false

        this.$store.dispatch('updateToastProps', {
          show: true,
          message: '取消回调'
        })
      },
      dialogConfirmBtnClick() {
        this.show = false

        this.$store.dispatch('updateToastProps', {
          show: true,
          message: '确认回调'
        })
      },
      dialogNoPromptClick(e) {
        this.isChecked = e.isChecked

        this.$store.dispatch('updateToastProps', {
          show: true,
          message: `noPrompt isChecked: ${e.isChecked}`
        })
      },
      isConfirmDialogChange() {
        this.isConfirmDialog = !this.isConfirmDialog
        if (this.isConfirmDialog) {
          this.type = 'confirm'
        } else {
          this.type = 'custom'
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "../../css/common.scss";

  .scroller {
    flex: 1;
  }

  .category {
    background-color: #ffc300;
    height: 80px;
    line-height: 80px;
    margin-top: 40px;
  }

  .input {
    width: 500px;
    height: 80px;
    line-height: 80px;
    text-align: right;
    font-size: 34px;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 40px;
    margin-left: 75px;
    margin-bottom: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }

  .download {
    align-items: center;
    justify-content: center;
  }

  .download-title {
    color: #333333;
    font-size: 34px;
    margin-bottom: 48px;
  }

  .download-info {
    color: #999999;
    font-size: 30px;
    margin-top: 16px;
  }

</style>
