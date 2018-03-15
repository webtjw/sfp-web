<template>
  <div class="media-list-container">
    <media-search></media-search>
    <media-list :list="mediaListAfter"></media-list>
  </div>
</template>

<script>
  import utils from '../utils/utils';
  import MediaList from './MediaList';
  import MediaSearch from './MediaSearch';
  import {getMediaList} from '../actions';

  export default {
    data () {
      return {
        mediaList: []
      }
    },
    computed: {
      mediaListAfter () {
        const {mediaList} = this;

        return mediaList.map(item => {

          return item;
        })
      }
    },
    methods: {
      async loadMedia () {
        let result = await getMediaList();
        
        if (Array.isArray(result) && result.length > 0) {
          this.mediaList = result.map(item => {
            return {name: item, type: utils.getFileType(item), time: '2015-01-08 01:08:08', url: `http://wc.shaojun.xyz:8221/${item}`}
          })
        }
        else this.mediaList = [];
      }
    },
    mounted () {
      this.loadMedia();
    },
    components: {MediaList, MediaSearch}
  }
</script>