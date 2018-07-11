<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <HelloWorld/>
    <wxc-button text="Open Popup" @wxcButtonClicked="buttonClicked"></wxc-button>
    <wxc-popup width="500" pos="left" :show="isShow" @wxcPopupOverlayClicked="overlayClicked"></wxc-popup>
    <wxc-button text="Jump" @wxcButtonClicked="jumpClicked"></wxc-button>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import {
    WxcButton,
    WxcPopup
  } from 'weex-ui'

  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    name: 'App',
    components: {
      HelloWorld,
      WxcButton,
      WxcPopup
    },
    data() {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
        isShow: false
      }
    },
    methods: {
      buttonClicked() {
        this.isShow = true
      },
      overlayClicked() {
        this.isShow = false
      },
      jumpClicked(event) {
        navigator.push({
          url: 'views/recycle-list-demo.js',
          animated: 'true'
        }, event => {
          modal.toast({
            message: 'callback: ' + event
          })
        })
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 424px;
    height: 200px;
  }

  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }

  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }

</style>
