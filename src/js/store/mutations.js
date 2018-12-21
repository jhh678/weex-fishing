export const updateUserInfo = (state, value) => {
  state.userInfo = value
}

export const updateTabIndex = (state, n) => {
  state.currentTabIndex = n
}

export const updateLoadingProps = (state, obj) => {
  state.loadingProps = Object.assign({}, state.loadingProps, obj)
}

export const updateToastProps = (state, obj) => {
  state.toastProps = Object.assign({}, state.toastProps, obj)
}
