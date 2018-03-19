<template>
  <div class="advertise-list">
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="name" label="播放资源" width="180"></el-table-column>
      <el-table-column prop="statusText" label="播放状态" width="180"></el-table-column>
      <el-table-column prop="computedTime" label="播放次数" width="180"></el-table-column>
      <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click.native.prevent="previewMedia(scope.$index, list)" size="small">预览</el-button>
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
    computed: {
      tableData () {
        const {list} = this;
        return list.map(item => {
          const {time, maxTime, status} = item;
          
          item.computedTime = `${time}/${maxTime}`;
          item.statusText = status ? '正常' : '停止';
          return item;
        })
      }
    },
    methods: {
      comfirmStop () {
        console.log(arguments);
        this.$messagebox.confirm('确定中止播放该资源？', {
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              this.$message({
                type: 'success',
                message: '中止播放资源成功！',
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
      }
    }
  }
</script>

<style lang="scss" scoped>
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
