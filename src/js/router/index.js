/* global Vue */
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Result from '@/views/result.vue'
import PostIndex from '@/views/post/index.vue'
import QuestionIndex from '@/views/question/index.vue'
import QuestionInviteExpert from '@/views/question/invite-expert.vue'
import QuestionSelectCrop from '@/views/question/select-crop.vue'
import LoginIndex from '@/views/login/index.vue'
import LoginServiceProtocol from '@/views/login/service-protocol.vue'
import UserInfoIndex from '@/views/my/user-info/index.vue'
import UserInfoEditNickname from '@/views/my/user-info/edit-nickname.vue'
import UserInfoEditSignature from '@/views/my/user-info/edit-signature.vue'
import MyPublish from '@/views/my/my-publish.vue'
import MyFocus from '@/views/my/my-focus.vue'
import MyFans from '@/views/my/my-fans.vue'
import MyMessage from '@/views/my/my-message.vue'
import ApplyAuth from '@/views/my/apply-auth.vue'
import FocusCropIndex from '@/views/my/focus-crop/index.vue'
import FocusCropAddCrop from '@/views/my/focus-crop/add-crop.vue'
import VersionInfo from '@/views/my/version-info.vue'

import ButtonDemo from '@/views/my/button-demo.vue'
import DialogDemo from '@/views/my/dialog-demo.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/post/index',
      name: 'PostIndex',
      component: PostIndex
    },
    {
      path: '/question/index',
      name: 'QuestionIndex',
      component: QuestionIndex
    },
    {
      path: '/question/invite-expert',
      name: 'QuestionInviteExpert',
      component: QuestionInviteExpert
    },
    {
      path: '/question/select-crop',
      name: 'QuestionSelectCrop',
      component: QuestionSelectCrop
    },
    {
      path: '/login/index',
      name: 'LoginIndex',
      component: LoginIndex
    },
    {
      path: '/login/service-protocol',
      name: 'LoginServiceProtocol',
      component: LoginServiceProtocol
    },
    {
      path: 'my/user-info/index',
      name: 'UserInfoIndex',
      component: UserInfoIndex
    },
    {
      path: 'my/user-info/edit-nickname',
      name: 'UserInfoEditNickname',
      component: UserInfoEditNickname
    },
    {
      path: 'my/user-info/edit-signature',
      name: 'UserInfoEditSignature',
      component: UserInfoEditSignature
    },
    {
      path: '/my/my-publish',
      name: 'MyPublish',
      component: MyPublish
    },
    {
      path: '/my/my-focus',
      name: 'MyFocus',
      component: MyFocus
    },
    {
      path: '/my/my-fans',
      name: 'MyFans',
      component: MyFans
    },
    {
      path: '/my/my-message',
      name: 'MyMessage',
      component: MyMessage
    },
    {
      path: '/my/apply-auth',
      name: 'ApplyAuth',
      component: ApplyAuth
    },
    {
      path: '/my/focus-crop/index',
      name: 'FocusCropIndex',
      component: FocusCropIndex
    },
    {
      path: '/my/focus-crop/add-crop',
      name: 'FocusCropAddCrop',
      component: FocusCropAddCrop
    },
    {
      path: '/my/version-info',
      name: 'VersionInfo',
      component: VersionInfo
    },
    {
      path: '/my/button-demo',
      name: 'ButtonDemo',
      component: ButtonDemo
    },
    {
      path: '/my/dialog-demo',
      name: 'DialogDemo',
      component: DialogDemo
    }
  ]
})
