import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import './assets/css/common.css'
Vue.config.productionTip = false

new Vue({
  router,
  iView,
  render: h => h(App)
}).$mount('#app')
