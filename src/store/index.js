import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import vuexModules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  state,
  mutations,
  modules: vuexModules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})