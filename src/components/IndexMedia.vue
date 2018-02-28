<template>
  <div class="index-item">
    <h1>多媒体资源概要</h1>
    <div class="content">
      <el-row>
        <el-col :xs="24" :sm="12">
          <div class="text">
            <p>您还没有上传过多媒体资源，<router-link to="/media/upload">去上传</router-link>。</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
