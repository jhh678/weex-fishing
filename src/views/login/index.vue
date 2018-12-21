<template>
  <div class="wrapper">
    <t-minibar></t-minibar>
    <text>登录页面</text>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'Login',
    components: {
      TMinibar
    },
    data: () => ({}),
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  @import "../../css/common.scss";

</style>
