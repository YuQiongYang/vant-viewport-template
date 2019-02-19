// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Introducing plugins
import VueLazyload from 'vue-lazyload'
import Viewer from 'v-viewer'

import '@/style/common.scss'
import 'viewerjs/dist/viewer.css'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '//asset.ibanquan.com/image/5c6282be20663d45c500057a/s.png?v=1549959870',
  loading: '//asset.ibanquan.com/image/5c6b72754194e511f20015a5/s.gif?v=1550545526',
  attempt: 1
})
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
