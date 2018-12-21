<template>
  <div class="wrapper">
    <t-minibar title="关注作物" right-text="添加作物" @minibarRightButtonClicked="addCrop"></t-minibar>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'FocusCrop',
    components: {
      TMinibar
    },
    data: () => ({
      rightTextColor: '#CCCCCC'
    }),
    methods: {
      addCrop() {
        this.$router.push({
          path: '/my/focus-crop/add-crop'
        })
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "../../../css/common.scss";

</style>
