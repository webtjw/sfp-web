import Vue from 'vue';
import App from './App';
import router from './router';
import initialize from './utils/initialize';
import {
  Container,
  Main,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col
} from 'element-ui';
import VeLine from 'v-charts/lib/line';
import VePie from 'v-charts/lib/pie';
import 'reset.css';
import './assets/style/common.scss';

Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Row)
Vue.use(Col)
Vue.component(VeLine.name, VeLine);
Vue.component(VePie.name, VePie);

Vue.config.productionTip = false;

initialize();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
