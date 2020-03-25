import Cookies from 'js-cookie'
import axios from 'utils/ajax'
import { config } from 'utils/config'
// import Auth from '@/utils/auth'
// import {listToTree} from "@/utils/common";
// import { Decrypt, Encrypt } from "@/utils/cryptojs";
const state = {
  token: '',
  navList: []
}

const mutations = {
  setNavList: (state, data) => {
    state.navList = data
  },

  setToken: (state, data) => {
    if (data) {
      sessionStorage.setItem('userToken', data)
      sessionStorage.setItem('loginSatus', true)

    } else {
      sessionStorage.removeItem('userToken')
      sessionStorage.removeItem('loginSatus')
    }
    state.token = data
  }
}

const actions = {
  // 邮箱登录
  loginByEmail({ commit }, userInfo) {
    return new Promise((resolve) => {
      axios({
        url: config.server + '/api/system/login',
        method: 'post',
        headers: { "Content-Type": "application/json" },
        data: userInfo
        /*data: Encrypt(JSON.stringify({
          ...userInfo
        }))*/
      }).then(res => {
        if (res) {
          //res = JSON.parse(Decrypt(res))
          if (res.code == 1) {
            res.login = true;
            commit('setToken', res.detail.token)
          }
          resolve(res)
        } else {
          commit('setToken', '')
        }

      })
    });
  },

  // 登出
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('setNavList', [])
      commit('setToken', '')
      resolve()
    })
  },

  // 重新登录
  relogin ({ dispatch, commit, state }) {
    return new Promise((resolve) => {
      // 根据Token进行重新登录
      let token = Cookies.get('token')
      if (!token) {
        // 这里需要根据实际情况确认token刷新协议
        // 若直接使用时因state.token不存在，将无法获得新的token
        dispatch('getNewToken').then(() => {
          commit('setToken', state.token)
        })
      } else {
        commit('setToken', token)
      }
      resolve()
    })
  },

  // 获取新Token
  getNewToken ({ commit, state }) {
    return new Promise((resolve) => {
      axios({
        url: '/getToken',
        method: 'get',
        param: {
          token: state.token
        }
      }).then((res) => {
        commit('setToken', res.token,resolve)
      })
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
