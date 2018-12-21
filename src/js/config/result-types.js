/**
 * CopyRight (C) 2017-2022 TTYun Group Holding Limited.
 * Created by Tw93 on 2018/08/10.
 */
import {
  resultPost,
  resultComment,
  resultQuestion,
  resultAttention,
  resultFans,
  resultSysMsg,
  resultCrop,
  resultOffline,
  resultApplyFail
} from '@/js/config/image-base64'

export default {
  post: {
    pic: resultPost,
    content: '抱歉出错了，我们正在全力解决中',
    desc: '',
    buttonText: '再试一次',
    title: '出错啦'
  },
  comment: {
    pic: resultComment,
    content: '主人，这里什么都没有找到',
    desc: '',
    buttonText: '再试一次',
    title: '暂无商品'
  },
  question: {
    pic: resultQuestion,
    content: '哎呀，没有网络了......',
    desc: '',
    buttonText: '刷新一下',
    title: '无网络'
  },
  attention: {
    pic: resultAttention,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  fans: {
    pic: resultFans,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  sysMsg: {
    pic: resultSysMsg,
    content: '哎呀，定位失败了......',
    desc: '',
    buttonText: '刷新一下',
    title: '定位失败'
  },
  crop: {
    pic: resultCrop,
    content: '暂无关注的作物',
    title: '关注作物',
    rightText: '添加作物',
    rightButtonHandle: () => {
      this.$router.back()
    }
  },
  offine: {
    pic: resultOffline,
    content: '网路竟然崩溃了',
    desc: '别紧张，试试看刷新页面~',
    buttonText: '刷新',
    buttonType: 'white',
    buttonSize: 'small',
    buttonTextStyle: { color: '#333333' },
    buttonHandle: () => {
      this.$router.back()
    },
    title: '无网络'
  },
  applyFail: {
    pic: resultApplyFail,
    content: `您的信息验证不通过
              因为XXX不通过`,
    buttonText: '重新申请',
    buttonType: 'blue',
    buttonSize: 'medium',
    buttonStyle: { height: '96px', borderRadius: '48px' },
    buttonHandle: () => {
      this.$router.back()
    },
    title: '认证申请'
  }
}