<template>
  <div class="wrapper">
    <wxc-tab-bar :tab-titles="tabBarTitles" :tab-styles="tabBarStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div v-for="(item, index) in tabPageList" :key="index" class="bar-bar-item-container" :style="contentStyle">
        <div :is="item"></div>
      </div>
    </wxc-tab-bar>
  </div>
</template>

<script>
  import {
    tabBarConfig
  } from '@/js/config'
  import {
    WxcTabBar,
    Utils
  } from 'weex-ui'
  import HomeIndex from '@/views/home/index.vue'
  import GoodsIndex from '@/views/goods/index.vue'
  import CartIndex from '@/views/cart/index.vue'
  import MyIndex from '@/views/my/index.vue'

  module.exports = {
    name: 'Index',
    components: {
      WxcTabBar,
      HomeIndex,
      GoodsIndex,
      CartIndex,
      MyIndex
    },
    data: () => ({
      contentStyle: {
        height: 0
      },
      tabBarTitles: tabBarConfig.tabTitles,
      tabBarStyles: tabBarConfig.tabStyles,
      tabPageList: [
        'HomeIndex',
        'GoodsIndex',
        'CartIndex',
        'MyIndex'
      ]
    }),
    created() {
      this.contentStyle = {
        height: (Utils.env.getPageHeight() - this.tabBarStyles.height) + 'px'
      }
    },
    methods: {
      wxcTabBarCurrentTabSelected(e) {
        // const index = e.page
      }
    }
  }

</script>

<style scoped lang="postcss">
  @import "../css/common.css";

  .wrapper {
    width: 750px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fafafa;
    font-size: 32px;
    font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .bar-bar-item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }

</style>
