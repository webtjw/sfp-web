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
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          {label: "首页", path: '/'},
          {label: "多媒体资源", path: '/media'},
          {label: "广告设置", path: '/advertisement'},
          {label: "操作历史", path: '/history'}
        ]
      } 
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
  }
</style>
