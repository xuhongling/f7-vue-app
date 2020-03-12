import * as types from './mutation-types'

export const selectPlay = ({commit, state},{list})=> {
  commit(types.SET_SEQUENCE_LIST, list)
}
