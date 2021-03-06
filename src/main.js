// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import Axios from 'axios';
import './assets/css/public.scss'
import Vuex from 'vuex'
import store from './store/store'


Vue.use(Vuex)
Vue.use(iView);
Vue.config.productionTip = false
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.Axios = Axios

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
