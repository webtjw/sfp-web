<template>
  <div class="media-list-container">
    <media-search></media-search>
    <media-list :list="mediaList"></media-list>
  </div>
</template>

<script>
  import MediaList from './MediaList';
  import MediaSearch from './MediaSearch';
  import {getMediaList} from '../actions';
  import bigImage from '../assets/images/f4c1445fa657c460365e1a9ca70703165378819c.jpg';
  import demoVideo from '../assets/videos/demo.mp4';

  // {id: 1, type: '图片', image: bigImage, name: '恒山钢铁侠加油机', time: '2018-03-01'},
  // {id: 2, type: '视频', image: bigImage, name: '恒山钢铁侠加油机', time: '2018-03-01', url: demoVideo},
  export default {
    data () {
      return {
        mediaList: [
          {id: 1, type: '图片', image: bigImage, name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 2, type: '视频', image: bigImage, name: '恒山钢铁侠加油机', time: '2018-03-01', url: demoVideo}
        ]
      }
    },
    methods: {
      async loadMedia () {
        let result = await getMediaList();
        // http://wc.shaojun.xyz:8221/
        console.log(result)
      }
    },
    mounted () {
      this.loadMedia();
    },
    components: {MediaList, MediaSearch}
  }
</script>