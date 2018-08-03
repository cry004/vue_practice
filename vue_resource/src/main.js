import Vue from 'vue';
import VueResource from 'vue_resource';
import App from './App.vue';

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
});
