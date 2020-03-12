import * as types from './mutation-types'

export const logIn = (context)=> {
  context.commit(types.LOGIN)
}
export const logOut = (context)=> {
  context.commit(types.LOGOUT)
}
export const setUserName = (context, userName)=> {
  context.commit(types.SET_USERNAME, userName)
}