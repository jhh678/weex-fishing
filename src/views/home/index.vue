<template>
  <div class="wrapper">
    <wxc-city ref="wxcCityPush" class="wxc-city" :currentLocation="location" :cityStyleType="cityStyleType" @wxcCityItemSelected="citySelect" @wxcCityOnInput="onInput"></wxc-city>
    <div class="page">
      <div class="header">
        <wxc-minibar title="首页" :use-default-return="false" @wxcMinibarLeftButtonClicked="minibarLeftButtonClick" @wxcMinibarRightButtonClicked="minibarRightButtonClick">
          <wxc-icon name="scanning" slot="left"></wxc-icon>
          <div slot="right" class="header-right">
            <wxc-icon name="map"></wxc-icon>
            <text>{{currentCity}}</text>
          </div>
        </wxc-minibar>
      </div>
      <div class="content">
        <wxc-tab-page ref="wxc-tab-page" :tab-titles="tabPageTitles" :tab-styles="tabPageStyles" title-type="icon" :needSlider="needSlider" :is-tab-view="isTabView" :tab-page-height="tabPageHeight" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
          <list v-for="(v,index) in tabPageList" :key="index" class="tab-page-item-container" :style="{ height: (tabPageHeight - tabPageStyles.height) + 'px' }">
            <cell class="border-cell"></cell>
            <cell>
              <slider class="slider" interval="3000" :auto-play="true" :show-indicators="true">
                <div class="frame" v-for="(img, index) in imageList" :key="index">
                  <image class="slider-image" resize="cover" :src="img.src" />
                </div>
              </slider>
            </cell>
            <cell v-for="(demo,key) in v" class="cell" :key="key" :accessible="true" aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
              <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675" @wxcPanItemPan="wxcPanItemPan">
                <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg" :image-text="tabPageTitles[index].title" title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游" :desc="desc" :tags="tags" price="666" price-desc="月售58笔｜999+条评论" />
              </wxc-pan-item>
            </cell>
          </list>
        </wxc-tab-page>
      </div>
    </div>
  </div>
</template>

<script>
import {
  tabPageConfig,
  tabBarConfig
} from '@/js/config'
import {
  WxcMinibar,
  WxcTabPage,
  WxcPanItem,
  WxcIcon,
  WxcCity,
  Utils,
  BindEnv
} from 'weex-ui'
import WxcItem from '@/components/wxc-item.vue'
const modal = weex.requireModule('modal')
const ttyScan = weex.requireModule('tty-scan')

export default {
  name: 'HomeIndex',
  components: {
    WxcMinibar,
    WxcTabPage,
    WxcPanItem,
    WxcItem,
    WxcIcon,
    WxcCity
  },
  data() {
    return {
      tabPageTitles: tabPageConfig.tabTitles,
      tabPageStyles: tabPageConfig.tabStyles,
      imageList: [{
        src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
      },
      {
        src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
      },
      {
        src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
      }
      ],
      tabPageList: [],
      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 10000,
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
      currentCity: '',
      cityStyleType: 'group',
      location: '定位中'
    }
  },
  created() {
    this.tabPageList = [...Array(this.tabPageTitles.length).keys()].map(i => [])
    this.$set(this.tabPageList, 0, this.demoList)
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    this.tabPageHeight = Utils.env.getPageHeight() - tabBarConfig.tabStyles.height - 90
  },
  mounted() {
    // 模拟定位
    setTimeout(() => {
      this.location = '深圳'
      this.currentCity = '深圳'
    }, 1000)
  },
  methods: {
    minibarLeftButtonClick() {
      ttyScan.scanCode(res => {
        // res 即为返回的数据
        modal.toast({
          message: res.data,
          duration: 3
        })
      })
    },
    minibarRightButtonClick() {
      this.$refs['wxcCityPush'].show()
    },
    wxcTabPageCurrentTabSelected(e) {
      const self = this
      const index = e.page
      /* Unloaded tab analog data request */
      if (!Utils.isNonEmptyArray(self.tabPageList[index])) {
        setTimeout(() => {
          this.$set(self.tabPageList, index, self.demoList)
        }, 100)
      }
    },
    wxcPanItemPan(e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element)
      }
    },
    citySelect(e) {
      this.currentCity = e.item.name
    },
    onInput(e) { }
  }
}

</script>

<style scoped lang="stylus">
@import '../../css/common.styl';

.wxc-city {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.header {
}

.header-right {
  flex-direction: row;
}

.content {
  width: 750px;
  flex: 1;
}

.tab-page-item-container {
  width: 750px;
  background-color: #f2f3f4;
}

.slider {
  width: 750px;
  height: 360px;
}

.slider-image {
  width: 750px;
  height: 360px;
}

.frame {
  width: 750px;
  height: 360px;
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
</style>
