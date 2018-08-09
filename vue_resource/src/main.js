import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-httptest-f32e3.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(responese => {
    responese.json = () => {
      return {
        messages: responese.body
      };
    };
  });
});
new Vue({
  el: '#app',
  render: h => h(App)
});
