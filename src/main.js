// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import less from 'less'

import axios from 'axios'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(less)
Vue.use(Vuex)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
