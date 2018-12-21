<template>
  <div class="wrapper">
    <t-minibar title="我的关注"></t-minibar>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'MyFocus',
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
