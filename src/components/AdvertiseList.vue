<template>
  <div class="advertise-list">
    <h1>
      <span>广告列表</span>
      <!-- <el-button type="primary" size="mini" @click="() => $router.push('/advertise/set')">设置广告</el-button> -->
    </h1>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="name" label="资源名称" width="180"></el-table-column>
      <el-table-column prop="statusText" label="播放状态" width="180"></el-table-column>
      <el-table-column prop="computedTime" label="播放次数" width="180"></el-table-column>
      <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="comfirmStop(scope.$index, tableDataComputed)"
            type="text"
            size="small">
            中止
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .advertise-list h1 {
    font-size: 20px;
    padding: 10px 10px 20px;
    display: flex;
    align-items: center;

    .el-button {
      margin-left: 20px;
    }
  }
</style>
