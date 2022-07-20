import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
window.$ = $;
new Vue({
  router,
  data: function() {
    return {
      title: '',
    }
  },
  render: h => h(App)
}).$mount('#app')
