<template>
  <div class="media-list-container">
    <media-list :list="mediaList"></media-list>
  </div>
</template>

<script>
  import MediaList from './MediaList';

  export default {
    data () {
      return {
        mediaList: [
          {id: 1, type: '图片', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 2, type: '视频', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 3, type: '视频', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 4, type: '图片', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 5, type: '视频', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 6, type: '视频', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 7, type: '视频', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'},
          {id: 8, type: '图片', image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=45711459,433975450&fm=27&gp=0.jpg', name: '恒山钢铁侠加油机', time: '2018-03-01'}
        ]
      }
    },
    components: {MediaList}
  }
</script>