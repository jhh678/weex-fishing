<template>
  <div class="wrapper">
    <scroller :style="contentStyle">
      <div class="user-info-wrap">
        <image class="avatar" :src="userInfo.avatar" resize="cover" @click="openUserInfo" />
        <div class="user-name-signature" @click="openUserInfo">
          <text class="user-name">{{userInfo.name}}</text>
          <text class="user-signature">{{userInfo.signature}}</text>
        </div>
        <div class="arrow-icon-wrap" @click="openUserInfo">
          <t-icon :icon-style="{color: '#FFFFFF'}" name="more"></t-icon>
        </div>
      </div>

      <div class="user-data-wrap">
        <div class="user-data-item hover-shadow" v-for="(item, index) in userInfo.data" :key="index" @click="openPage(item)">
          <text class="user-data-num">{{item.num}}</text>
          <text class="user-data-title">{{item.title}}</text>
        </div>
      </div>

      <div class="">
        <t-cell v-for="(item, index) in pageEntrys" :key="index" :title="item.entryName" :extra-content="item.extraContent" :has-arrow="true"
          :has-bottom-line="item.hasBottomLine" :has-margin="item.hasMargin" @cellClicked="openPage(item)">
          <t-icon slot="label" :icon-style="item.iconStyle" :name="item.iconName"></t-icon>
        </t-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
  import TCell from '@/components/cell'
  import TIcon from '@/components/icon'
  import {
    localStore,
    setStatusBarStyle
  } from '@/js/utils/index'

  export default {
    name: 'MyIndex',
    components: {
      TCell,
      TIcon
    },
    data: () => ({
      contentStyle: {
        height: 0
      },
      userInfo: {
        avatar: 'https://ttyun-image.oss-cn-shenzhen.aliyuncs.com/ttyunapp/15324807923759870.jpg',
        name: '立即登录',
        signature: '签名是一种态度，点击可编辑',
        data: [{
          title: '发布',
          num: 0,
          routePath: '/my/my-publish'
        }, {
          title: '关注',
          num: 0,
          routePath: '/my/my-focus'
        }, {
          title: '粉丝',
          num: 0,
          routePath: '/my/my-fans'
        }, {
          title: '消息',
          num: 0,
          routePath: '/my/my-message'
        }]
      },
      pageEntrys: [{
        iconStyle: {
          color: '#1C69D3'
        },
        iconName: 'apply_auth',
        entryName: '申请认证',
        routePath: '/my/apply-auth',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#00D16F'
        },
        iconName: 'crop',
        entryName: '关注作物',
        routePath: '/my/focus-crop/index',
        hasMargin: true
      }, {
        iconStyle: {
          color: '#1C69D3'
        },
        iconName: 'logo',
        entryName: '检测新版本',
        extraContent: '1.0.1',
        hasMargin: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '结果页面演示',
        routePath: '/result',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '按钮演示',
        routePath: '/my/button-demo',
        hasBottomLine: true
      }, {
        iconStyle: {
          color: '#ff5e00'
        },
        iconName: 'search',
        entryName: '对话框演示',
        routePath: '/my/dialog-demo',
        hasMargin: true
      }]
    }),
    created() {
      localStore.get('contentHeight', data => {
        this.contentStyle = {
          height: data
        }
      })
    },
    destroyed() {
      setStatusBarStyle()
    },
    methods: {
      openUserInfo() {

      },
      openPage(item) {
        if (item.routePath) {
          this.$router.push({
            path: item.routePath
          })
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  @import "../../css/common.scss";

  .user-info-wrap {
    flex-direction: row;
    align-items: center;
    width: 750px;
    height: 360px;
    margin-bottom: 106px;
    background-image: linear-gradient(to right, #00A0E6, #1C69D3);
  }

  .avatar {
    width: 136px;
    height: 136px;
    border-radius: 68px;
    margin-left: 24px;
    margin-right: 24px;
    background-color: #CCCCCC;
  }

  .user-name-signature {
    flex: 1;
    flex-direction: column;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .user-name {
    color: #fff;
    font-size: 34px;
    line-height: 42px;
  }

  .user-signature {
    color: #fff;
    font-size: 30px;
    line-height: 40px;
  }

  .arrow-icon-wrap {
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
  }

  .user-data-wrap {
    position: absolute;
    top: 272px;
    left: 24px;
    width: 702px;
    height: 170px;
    border-radius: 20px;
    background-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .user-data-item {
    flex: 1;
    height: 170px;
    align-items: center;
    justify-content: center;
  }

  .user-data-num {
    font-size: 34px;
    line-height: 42px;
    color: #333333;
    margin-bottom: 8px;
  }

  .user-data-title {
    font-size: 30px;
    line-height: 40px;
    color: #333333;
  }

</style>
