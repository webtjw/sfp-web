import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import MediaList from '../components/MediaList';

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
      name: 'MediaList',
      component: MediaList
    }
  ]
})
