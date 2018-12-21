<template>
  <div class="wrapper">
    <t-tab-bar :tab-titles="tabBarTitles" :tab-styles="tabBarStyles" title-type="icon" @tabBarCurrentTabSelected="tabBarCurrentTabSelected"
      ref="tty-tab-bar">
      <div v-for="(item, index) in tabPageList" :key="index" class="bar-bar-item-container" :style="contentStyle">
        <div :is="item"></div>
      </div>
    </t-tab-bar>

    <t-overlay :show="showMiddle" background-color="rgba(255, 255, 255, 0.96)">
      <div class="post-wrap">
        <div class="post-items-wrap">
          <div class="post-item hover-shadow" @click="openPage('post')">
            <div class="icon-wrap icon-post">
              <t-icon name="post" size="medium" :style="{color: '#FFFFFF'}"></t-icon>
            </div>
            <text class="post-item-text">发帖</text>
          </div>
          <div class="post-item hover-shadow" @click="openPage('question')">
            <div class="icon-wrap icon-question">
              <t-icon name="question" size="medium" :style="{color: '#FFFFFF'}"></t-icon>
            </div>
            <text class="post-item-text">提问</text>
          </div>
        </div>
        <div class="post-footer">
          <div class="icon-wrap hover-shadow" @click="closeOverlay">
            <t-icon name="close" size="medium"></t-icon>
          </div>
        </div>
      </div>
    </t-overlay>
  </div>
</template>

<script>
  import {
    tabBarConfig
  } from '@/js/config'
  import {
    getPageHeight,
    localStore,
    setStatusBarStyle
  } from '@/js/utils/index'
  import TTabBar from '@/components/tab-bar'
  import TOverlay from '@/components/overlay'
  import TIcon from '@/components/icon'
  import HomeIndex from '@/views/home/index.vue'
  import VideoIndex from '@/views/video/index.vue'
  import FindIndex from '@/views/find/index.vue'
  import MyIndex from '@/views/my/index.vue'

  module.exports = {
    name: 'Index',
    components: {
      TTabBar,
      TOverlay,
      TIcon,
      HomeIndex,
      VideoIndex,
      FindIndex,
      MyIndex
    },
    data: () => ({
      isShow: true,
      contentStyle: {
        height: 0
      },
      tabBarTitles: tabBarConfig.tabTitles,
      tabBarStyles: tabBarConfig.tabStyles,
      tabPageList: [
        'HomeIndex',
        'VideoIndex',
        'FindIndex',
        'MyIndex'
      ],
      showMiddle: false
    }),
    created() {
      this.contentStyle = {
        height: (getPageHeight() - this.tabBarStyles.height) + 'px'
      }
      localStore.set('contentHeight', this.contentStyle.height)
    },
    mounted() {
      let index = this.$store.state.currentTabIndex
      this.$refs['tty-tab-bar'].setPage(index, null, false)
    },
    methods: {
      tabBarCurrentTabSelected(e) {
        if (e.isMiddle) {
          this.showMiddle = true
        } else {
          const index = e.page
          this.$store.dispatch('updateTabIndex', index)
          if (index === 4) {
            setStatusBarStyle('blue')
          } else {
            setStatusBarStyle()
          }
        }
      },
      openPage(type) {
        let path = type === 'post' ? '/post/index' : '/question/index'
        this.$router.push({
          path: path
        })
      },
      closeOverlay() {
        this.showMiddle = false
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "../css/common.scss";

  .bar-bar-item-container {
    width: 750px;
    background-color: #F2F2F2;
    align-items: center;
    justify-content: center;
  }

  .post-wrap {
    width: 750px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .post-items-wrap {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 39px;
    padding-right: 39px;
  }

  .post-item {
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
  }

  .icon-wrap {
    width: 96px;
    height: 96px;
    border-radius: 48px;
    align-items: center;
    justify-content: center;
  }

  .icon-post {
    background-image: linear-gradient(to right, #00A0E6, #1C69D3);
  }

  .icon-question {
    background-image: linear-gradient(to right, #FFB800, #FF8200);
  }

  .post-item-text {
    margin-top: 16px;
    line-height: 36px;
    font-size: 28px;
    color: #333333;
    text-align: center;
  }

  .post-footer {
    width: 750px;
    height: 98px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #DDDDDD;
    align-items: center;
    justify-content: center;
  }

</style>
