<template>
  <div class="media-search">
    <div class="panel-item">
      <el-input placeholder="请输入搜索内容" v-model="searchText" clearable />
      <el-date-picker v-model="dateRange" type="daterange" align="right" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" />
      <div class="type-list">
        <el-checkbox-group v-model="typeValue">
          <el-checkbox label="图片"></el-checkbox>
          <el-checkbox label="视频"></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary">搜 索</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchText: '',
        typeValue: ['图片', '视频'],
        dateRange: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .media-search {
    margin: 10px 10px 30px;
    padding: 20px;
    border: 1px solid #409EFF;
    border-radius: 4px;
    font-size: 13px;

    .panel-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .el-input {
      width: 300px;
    }
    .el-date-editor {
      margin: 0 40px;
    }
    .btn {
      text-align: center;
    }
  }
</style>
