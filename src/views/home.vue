<template>
  <div class="wrapper">
    <div class="header">
      <wxc-minibar title="首页" @wxcMinibarLeftButtonClicked="minibarLeftButtonClick" @wxcMinibarRightButtonClicked="minibarRightButtonClick"
        :right-button="rightButton"></wxc-minibar>
    </div>

    <div class="content">
      <wxc-tab-bar :tab-titles="tabBarTitles" :tab-styles="tabBarStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="bar-bar-item-container" :style="contentStyle">
          <wxc-tab-page ref="wxc-tab-page" :tab-titles="tabPageTitles" :tab-styles="tabPageStyles" title-type="icon" :needSlider="needSlider"
            :is-tab-view="isTabView" :tab-page-height="tabPageHeight" :spm-c="4307989" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            <list v-for="(v,index) in tabPageList" :key="index" class="tab-page-item-container" :style="{ height: (tabPageHeight - tabPageStyles.height) + 'px' }">
              <cell class="border-cell"></cell>
              <cell v-for="(demo,key) in v" class="cell" :key="key" :accessible="true" aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675" @wxcPanItemPan="wxcPanItemPan">
                  <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg" :image-text="tabPageTitles[index].title"
                    title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游" :desc="desc" :tags="tags" price="666" price-desc="月售58笔｜999+条评论"
                  />
                </wxc-pan-item>
              </cell>
            </list>
          </wxc-tab-page>
        </div>

        <!-- 第二个页面内容-->
        <div class="bar-bar-item-container" :style="contentStyle">
          <text>特别推荐</text>
        </div>

        <!-- 第三个页面内容-->
        <div class="bar-bar-item-container" :style="contentStyle">
          <text>消息中心</text>
        </div>

        <!-- 第四个页面内容-->
        <div class="bar-bar-item-container" :style="contentStyle">
          <text>我的主页</text>
        </div>
      </wxc-tab-bar>
    </div>
  </div>
</template>

<script>
  import {
    tabPageConfig,
    tabBarConfig
  } from '../js/config'
  import {
    WxcMinibar,
    WxcTabBar,
    WxcTabPage,
    WxcPanItem,
    Utils,
    BindEnv
  } from 'weex-ui'
  import WxcItem from '@/components/wxc-item.vue'

  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')

  module.exports = {
    name: 'Home',
    components: {
      WxcMinibar,
      WxcTabBar,
      WxcTabPage,
      WxcPanItem,
      WxcItem
    },
    data: () => ({
      rightButton: 'https://gw.alicdn.com/tfs/TB1HrvtbBTH8KJjy0FiXXcRsXXa-32-32.png',
      tabPageTitles: tabPageConfig.tabTitles,
      tabPageStyles: tabPageConfig.tabStyles,
      tabPageList: [],
      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 1234,
      desc: [{
        type: 'text',
        value: '特价机票|班期:清明 3/27-4/2等',
        theme: 'gray'
      }],
      tags: [{
        type: 'tag',
        value: '满100减20测试',
        theme: 'yellow'
      }],
      tabBarTitles: tabBarConfig.tabTitles,
      tabBarStyles: tabBarConfig.tabStyles
    }),
    created() {
      this.tabPageList = [...Array(this.tabPageTitles.length).keys()].map(i => [])
      this.$set(this.tabPageList, 0, this.demoList)
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      this.tabPageHeight = Utils.env.getPageHeight()

      const {
        tabBarStyles
      } = this

      this.contentStyle = {
        height: (this.tabPageHeight - tabBarStyles.height - 90) + 'px'
      }
    },
    methods: {
      minibarLeftButtonClick() {},
      minibarRightButtonClick() {
        modal.toast({
          'message': 'click rightButton!',
          'duration': 1
        })
      },
      wxcTabPageCurrentTabSelected(e) {
        const self = this;
        const index = e.page;
        /* Unloaded tab analog data request */
        if (!Utils.isNonEmptyArray(self.tabPageList[index])) {
          setTimeout(() => {
            this.$set(self.tabPageList, index, self.demoList);
          }, 100)
        }
      },
      wxcPanItemPan(e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element)
        }
      },
      wxcTabBarCurrentTabSelected(e) {
        const index = e.page
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fafafa;
  }

  .header {}

  .content {
    flex: 1;
  }

  .tab-page-item-container {
    width: 750px;
    background-color: #f2f3f4;
  }

  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .cell {
    background-color: #ffffff;
  }

  .content {
    width: 750px;
    height: 300px;
    border-bottom-width: 1px;
    align-items: center;
    justify-content: center;
  }

  .bar-bar-item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }

</style>
