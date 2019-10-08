import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './vuex'
import VueLazyload from 'vue-lazyload'
import loadingGif from './common/image/loading.gif'
import 'lib-flexible/flexible'
import './mockData/mockServer'

import HeaderSlot from './components/HeaderSlot'

Vue.use(VueLazyload, { loading: loadingGif })

Vue.config.productionTip = false
Vue.component('HeaderSlot', HeaderSlot)

Vue.store = store


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
