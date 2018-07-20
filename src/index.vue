<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    }
  }

</script>

<style scoped lang="postcss">
  .wrapper {
    width: 750px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fafafa;
    font-size: 32px;
    font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

</style>
