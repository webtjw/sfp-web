<template>
  <div class="media-list-container">
    <ul class="media-list">
      <li class="media-item" v-for="item of list" :key="item.id">
        <div class="image-box">
          <img :src="item.image" :alt="item.name">
        </div>
        <p class="name">{{item.name}}</p>
        <p>类型：{{item.type}}</p>
        <p>上传时间：{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    }
  }
</script>

<style lang="scss" scoped>
  .media-list-container {
    h1 {
      margin-bottom: 30px;
      padding: 10px 0 20px;
      border-bottom: 1px solid #e6e6e6;
      text-indent: 10px;
      font-size: 22px;
    }
    .media-list {
      font-size: 0;

      li {
        padding: 20px 10px;
        display: inline-block;
        margin: 0 30px 40px 10px;
        border-radius: 4px;
        border: 1px solid #d8d8d8;
        box-shadow: 4px 2px 8px #f2f2f2;
        &:hover  {
          border-color: #409EFF;
        }
      }
      p {
        font-size: 13px;
        line-height: 1.8;
        &.name {
          text-align: center;
          border-bottom: 1px dotted #e6e6e6;
          padding-bottom: 4px;
          margin-bottom: 4px;
        }
      }
    }
    .image-box {
      width: 180px;
      height: 100px;
      margin-bottom: 20px;;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #fff;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
