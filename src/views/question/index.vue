<template>
  <div class="wrapper">
    <t-minibar title="提问" right-text="发布" :right-text-color="rightTextColor" @minibarRightButtonClicked="publish"></t-minibar>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'Queston',
    components: {
      TMinibar
    },
    data: () => ({
      rightTextColor: '#CCCCCC'
    }),
    methods: {
      publish() {}
    }
  }

</script>

<style scoped lang="scss">
  @import "../../css/common.scss";

</style>
