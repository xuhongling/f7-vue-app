import * as types from './mutation-types'

const mutations = {
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_SHOWSEARCHBAR](state, isShowSearchBar) {
    state.isShowSearchBar = isShowSearchBar
  },
  [types.SET_MARKERLIST](state, markerList) {
    state.markerList = markerList
  },
}

export default mutations