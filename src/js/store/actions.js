/**
 * @file main actions
 * @author jianghh
 * @date 2018/5/09
 */

// export const login = async ({
//   commit
// }, params) => {
//   let res = await api('login').post(params)
//   let userInfo = res.data.resultdata
//   commit('updateUserInfo', userInfo)
//   return userInfo
// }

export const updateUserInfo = ({
  commit
}, value) => {
  commit('updateUserInfo', value)
}

export const updateTabIndex = ({
  commit
}, num) => {
  commit('updateTabIndex', num)
}
