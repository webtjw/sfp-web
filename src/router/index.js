import Vue from 'vue'
import Router from 'vue-router'
import MediaList from '../components/MediaList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MediaList',
      component: MediaList
    }
  ]
})
