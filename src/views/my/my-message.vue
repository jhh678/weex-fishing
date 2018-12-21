<template>
  <div class="wrapper">
    <t-minibar title="我的消息"></t-minibar>
  </div>
</template>

<script>
  import TMinibar from '@/components/minibar'

  export default {
    name: 'MyMessage',
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
