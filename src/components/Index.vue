<template>
  <article class="index-container">
    <!-- ad -->
    <index-advertise></index-advertise>
    <!-- media -->
    <index-media></index-media>
  </article>
</template>

<script>
  import IndexAdvertise from './IndexAdvertise';
  import IndexMedia from './IndexMedia';

  export default {
    components: {IndexAdvertise, IndexMedia}
  }
</script>

<style lang="scss">
  .index-container {
    color: #303133;

    .strong { margin: 0 8px; color: #409EFF;}
    .big { font-size: 24px;}
    .normal { font-size: 20px;}
    .index-item {
      margin-bottom: 50px;

      h1 {
        margin-bottom: 30px;
        padding: 10px 0 20px;
        border-bottom: 1px solid #e6e6e6;
        text-indent: 10px;
        font-size: 22px;
      }
      .content {
        padding-left: 10px;

        > ul {
          padding-top: 30px;
          font-size: 0;
        }
        .chart-item {
          margin: 0 50px 0 30px;
          font-size: 14px;
          display: inline-block;
          text-align: center;
        }
      }
    }
  }
</style>
