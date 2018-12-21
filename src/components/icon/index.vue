<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/06. -->

<template>
  <text class="icon-font" :style="mergeStyle">{{Icon[name]}}</text>
</template>

<style scoped>
  .icon-font {
    color: #666666;
  }

</style>

<script>
  import Icon from './type'

  const dom = weex.requireModule('dom')

  export default {
    name: 'Icon',
    props: {
      name: {
        default: 'success',
        type: String
      },
      size: {
        default: '',
        type: String
      },
      iconStyle: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      Icon
    }),
    beforeCreate() {
      dom.addRule('fontFace', {
        'fontFamily': 'ttyIconFont',
        'src': "url('https://at.alicdn.com/t/font_754480_9lnpqsa207a.ttf')"
      })
    },
    computed: {
      mergeStyle() {
        const {
          iconStyle,
          size
        } = this
        let fontSize = '34px'
        switch (size) {
          case 'xs':
            fontSize = '24px'
            break
          case 'small':
            fontSize = '30px'
            break
          case 'medium':
            fontSize = '44px'
            break
          case 'big':
            fontSize = '48px'
            break
          default:
            fontSize = '34px'
        }
        return {
          fontFamily: 'ttyIconFont',
          fontSize,
          ...iconStyle
        }
      }
    }
  }

</script>
