import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Media from '../components/Media';
import MediaUpload from '../components/MediaUpload';
import Displaying from '../components/Displaying';
import AdvertiseSet from '../components/AdvertiseSet';
import Advertisement from '../components/Advertisement';

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
    },
    {
      path: '/media/upload',
      name: 'MediaUpload',
      component: MediaUpload
    },
    {
      path: '/advertisement',
      name: 'Advertisement',
      component: Advertisement
    },
    {
      path: '/displaying',
      name: 'Displaying',
      component: Displaying
    }
  ]
})
