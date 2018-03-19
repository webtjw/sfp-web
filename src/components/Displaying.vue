<template>
  <div class="advertise-container">
    <div class="advertise-list">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="name" label="播放资源" width="180"></el-table-column>
        <el-table-column label="播放状态" width="180">
          <template slot-scope="scope">
            <span v-if="tableData[scope.$index].status === 1" class="green">播放中</span>
            <span v-else>停止</span>
          </template>
        </el-table-column>
        <el-table-column label="播放次数" width="180">
          <template slot-scope="scope">{{`${tableData[scope.$index].time}/${tableData[scope.$index].maxTime}`}}</template>
        </el-table-column>
        <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="previewMedia(scope.$index, tableData)" size="small">预览</el-button>
            <el-button v-if="tableData[scope.$index].status === 0" @click.native.prevent="toggleDisplay(scope.$index, tableData, 1)" size="small" type="primary">播放</el-button>
            <el-button v-else @click.native.prevent="toggleDisplay(scope.$index, tableData, 0)" size="small" type="danger">停止</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
  import {getDisplayingList} from '../actions';
  import utils from '../utils/utils';

  export default {
    data() {
      return {
        tableData: [],
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
      async loadData () {
        let result = await getDisplayingList();
        
        if (Array.isArray(result) && result.length) {
          this.tableData = result.map(item => {
            return {
              name: item,
              status: 1,
              time: 0,
              maxTime: 10000,
              url: `http://wc.shaojun.xyz:8241/${item}`,
              type: utils.getFileType(item),
              uploadTime: '2018-02-06'
            }
          })
        } else this.tableData = [];
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
      toggleDisplay (index, list, status) {
        this.$messagebox.confirm(`确定${status === 1 ? '开始' : '停止'}播放该资源？`, {
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              list[index].status = status;
              this.$message({
                type: 'success',
                message: '操作成功！',
                center: true
              });
            }
          }
        })
      }
    },
    mounted () {
      this.loadData();
    }
  }
</script>

<style lang="scss" scoped>
  .advertise-container {
    margin: 10px 10px 30px;
    .green { color: #67C23A;}
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
</style>
