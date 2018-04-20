import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Media from '../components/Media';
import MediaUpload from '../components/MediaUpload';
import Displaying from '../components/Displaying';
import AdvertiseSet from '../components/AdvertiseSet';
import Advertisement from '../components/Advertisement';
import Login from '../components/Login';

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/media', name: 'Media', component: Media},
    {path: '/media/upload', name: 'MediaUpload', component: MediaUpload},
    {path: '/advertisement', name: 'Advertisement', component: Advertisement},
    {path: '/displaying', name: 'Displaying', component: Displaying},
    {path: '/login', name: 'Login', component: Login}
  ]
})
// 检查是否登录了
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    next('/login')
  } else next()
})

export default router
