eef<template>
  <el-menu class="sidebar-menu" default-active="0" background-color="#fafafa">
    <el-menu-item index="1" @click="handleNodeClick('/')">
      <template slot="title">首页</template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">多媒体资源</template>
      <el-menu-item index="2-1" @click="handleNodeClick('/media')"><template slot="title">资源列表</template></el-menu-item>
      <el-menu-item index="2-2" @click="handleNodeClick('/media/upload')"><template slot="title">上传资源</template></el-menu-item>
    </el-submenu>
    <el-menu-item index="3" @click="handleNodeClick('/advertisement')">
      <template slot="title">广告设置</template>
    </el-menu-item>
    <el-menu-item index="4" @click="handleNodeClick('/history')">
      <template slot="title">操作历史</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {} 
    },
    methods: {
      handleNodeClick (path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-menu {
    height: 100%;
    background-color: rgb(250, 250, 250);

    .el-menu-item.is-active {
      background-color: #ecf5ff!important;
    }
  }
</style>
