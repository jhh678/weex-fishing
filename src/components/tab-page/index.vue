<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->
<!-- Updated by Tw93 on 17/11/16.-->

<template>
  <div class="tty-tab-page" :style="{ height: (tabPageHeight)+'px', backgroundColor:wrapBgColor }">
    <scroller class="tab-title-list" ref="tab-title-list" :show-scrollbar="false" scroll-direction="horizontal" :data-spm="spmC"
      :style="{ backgroundColor: tabStyles.bgColor, height: (tabStyles.height)+'px',paddingLeft:tabStyles.leftOffset+'px' }">

      <div class="title-item" v-for="(v,index) in tabTitles" :key="index" :ref="'tty-tab-title-'+index" @click="setPage(index,v.url)"
        :style="{ width: tabStyles.width +'px', height: tabStyles.height +'px', backgroundColor: currentPage === index ? tabStyles.activeBgColor : tabStyles.bgColor }"
        :accessible="true" :aria-label="`${v.title?v.title:'标签'+index}`">
        <t-icon v-if="titleType === 'icon' && v.icon && !titleUseSlot" :name="currentPage == index ? v.activeIcon : v.icon" size="big"
          :icon-style="{fontSize: tabStyles.iconFontSize+'px', marginBottom: tabStyles.iconFontMarginBottom +'px', color: currentPage == index ? tabStyles.activeIconFontColor : tabStyles.iconFontColor}"></t-icon>
        <text v-if="!titleUseSlot" :style="{ fontSize: tabStyles.fontSize+'px', fontWeight: (currentPage === index && tabStyles.isActiveTitleBold)? 'bold' : 'normal', color: currentPage === index ? tabStyles.activeTitleColor : tabStyles.titleColor, paddingLeft:tabStyles.textPaddingLeft+'px', paddingRight:tabStyles.textPaddingRight+'px'}"
          class="tab-text">{{v.title}}</text>
        <div class="border-bottom" v-if="tabStyles.hasActiveBottom && !titleUseSlot" :style="{ width: tabStyles.activeBottomWidth+'px', left: (tabStyles.width-tabStyles.activeBottomWidth)/2+'px', height: tabStyles.activeBottomHeight+'px', backgroundColor: currentPage === index ? tabStyles.activeBottomColor : 'transparent' }"></div>
        <slot :name="`tab-title-${index}`" v-if="titleUseSlot"></slot>
      </div>
    </scroller>
    <div class="tab-page-wrap" ref="tab-page-wrap" @horizontalpan="startHandler" :style="{ height: (tabPageHeight-tabStyles.height)+'px' }">
      <div ref="tab-container" class="tab-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tty-tab-page {
    width: 750px;
  }

  .tab-title-list {
    flex-direction: row;
  }

  .title-item {
    justify-content: center;
    align-items: center;
    border-bottom-style: solid;
  }

  .border-bottom {
    position: absolute;
    bottom: 0;
  }

  .tab-page-wrap {
    width: 750px;
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

</style>

<script>
  import {
    Utils,
    BindEnv
  } from 'weex-ui'
  import Binding from 'weex-bindingx/lib/index.weex'
  import TIcon from '@/components/icon'

  const dom = weex.requireModule('dom')
  const animation = weex.requireModule('animation')
  const swipeBack = weex.requireModule('swipeBack')

  export default {
    name: 'TabPage',
    components: {
      TIcon
    },
    props: {
      tabTitles: {
        type: Array,
        default: () => ([])
      },
      panDist: {
        type: Number,
        default: 200
      },
      spmC: {
        type: [String, Number],
        default: ''
      },
      titleUseSlot: {
        type: Boolean,
        default: false
      },
      tabStyles: {
        type: Object,
        default: () => ({
          bgColor: '#FFFFFF',
          titleColor: '#333333',
          activeTitleColor: '#1C69D3',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: false,
          width: 150,
          height: 88,
          fontSize: 34,
          hasActiveBottom: true,
          activeBottomColor: '#1C69D3',
          activeBottomWidth: 68,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10,
          leftOffset: 0
        })
      },
      titleType: {
        type: String,
        default: 'icon'
      },
      tabPageHeight: {
        type: [String, Number],
        default: 1334
      },
      needSlider: {
        type: Boolean,
        default: true
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
        default: '#F2F2F2'
      }
    },
    data: () => ({
      currentPage: 0,
      gesToken: 0,
      isMoving: false,
      startTime: 0,
      deltaX: 0,
      translateX: 0
    }),
    mounted() {
      if (swipeBack && swipeBack.forbidSwipeBack) {
        swipeBack.forbidSwipeBack(true)
      }
      if (BindEnv.supportsEBForIos() && this.isTabView && this.needSlider) {
        const tabPageEl = this.$refs['tab-page-wrap']
        Binding.prepare && Binding.prepare({
          anchor: tabPageEl.ref,
          eventType: 'pan'
        })
      }
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
      startHandler() {
        if (BindEnv.supportsEBForIos() && this.isTabView && this.needSlider) {
          this.bindExp(this.$refs['tab-page-wrap'])
        }
      },
      bindExp(element) {
        if (element && element.ref) {
          if (this.isMoving && this.gesToken !== 0) {
            Binding.unbind({
              eventType: 'pan',
              token: this.gesToken
            })
            this.gesToken = 0
            return
          }

          const tabElement = this.$refs['tab-container']
          const {
            currentPage,
            panDist
          } = this
          const dist = currentPage * 750

          // x-dist
          const props = [{
            element: tabElement.ref,
            property: 'transform.translateX',
            expression: `x-${dist}`
          }]

          const gesTokenObj = Binding.bind({
            anchor: element.ref,
            eventType: 'pan',
            props
          }, (e) => {
            const {
              deltaX,
              state
            } = e
            if (state === 'end') {
              if (deltaX < -panDist) {
                this.next()
              } else if (deltaX > panDist) {
                this.prev()
              } else {
                this.setPage(currentPage)
              }
            }
          })
          this.gesToken = gesTokenObj.token
        }
      },
      setPage(page, url = null, animated = true) {
        if (!this.isTabView) {
          this.jumpOut(url)
          return
        }
        if (this.isMoving === true) {
          return
        }
        this.isMoving = true
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

        this.isMoving = false
        this.currentPage = page
        this._animateTransformX(page, animated)
        this.$emit('tabPageCurrentTabSelected', {
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
        const dist = page * 750
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
