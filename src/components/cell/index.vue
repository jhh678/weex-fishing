<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/09. -->
<!--A Cell -->

<template>
  <div class="cell-wrap" :style="cellWrapStyle">
    <div :class="['cell', hasTopBorder && 'cell-top-border', !hasBottomLine && hasBottomBorder && 'cell-bottom-border', hasVerticalIndent && 'cell-indent', desc && 'has-desc']"
      :style="cellStyle" :accessible="autoAccessible" :aria-label="`${label},${title},${desc}`" @click="cellClicked">
      <slot name="label">
        <div v-if="label">
          <text class="cell-label-text">{{label}}</text>
        </div>
      </slot>
      <div class="cell-title">
        <slot name="title">
          <text class="cell-content" v-if="title">{{title}}</text>
          <text class="cell-desc-text" v-if="desc">{{desc}}</text>
        </slot>
      </div>
      <slot name="value"></slot>
      <slot></slot>
      <text class="extra-content-text" v-if="extraContent">{{extraContent}}</text>
      <t-icon name="more" :icon-style="{color: '#CCCCCC'}" :aria-hidden="true" v-if="hasArrow"></t-icon>
    </div>
    <div v-if="hasBottomLine" class="bottom-line"></div>
  </div>
</template>

<style scoped>
  .cell-wrap {
    background-color: #FFFFFF;
  }

  .cell {
    flex-direction: row;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
  }

  .cell:active {
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.1) inset;
  }

  .cell-title {
    flex: 1;
  }

  .cell-indent {
    padding-bottom: 30px;
    padding-top: 30px;
  }

  .has-desc {
    padding-bottom: 18px;
    padding-top: 18px;
  }

  .cell-top-border {
    border-top-color: #DDDDDD;
    border-top-width: 1px;
  }

  .cell-bottom-border {
    border-bottom-color: #DDDDDD;
    border-bottom-width: 1px;
  }

  .cell-label-text {
    font-size: 30px;
    color: #666666;
    width: 188px;
    margin-right: 16px;
  }

  .cell-content {
    color: #333333;
    font-size: 34px;
    line-height: 42px;
    margin-left: 16px;
    margin-right: 16px;
  }

  .cell-desc-text {
    color: #999999;
    font-size: 24px;
    line-height: 30px;
    margin-top: 4px;
    margin-right: 30px;
  }

  .extra-content-text {
    font-size: 30px;
    line-height: 40px;
    color: #999999;
    margin-right: 16px;
  }

  .bottom-line {
    width: 726px;
    height: 1px;
    margin-left: 24px;
    background-color: #dddddd;
  }

</style>

<script>
  import {
    Utils
  } from 'weex-ui'
  import TIcon from '@/components/icon'

  export default {
    name: 'Cell',
    components: {
      TIcon
    },
    props: {
      hasBottomLine: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      extraContent: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
      hasTopBorder: {
        type: Boolean,
        default: false
      },
      hasMargin: {
        type: Boolean,
        default: false
      },
      marginHeight: {
        type: [Number, String],
        default: 20
      },
      hasBottomBorder: {
        type: Boolean,
        default: false
      },
      hasArrow: {
        type: Boolean,
        default: false
      },
      hasVerticalIndent: {
        type: Boolean,
        default: true
      },
      cellStyle: {
        type: Object,
        default: () => ({})
      },
      autoAccessible: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      cellWrapStyle() {
        let style = {}
        if (this.hasMargin) {
          style.marginBottom = this.marginHeight + 'px'
        }
        return style
      }
    },
    methods: {
      cellClicked(e) {
        const link = this.link
        this.$emit('cellClicked', {
          e
        })
        link && Utils.goToH5Page(link, true)
      }
    }
  }

</script>
