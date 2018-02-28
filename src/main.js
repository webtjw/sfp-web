import Vue from 'vue';
import App from './App';
import router from './router';
import initialize from './utils/initialize';
import {
  Container,
  Main,
  Aside,
  Menu,
  MenuItem
} from 'element-ui';
import 'reset.css';

initialize();
Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
