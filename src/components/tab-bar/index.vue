<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->
<!-- Updated by Tw93 on 18/01/22.-->

<template>
  <div class="tty-tab-bar" :style="{backgroundColor:wrapBgColor }">
    <div class="tab-bar-wrap" ref="tab-bar-wrap">
      <div ref="tab-container" class="tab-container">
        <slot></slot>
      </div>
    </div>
    <div class="tab-title-list" :style="{ backgroundColor: tabStyles.bgColor, height: (tabStyles.height + (isIPhoneX ? 78 : 0))+'px',paddingBottom:isIPhoneX?'78px':'0'}">
      <div class="title-item" v-for="(v,index) in tabTitles" :key="index" :ref="'tty-tab-title-'+index" @click="setPage(index,v.url)"
        :style="{ width: tabStyles.width +'px', height: tabStyles.height +'px' }" :accessible="true" :aria-label="`${v.title?v.title:'标签'+index}`">
        <template v-if="v.isPage">
          <t-icon v-if="titleType === 'icon' && !titleUseSlot" :name="currentPage == index ? v.activeIcon : v.icon" size="big"></t-icon>
          <text v-if="!titleUseSlot" :style="{ fontSize: tabStyles.fontSize+'px', color: currentPage == index ? tabStyles.activeTitleColor : tabStyles.titleColor, paddingLeft:tabStyles.textPaddingLeft+'px', paddingRight:tabStyles.textPaddingRight+'px'}"
            class="tab-text">{{v.title}}</text>
          <div class="desc-tag" v-if="v.badge && !titleUseSlot">
            <text class="desc-text">{{v.badge}}</text>
          </div>
          <div v-if="v.dot && !v.badge && !titleUseSlot" class="dot"></div>
          <slot :name="`tab-title-${index}`" v-if="titleUseSlot"></slot>
        </template>
        <template v-else>
          <div class="icon-wrap">
            <t-icon v-if="titleType === 'icon' && !titleUseSlot" :name="v.icon" size="big" :icon-style="{color: '#FFFFFF'}"></t-icon>
          </div>
          <slot :name="`tab-title-${index}`" v-if="titleUseSlot"></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tty-tab-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .tab-title-list {
    flex-direction: row;
    justify-content: space-around;
  }

  .title-item {
    justify-content: center;
    align-items: center;
    border-bottom-style: solid;
  }

  .tab-bar-wrap {
    width: 750px;
    flex: 1;
    overflow: hidden;
  }

  .tab-container {
    flex: 1;
    flex-direction: row;
    position: absolute;
  }

  .tab-text {
    lines: 1;
    text-overflow: ellipsis;
  }

  .desc-tag {
    position: absolute;
    top: 10px;
    right: 20px;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background-color: #ff5e00;
    height: 26px;
    align-items: center;
    justify-content: center;
    padding-left: 6px;
    padding-right: 6px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    position: absolute;
    top: 10px;
    right: 40px;
    background-color: #ff5e00;
  }

  .desc-text {
    font-size: 18px;
    color: #ffffff;
  }

  .icon-wrap {
    width: 88px;
    height: 88px;
    border-radius: 44px;
    background-image: linear-gradient(to right, #00A0E6, #1C69D3);
    justify-content: center;
    align-items: center;
  }

</style>

<script>
  import {
    Utils
  } from 'weex-ui'
  import TIcon from '@/components/icon'
  const dom = weex.requireModule('dom')
  const animation = weex.requireModule('animation')

  export default {
    name: 'TabBar',
    components: {
      TIcon
    },
    props: {
      tabTitles: {
        type: Array,
        default: () => ([])
      },
      tabStyles: {
        type: Object,
        default: () => ({
          bgColor: '#FAFAFA',
          titleColor: '#666666',
          activeTitleColor: '#666666',
          activeIconFontColor: '#666666',
          iconFontMarginBottom: 1,
          width: 150,
          height: 98,
          fontSize: 20,
          iconFontColor: '#666666',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10
        })
      },
      titleType: {
        type: String,
        default: 'icon'
      },
      titleUseSlot: {
        type: Boolean,
        default: false
      },
      isTabView: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 300
      },
      timingFunction: {
        type: String,
        default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      wrapBgColor: {
        type: String,
        default: '#f2f3f4'
      }
    },
    data: () => ({
      currentPage: 0,
      translateX: 0,
      middlePageIndex: 3
    }),
    created() {
      this.middlePageIndex = Math.floor(this.tabTitles.length / 2)
      this.isIPhoneX = Utils.env.isIPhoneX()
    },
    methods: {
      next() {
        let page = this.currentPage
        if (page < this.tabTitles.length - 1) {
          page++
        }
        this.setPage(page)
      },
      prev() {
        let page = this.currentPage
        if (page > 0) {
          page--
        }
        this.setPage(page)
      },
      setPage(page, url = null, animated = true) {
        if (page === this.middlePageIndex) {
          this.$emit('tabBarCurrentTabSelected', {
            page,
            isMiddle: true
          })
          return
        }

        if (!this.isTabView) {
          this.jumpOut(url)
          return
        }
        const previousPage = this.currentPage
        const currentTabEl = this.$refs[`tty-tab-title-${page}`][0]
        const {
          width
        } = this.tabStyles
        const appearNum = parseInt(750 / width)
        const tabsNum = this.tabTitles.length
        const offset = page > appearNum ? -(750 - width) / 2 : -width * 2

        if (appearNum < tabsNum) {
          (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
            offset,
            animated
          })

          page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
            offset: -width * page,
            animated
          })
        }

        this.currentPage = page
        this._animateTransformX(page, animated)
        this.$emit('tabBarCurrentTabSelected', {
          page
        })
      },
      jumpOut(url) {
        url && Utils.goToH5Page(url)
      },
      _animateTransformX(page, animated) {
        const {
          duration,
          timingFunction
        } = this
        const computedDur = animated ? duration : 0.00001
        const containerEl = this.$refs[`tab-container`]
        const step = page > this.middlePageIndex ? page - 1 : page
        const dist = step * 750
        animation.transition(containerEl, {
          styles: {
            transform: `translateX(${-dist}px)`
          },
          duration: computedDur,
          timingFunction,
          delay: 0
        }, () => {})
      }
    }
  }

</script>
