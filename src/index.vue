<template>
  <div class="wrapper">
    <router-view></router-view>
    <t-loading v-bind="loadingProps"></t-loading>
    <t-toast v-bind="toastProps"></t-toast>
  </div>
</template>

<script>
  import {
    localStore
  } from '@/js/utils/index'
  import TLoading from '@/components/loading'
  import TToast from '@/components/toast'

  export default {
    name: 'App',
    components: {
      TLoading,
      TToast
    },
    computed: {
      loadingProps() {
        return this.$store.state.loadingProps
      },
      toastProps() {
        return this.$store.state.toastProps
      }
    },
    mounted() {
      localStore.get('userInfo', data => {
        data = data || {}
        this.$store.dispatch('updateUserInfo', data)
      })
    }
  }

</script>

<style scoped lang="scss">
  @import "./css/common.scss";

</style>
