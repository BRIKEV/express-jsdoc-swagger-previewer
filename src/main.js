import Vue from 'vue';
import VueNotification from 'vue-notification';
import VueMultiselect from 'vue-multiselect';
import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false;

Vue.use(VueNotification);
Vue.component('VueMultiselect', VueMultiselect);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
