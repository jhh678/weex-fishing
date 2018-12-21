<template>
  <div class="wrapper">
    <t-minibar title="个性签名" right-text="保存" :right-text-color="rightTextColor" @minibarRightButtonClicked="save"></t-minibar>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'EditSignature',
    components: {
      TMinibar
    },
    data: () => ({
      rightTextColor: '#CCCCCC'
    }),
    methods: {
      save() {
        this.$router.push({
          path: '/my/user-info/index'
        })
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "../../../css/common.scss";

</style>
