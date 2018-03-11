<template>
  <div class="media-list-container">
    <!-- 列表表格 -->
    <div class="media-table">
      <el-table :data="list" stripe border>
        <el-table-column prop="name" label="资源名称" width="auto"></el-table-column>
        <el-table-column prop="type" label="类型" width="100"></el-table-column>
        <el-table-column prop="time" label="上传时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="showDialog(scope.$index, list)" type="primary" size="small">预览</el-button>
            <el-button @click.native.prevent="openInNewWindow(scope.$index, list)" type="primary" size="small">打开链接</el-button>
            <el-button @click.native.prevent="deleteMedia(scope.$index, list)" type="warning" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
      deleteMedia (index, list) {
        const name = list[index].name;

        this.$messagebox.confirm(`确定删除资源：${name}？`, {
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              this.$message({
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
        this.$refs.video && this.$refs.video.pause();
      },
      showDialog (index, list) {
        const selectedItem = list[index];
        const {clientWidth, clientHeight} = document.documentElement;
        const {type, url} = selectedItem;
        this.dialogData.path = url;

        if (type === '图片') this.dialogData.type = 1;
        else if (type === '视频') {
          this.dialogData.type = 2;
          this.$nextTick(() => {
            this.$refs.video.load();
          })
        }
        this.dialogData.show = true;
      },
      openInNewWindow (index, list) {
        window.open(list[index].url);
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
    .media-table {
      margin: 10px 10px 30px;
      .el-table { width: 100%;}
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
