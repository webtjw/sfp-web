eef<template>
  <el-menu class="sidebar-menu" default-active="0">
    <el-menu-item v-for="(item, index) of menus" :key="item.label" :index="index.toString()" @click="handleNodeClick(item.path)">
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
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
    background-color: #e9eef3;

    .el-menu-item.is-active {
      background-color: #ecf5ff;
    }
  }
</style>
