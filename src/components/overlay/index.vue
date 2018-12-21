<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/10/25. -->
<!--A gray overlay mask-->

<template>
  <div class="tty-overlay" ref="tty-overlay" v-if="show" :hack="shouldShow" @click="overlayClicked" :style="overlayStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
  .tty-overlay {
    width: 750px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
  }

</style>

<script>
  const animation = weex.requireModule('animation')
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      },
      hasAnimation: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 300
      },
      timingFunction: {
        type: Array,
        default: () => (['ease-in', 'ease-out'])
      },
      backgroundColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)'
      },
      canAutoClose: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      overlayStyle() {
        return {
          opacity: this.hasAnimation ? 0 : 1,
          backgroundColor: this.backgroundColor
        }
      },
      shouldShow() {
        const {
          show,
          hasAnimation
        } = this

        hasAnimation && this.appearOverlay(show)
        return show
      }
    },
    methods: {
      overlayClicked(e) {
        this.canAutoClose ? this.appearOverlay(false) : this.$emit('overlayBodyClicked', {})
      },
      appearOverlay(bool, duration = this.duration) {
        setTimeout(() => {
          const {
            hasAnimation,
            timingFunction,
            canAutoClose
          } = this
          const needEmit = !bool && canAutoClose
          needEmit && (this.$emit('overlayBodyClicking', {}))
          const overlayEl = this.$refs['tty-overlay']
          if (hasAnimation && overlayEl) {
            animation.transition(overlayEl, {
              styles: {
                opacity: bool ? 1 : 0
              },
              duration,
              timingFunction: timingFunction[bool ? 0 : 1],
              delay: 0
            }, () => {
              needEmit && (this.$emit('overlayBodyClicked', {}))
            })
          } else {
            needEmit && (this.$emit('overlayBodyClicked', {}))
          }
        }, 50)
      }
    }
  }

</script>
