<template>
  <div class="wrapper">
    <t-minibar title="按钮演示"></t-minibar>
    <scroller class="scroller">
      <div class="button-list">
        <text class="category">类型样式</text>
        <text class="button-text">blue</text>
        <t-button text="确定" type="blue"></t-button>
        <text class="button-text">blue && disabled</text>
        <t-button text="确定" type="blue" :disabled="true"></t-button>
        <text class="button-text">white</text>
        <t-button text="确定" type="white"></t-button>
        <text class="button-text">white && disabled</text>
        <t-button text="确定" type="white" :disabled="true"></t-button>
        <text class="button-text">red</text>
        <t-button text="确定" type="red"></t-button>
        <text class="button-text">red && disabled</text>
        <t-button text="确定" type="red" :disabled="true"></t-button>
        <text class="button-text">yellow</text>
        <t-button text="确定" type="yellow"></t-button>
        <text class="button-text">yellow && disabled</text>
        <t-button text="确定" type="yellow" :disabled="true"></t-button>

        <text class="category">尺寸样式</text>
        <text class="button-text">full</text>
        <t-button text="确定" size="full" type="white"></t-button>
        <text class="button-text">big</text>
        <t-button text="确定" size="big" type="white"></t-button>
        <text class="button-text">medium</text>
        <t-button text="确定" size="medium"></t-button>
        <text class="button-text">small</text>
        <t-button text="确定" size="small" type="white"></t-button>
      </div>
      <text class="category">自定义样式</text>
      <wxc-cell :has-top-border="false" title="按钮的文字">
        <input class="input" slot="value" placeholder="文字" :value="text" @input="text=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="文字颜色">
        <input class="input" slot="value" placeholder="自定义文字颜色" :value="color" @input="color=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="是否禁用">
        <switch :checked="disabled" slot="value" @change="disabled = !disabled"></switch>
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="按钮宽度">
        <input class="input" slot="value" placeholder="自定义样式实现, 默认宽度702px" :value="width" @input="width=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="按钮高度">
        <input class="input" slot="value" placeholder="自定义样式实现, 默认高度88px" :value="height" @input="height=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="背景颜色">
        <input class="input" slot="value" placeholder="自定义样式实现" :value="backgroundColor" @input="backgroundColor=$event.value" />
      </wxc-cell>
      <wxc-cell :has-top-border="false" title="边框圆角">
        <input class="input" slot="value" placeholder="自定义样式实现,默认12px" :value="borderRadius" @input="borderRadius=$event.value" />
      </wxc-cell>

      <div class="demo">
        <t-button :text="text" :type="type" :disabled="disabled" :btn-style="btnStyle" :text-style="textStyle" @buttonClicked="buttonClicked"></t-button>
      </div>
    </scroller>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'
  import TButton from '@/components/button'
  import {
    WxcCell
  } from 'weex-ui'

  const modal = weex.requireModule('modal')

  export default {
    name: 'ButtonDemo',
    components: {
      TMinibar,
      TButton,
      WxcCell
    },
    data: () => ({
      type: 'red',
      text: '按钮文字',
      width: '702px',
      height: '88px',
      disabled: false,
      backgroundColor: '#FF5000',
      borderRadius: '12px',
      fontSize: '34px',
      color: '#FFFFFF'
    }),
    computed: {
      btnStyle() {
        const {
          width,
          height,
          backgroundColor,
          borderRadius
        } = this
        const customStyle = {}
        if (width) {
          customStyle.width = width
        }
        if (height) {
          customStyle.height = height
          customStyle.lineHeight = height
        }
        if (backgroundColor) {
          customStyle.backgroundColor = backgroundColor
        }
        if (borderRadius) {
          customStyle.borderRadius = borderRadius
        }
        return customStyle
      },
      textStyle() {
        const {
          fontSize,
          color
        } = this
        const customStyle = {}
        if (fontSize) {
          customStyle.fontSize = fontSize
        }
        if (color) {
          customStyle.color = color
        }
        return {
          fontSize,
          color
        }
      }
    },
    methods: {
      buttonClicked(e) {
        const {
          type,
          disabled
        } = e
        modal.toast({
          message: disabled ? `disabled=${disabled}` : `type=${type}`
        })
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
    width: 750px;
    height: 80px;
    line-height: 80px;
    margin-top: 40px;
  }

  .demo {
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .button-list {
    justify-content: center;
    align-items: center;
  }

  .button-text {
    margin-top: 40px;
    margin-left: 8px;
    margin-bottom: 16px;
  }

  .input {
    width: 500px;
    text-align: right;
    font-size: 28px;
  }

  .size {
    flex-direction: row;
    justify-content: space-around;
  }

  .button-size-text {
    margin-left: 24px;
    margin-bottom: 24px;
    margin-top: 40px;
  }

</style>
