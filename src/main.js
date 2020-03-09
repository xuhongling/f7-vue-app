import Vue from 'vue'
import App from './App.vue'

// Import Framework7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'
// Import Framework7-Vue with all components
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import 'framework7-icons'
import 'framework7-icons/css/framework7-icons.css'
import 'assets/css/reset.css'

// Init plugin and register all components
Framework7.use(Framework7Vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
