import * as types from './mutation-types'

const mutations = {
  [types.SET_USERNAME](state, userName) {
    state.userName = userName
  },
  [types.SET_SHOWSEARCHBAR](state, isShowSearchBar) {
    state.isShowSearchBar = isShowSearchBar
  },
  [types.SET_MARKERLIST](state, markerList) {
    state.markerList = markerList
  },
}

export default mutations