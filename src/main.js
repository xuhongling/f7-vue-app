// Import Vue
import Vue from 'vue'
import store from './store'
import axios from '@/utils/ajax'

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'

// Import Icons and App Custom Styles
import 'static/css/icons.css'
import 'static/css/reset.css'

// Import App Component
import App from './App.vue'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue)

Vue.prototype.$axios = axios

// Init App
new Vue({
	store,
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    app: App
  },
})