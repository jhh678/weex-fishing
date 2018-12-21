<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/10. -->
<!--A top navigation bar.-->

<template>
  <div class="minibar" :style="{ backgroundColor: backgroundColor }" v-if="show">
    <div class="left" v-if="leftButton || leftText || ($slots && $slots.left)" @click="leftButtonClicked">
      <slot name="left">
        <t-icon v-if="leftButton && !leftText" :name="leftButton" size="big"></t-icon>
        <text v-if="leftText" :style="{ color: leftTextColor }">{{leftText}}</text>
      </slot>
    </div>
    <div class="middle">
      <slot name="middle">
        <text v-if="title" class="middle-title" :style="{ color: middleTextColor }">{{title}}</text>
      </slot>
    </div>
    <div class="right" v-if="rightButton || rightText || ($slots && $slots.right)" @click="rightButtonClicked">
      <slot name="right">
        <t-icon v-if="rightButton && !rightText" :name="rightButton" size="big"></t-icon>
        <text v-if="rightText" :style="{ color: rightTextColor }">{{rightText}}</text>
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .minibar {
    position: relative;
    width: 750px;
    height: 88px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }

  .left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 88px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .left:active {
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, .1) inset;
  }

  .middle {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 88px;
  }

  .middle-title {
    line-height: 48px;
    font-size: 40px;
    font-weight: bold;
    color: #333333;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 88px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .right:active {
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, .1) inset;
  }

</style>

<script>
  import TIcon from '@/components/icon'

  export default {
    name: 'Minibar',
    components: {
      TIcon
    },
    props: {
      backgroundColor: {
        type: String,
        default: '#FFFFFF'
      },
      leftButton: {
        type: String,
        default: 'back'
      },
      rightButton: {
        type: String,
        default: ''
      },
      leftTextColor: {
        type: String,
        default: '#666666'
      },
      middleTextColor: {
        type: String,
        default: '#333333'
      },
      rightTextColor: {
        type: String,
        default: '#666666'
      },
      title: {
        type: String,
        default: ''
      },
      leftText: {
        type: String,
        default: ''
      },
      rightText: {
        type: String,
        default: ''
      },
      useDefaultReturn: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      leftButtonClicked() {
        if (this.useDefaultReturn) {
          this.$router.back()
        }
        this.$emit('minibarLeftButtonClicked', {})
      },
      rightButtonClicked() {
        const hasRightContent = this.rightText || this.rightButton || (this.$slots && this.$slots.right)
        hasRightContent && this.$emit('minibarRightButtonClicked', {})
      }
    }
  }

</script>
