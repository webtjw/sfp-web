<template>
  <el-menu class="sidebar-menu" :default-active="defaultActive" background-color="#fafafa" :router="true" ref="menu">
    <el-menu-item index="/">
      <template slot="title">首页</template>
    </el-menu-item>
    <el-submenu index="media-submenu">
      <template slot="title">多媒体资源</template>
      <el-menu-item index="/media"><template slot="title">资源列表</template></el-menu-item>
      <el-menu-item index="/media/upload"><template slot="title">上传资源</template></el-menu-item>
    </el-submenu>
    <el-submenu index="ad-submenu">
      <template slot="title">广告</template>
      <el-menu-item index="/advertisement"><template slot="title">广告列表</template></el-menu-item>
      <el-menu-item index="/displaying"><template slot="title">播放列表</template></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: '/'
      } 
    },
    methods: {
      handleNodeClick (path) {
        this.$router.push(path);
      }
    },
    watch: {
      $route () {
        const path = this.$route.path;
        this.defaultActive = path;
      }
    },
    mounted () {
      const path = this.$route.path;
      this.defaultActive = path;
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-menu {
    overflow-x: hidden;
    height: 100%;
    background-color: rgb(250, 250, 250);

    .el-menu-item.is-active {
      background-color: #ecf5ff!important;
    }
  }
</style>
