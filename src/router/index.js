import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Media from '../components/Media';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    }
  ]
})
