<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/09. -->

<template>
  <div class="btn" :style="mrBtnStyle" @click="onClicked" :accessible="true" :aria-label="text">
    <text class="btn-text" :style="mrTextStyle">{{text}}</text>
  </div>
</template>

<script>
  import {
    STYLE_MAP,
    TEXT_STYLE_MAP,
    BUTTON_STYLE_MAP,
    TEXT_FONTSIZE_STYLE_MAP
  } from './type'

  export default {
    name: 'Button',
    props: {
      text: {
        type: String,
        default: '确认'
      },
      size: {
        type: String,
        default: 'medium'
      },
      type: {
        type: String,
        default: 'blue'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      btnStyle: Object,
      textStyle: Object
    },
    computed: {
      mrBtnStyle() {
        const {
          type,
          disabled,
          btnStyle,
          size
        } = this

        const mrBtnStyle = {
          ...STYLE_MAP[type],
          ...BUTTON_STYLE_MAP[size],
          ...btnStyle
        }

        let disableStyle = {
          backgroundColor: '#CCCCCC'
        }
        if (type === 'blue') {
          disableStyle.backgroundImage = ''
        }

        return disabled ? {
          ...mrBtnStyle,
          ...disableStyle
        } : mrBtnStyle
      },
      mrTextStyle() {
        const {
          type,
          disabled,
          textStyle,
          size
        } = this
        const mrTextStyle = { ...TEXT_STYLE_MAP[type],
          ...textStyle,
          ...TEXT_FONTSIZE_STYLE_MAP[size]
        }
        return disabled ? { ...mrTextStyle,
          color: '#FFFFFF'
        } : mrTextStyle
      }
    },
    methods: {
      onClicked(e) {
        const {
          type,
          disabled
        } = this
        this.$emit('buttonClicked', {
          e,
          type,
          disabled
        })
      }
    }
  }

</script>

<style scoped>
  .btn {
    width: 702px;
    height: 88px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    opacity: 1;
  }

  .btn:active {
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, .1) inset;
  }

  .btn-text {
    text-overflow: ellipsis;
    lines: 1;
    font-size: 34px;
    line-height: 42px;
    color: #ffffff;
  }

</style>
