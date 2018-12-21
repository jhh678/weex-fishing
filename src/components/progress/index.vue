<!-- CopyRight (C) 2017-2022 TTYun Group Holding Limited. -->
<!-- Created by Tw93 on 18/08/09. -->

<template>
  <div class="progress-wrap" :style="runWayStyle" :accessible="true" :aria-label="`进度为百分之${value}`">
    <div class="progress" :style="progressStyle"></div>
  </div>
</template>

<style scoped>
  .progress-wrap {
    background-color: #F5F5F5;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
  }

  .progress {
    position: absolute;
    background-image: linear-gradient(to right, #1C69D3, #00A0E6);
  }

</style>

<script>
  export default {
    name: 'Progress',
    props: {
      barColor: {
        type: String,
        default: '#FFC900'
      },
      barImage: {
        type: String,
        default: 'linear-gradient(to right, #1C69D3, #00A0E6)'
      },
      barWidth: {
        type: Number,
        default: 504
      },
      barHeight: {
        type: Number,
        default: 24
      },
      barRadius: {
        type: Number,
        default: 12
      },
      value: {
        type: Number,
        default: 0
      }
    },
    computed: {
      runWayStyle() {
        const {
          barWidth,
          barHeight,
          barRadius
        } = this
        return {
          width: barWidth + 'px',
          height: barHeight + 'px',
          borderRadius: barRadius + 'px'
        }
      },
      progressStyle() {
        const {
          value,
          barWidth,
          barHeight,
          barColor,
          barImage,
          barRadius
        } = this
        const newValue = value < 0 ? 0 : (value > 100 ? 100 : value)
        return {
          backgroundColor: barColor,
          backgroundImage: barImage,
          borderRadius: barRadius + 'px',
          height: barHeight + 'px',
          width: newValue / 100 * barWidth + 'px'
        }
      }
    }
  }

</script>
