import * as types from './mutation-types'

export const setUserName = (context, userName)=> {
  context.commit(types.SET_USERNAME, userName)
}
export const setShowSearchBar = (context, isShowSearchBar)=> {
  context.commit(types.SET_SHOWSEARCHBAR, isShowSearchBar)
}
export const setMarkerList = (context, markerList)=> {
  context.commit(types.SET_MARKERLIST, markerList)
}