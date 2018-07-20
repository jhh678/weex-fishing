<template>
  <div class="wrapper">
    <div class="header">
      <wxc-minibar title="我的">
        <div slot="left"></div>
        <div slot="right"></div>
      </wxc-minibar>
    </div>
    <div class="content" :style="contentStyle">
      <div class="user-info-wrap">
        <div class="ueser-avatar">
          <image class="avatar" :src="userInfo.avatar" resize="cover" />
        </div>
        <div class="user-name-type">
          <text class="user-name">{{userInfo.name}}</text>
          <div class="user-type">
            <wxc-icon name="cry"></wxc-icon>
            <text>{{userInfo.type}}</text>
          </div>
        </div>
      </div>
      <div class="panel panel-wallet">
        <text class="my-wallet">我的钱包</text>
        <div class="my-integral">
          <text class="integral-num">{{userInfo.integralNum}}</text>
          <text class="currency">积分</text>
        </div>
      </div>

      <div class="panel">
        <text class="title">我的订单</text>
        <div class="order-status">
          <div class="order-status-item hover-shadow" v-for="(status, index) in orderStatus" :key="index" @click="openOrderList(index)">
            <wxc-icon :name="status.iconName"></wxc-icon>
            <text class="text">{{status.name}}</text>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="page-entry-item hover-shadow" v-for="(item, index) in pageEntrys" :key="index" @click="openPage(item)">
          <wxc-icon :icon-style="item.iconStyle" :name="item.iconName"></wxc-icon>
          <text class="entry-name">{{item.entryName}}</text>
          <wxc-icon name="more"></wxc-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    WxcMinibar,
    WxcIcon,
    WxcCell,
    Utils
  } from 'weex-ui'

  export default {
    name: 'HomeIndex',
    components: {
      WxcMinibar,
      WxcIcon,
      WxcCell,
      Utils
    },
    data() {
      return {
        contentStyle: {
          height: 0
        },
        userInfo: {
          avatar: 'data:image/jpeg;base64,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',
          name: '风云逐月',
          type: '超级无敌会员',
          integralNum: 8888
        },
        orderStatus: [{
          name: '待付款',
          iconName: 'clock'
        }, {
          name: '待发货',
          iconName: 'clock'
        }, {
          name: '待收货',
          iconName: 'clock'
        }, {
          name: '已完成',
          iconName: 'clock'
        }, {
          name: '售后',
          iconName: 'clock'
        }],
        pageEntrys: [{
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '我的拼团',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '我的秒杀',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '成为分销商',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '我的优惠券',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '领券中心',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '我的收藏',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '收货地址',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '绑定手机号',
          routePath: '/my/group-buy'
        }, {
          iconStyle: {
            color: '#ff5e00'
          },
          iconName: 'help',
          entryName: '商户入驻',
          routePath: '/my/group-buy'
        }]
      }
    },
    created() {
      this.contentStyle = {
        height: (Utils.env.getPageHeight() - 210) + 'px'
      }
    },
    methods: {
      openOrderList(index) {
        this.$router.push({
          path: '/my/order-list',
          query: {
            index: index
          }
        })
      },
      openPage(item) {
        this.$router.push({
          path: item.routePath
        })
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

  .content {
    flex: 1;
    overflow: auto;
  }

  .user-info-wrap {
    flex-direction: row;
    align-items: center;
    width: 750px;
    height: 240px;
    padding: 0 30px;
    background-color: rgb(255, 201, 0);
  }

  .ueser-avatar {
    border-radius: 100px;
    margin-right: 24px;
    overflow: hidden;
  }

  .ueser-avatar .avatar {
    width: 100px;
    height: 100px;
    background-color: #ccc;
  }

  .user-name-type {
    flex: 1;
    flex-direction: column;
  }

  .user-name {
    color: #fff;
  }

  .user-type {
    flex-direction: row;
  }

  .user-type text {
    color: #fff;
    font-size: 16px;
  }

  .panel {
    width: 750px;
    margin-bottom: 20px;
    background-color: #fff;
  }

  .panel .title {
    height: 80px;
    line-height: 80px;
    padding: 0 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
  }

  .panel-wallet {
    flex-direction: row;
    align-items: center;
    height: 160px;
  }

  .my-wallet {
    width: 240px;
    height: 160px;
    line-height: 160px;
    text-align: center;
    color: #333;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #ddd;
  }

  .my-integral {
    flex: 1;
    align-items: center;
  }

  .order-status {
    flex-direction: row;
    align-items: center;
    height: 160px;
  }

  .order-status-item {
    align-items: center;
    justify-content: center;
    height: 160px;
    line-height: 160px;
    flex: 1;
  }

  .order-status-item .text {
    text-align: center;
  }

  .page-entry-item {
    flex-direction: row;
    align-items: center;
    padding: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
  }

  .page-entry-item .entry-name {
    flex: 1;
    padding: 0 24px;
    color: #333;
  }

</style>
