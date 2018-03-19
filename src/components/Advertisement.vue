<template>
  <div class="media-list-container">
    <!-- 列表表格 -->
    <div class="media-table">
      <el-table :data="list" stripe border>
        <el-table-column prop="name" label="广告名称" width="auto"></el-table-column>
        <el-table-column prop="type" label="类型" width="100"></el-table-column>
        <el-table-column prop="time" label="上传时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="previewMedia(scope.$index, list)" size="small">预览</el-button>
            <el-button @click.native.prevent="setDisplay(scope.$index, list)" type="primary" size="small">设置播放</el-button>
            <el-button @click.native.prevent="addToDisplay(scope.$index, list)" type="primary" size="small">加入播放列表</el-button>
            <el-button @click.native.prevent="deleteMedia(scope.$index, list)" type="warning" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
    <!-- dialog -->
    <div class="dialog" :style="{display: dialogData.show ? 'flex' : 'none'}" @click="hideDialog">
      <img v-if="dialogData.type === 1" :src="dialogData.path" alt="">
      <div v-else-if="dialogData.type === 2" :style="{width: '1000px', height: '600px'}" @click.stop="() => {}">
        <video ref="video" :src="dialogData.path" width="1000" height="600" controls autoplay></video>
      </div>
      <div v-else-if="dialogData.type === 3">
        <advertise-set @closeDialog="dialogData.show = false" :initialId="initialId"></advertise-set>
      </div>
    </div>    
  </div>
</template>

<script>
  import {getAdvertiseList} from '../actions';
  import utils from '../utils/utils';
  import AdvertiseSet from './AdvertiseSet'

  export default {
    data () {
      return {
        dialogData: {
          show: false,
          type: 0,
          path: '',
          width: '0',
          height: '0'
        },
        list: [],
        initialId: ''
      }
    },
    methods: {
      deleteMedia (index, list) {
        const name = list[index].name;

        this.$messagebox.confirm(`确定删除广告：${name}？`, {
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              this.$message({
                type: 'success',
                message: '广告删除成功！',
                center: true
              });
            }
          }
        })
      },
      hideDialog () {
        const {dialogData: {type}} = this;

        if (type !== 3) {
          if (type === 2) this.$refs.video && this.$refs.video.pause();
          this.dialogData.show = false;
        }
      },
      previewMedia (index, list) {
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
      setDisplay (index, list) {
        const item = list[index];
        
        this.dialogData.type = 3
        this.dialogData.show = true;
        this.initialId = item.name
      },
      async loadMedia () {
        let result = await getAdvertiseList();
        
        if (Array.isArray(result) && result.length > 0) {
          this.list = result.map(item => {
            return {name: item, type: utils.getFileType(item), time: '2015-01-08 01:08:08', url: `http://wc.shaojun.xyz:8231/${item}`}
          })
        }
        else this.list = [];
      },
      addToDisplay () {
        this.$message.success('操作成功');
      }
    },
    mounted () {
      this.loadMedia();
    },
    components: {AdvertiseSet}
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
      z-index: 2000;
      cursor: pointer;

      img { max-width: 80%; max-height: 90%;}
    }
  }
</style>
