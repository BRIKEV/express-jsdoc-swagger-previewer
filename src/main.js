import Vue from 'vue';
import VueNotification from 'vue-notification';
import App from './App.vue';
import router from './router';
import '@/assets/css/reset.css';

Vue.config.productionTip = false;

Vue.use(VueNotification);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
