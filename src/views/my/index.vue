<template>
  <div class="wrapper">
    <div class="header">
      <wxc-minibar title="我的">
        <div slot="left"></div>
        <div slot="right"></div>
      </wxc-minibar>
    </div>
    <scroller :style="contentStyle">
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
    </scroller>
  </div>
</template>

<script>
  import {
    WxcMinibar,
    WxcIcon,
    WxcCell,
    Utils
  } from 'weex-ui'
  import {
    getPageHeight
  } from '@/js/utils/index'

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
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533109519&di=731d03a72bb6b1180c2295fae417400f&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F140606%2F134G9D49-4.jpg',
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
        height: (getPageHeight() - 210) + 'px'
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

<style scoped lang="scss">
  @import "../../css/common.scss";

  .user-info-wrap {
    flex-direction: row;
    align-items: center;
    width: 750px;
    height: 240px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 30px;
    padding-right: 30px;
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
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 30px;
    padding-right: 30px;
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
    justify-content: center;
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
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
  }

  .page-entry-item .entry-name {
    flex: 1;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 24px;
    padding-right: 24px;
    text-align: left;
    color: #333;
  }

</style>
