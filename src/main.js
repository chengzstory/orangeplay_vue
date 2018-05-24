// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
import req from './api/axios.js';
Vue.prototype.$req = req;
Vue.use(VueAwesomeSwiper)
Vue.use(iView)
Vue.filter('format_price', function (val) {
  return val === 0 ? '免费游戏' : val + '元';
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
