import * as types from './mutation-types'

export const setUserInfo = (context, userInfo)=> {
  context.commit(types.SET_USERINFO, userInfo)
}
export const setShowSearchBar = (context, isShowSearchBar)=> {
  context.commit(types.SET_SHOWSEARCHBAR, isShowSearchBar)
}
export const setMarkerList = (context, markerList)=> {
  context.commit(types.SET_MARKERLIST, markerList)
}