<template>
  <div class="media-list-container">
    <ul class="media-list">
      <li class="media-item" v-for="item of list" :key="item.id">
        <div class="image-box" @click="showDialog(item.type, item.url || item.image)">
          <img :src="item.image" :alt="item.name">
          <div v-if="item.type === '视频'" class="play video" title="播放视频"></div>
          <div v-else class="play image" title="放大查看图片"></div>
        </div>
        <p class="name">{{item.name}}</p>
        <p>类型：{{item.type}}</p>
        <p>上传时间：{{item.time}}</p>
        <div class="hover-operate">
          <el-button size="mini" type="primary">设为广告</el-button>
          <el-button size="mini" type="danger" @click="deleteMedia">删除资源</el-button>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <!-- dialog -->
    <div class="dialog" :style="{display: dialogData.show ? 'flex' : 'none'}" @click="hideDialog">
      <img v-if="dialogData.type === 1" :src="dialogData.path" alt="">
      <div v-else-if="dialogData.type === 2" :style="{width: '1000px', height: '600px'}" @click.stop="() => {}">
        <video ref="video" :src="dialogData.path" width="1000" height="600" controls autoplay></video>
      </div>
    </div>    
  </div>
</template>

<script>
  import {MessageBox, Message} from 'element-ui';

  export default {
    props: {
      list: Array
    },
    data () {
      return {
        dialogData: {
          show: false,
          type: 0,
          path: '',
          width: '0',
          height: '0'
        }
      }
    },
    methods: {
      deleteMedia () {
        MessageBox.confirm('确定删除该资源？', {
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              Message({
                type: 'success',
                message: '资源删除成功！',
                center: true
              });
            }
          }
        })
      },
      hideDialog () {
        this.dialogData.show = false;
        this.$refs.video.pause();
      },
      showDialog (type, path) {
        const {clientWidth, clientHeight} = document.documentElement;
        this.dialogData.path = path;

        if (type === '图片') this.dialogData.type = 1;
        else if (type === '视频') {
          this.dialogData.type = 2;
          this.$nextTick(() => {
            this.$refs.video.load();
          })
        }
        this.dialogData.show = true;
      }
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
        margin: 0 20px 30px 10px;
        border-radius: 4px;
        border: 1px solid #d8d8d8;
        box-shadow: 4px 4px 8px #f2f2f2;
        position: relative;
        &:hover  {
          border-color: #409EFF;

          .hover-operate {
            display: block;
            border: 1px solid #409EFF;
            border-top: 0;
          }
        }
      }
      p {
        color: #999;
        font-size: 13px;
        line-height: 1.8;
        &.name {
          color: #303133;
          text-align: center;
          border-bottom: 1px dotted #e6e6e6;
          padding-bottom: 4px;
          margin-bottom: 4px;
        }
      }
    }
    .image-box {
      position: relative;
      width: 180px;
      height: 100px;
      margin-bottom: 20px;;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #fff;
      &:hover .play {
        display: block
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
      .play {
        display: none;
        position: absolute;
        width: 64px;
        height: 64px;
        left: 50%;
        top: 50%;
        margin: -32px 0 0 -32px;
        &.video {
          background: url(../assets/images/play.png);
        }
        &.image {
          background: url(../assets/images/zoom-in.png);
        }
      }
    }
    .hover-operate {
      display: none;
      overflow: hidden;
      padding: 20px 0;
      box-sizing: content-box;
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      background-color: #fff;
      z-index: 2;
      transform: translate(-1px, -3px);
      transition: height .4s ease-out;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
    }
    .el-pagination {
      font-weight: 400;
      text-align: center;
    }
    .dialog {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(100, 100, 100, .5);
      z-index: 2001;
      cursor: pointer;

      img { max-width: 80%; max-height: 90%;}
    }
  }
</style>
