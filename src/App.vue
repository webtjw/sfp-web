<template>
  <div id="app">
    <el-container>
      <!-- sidebar -->
      <el-aside width="200px" :class="{hide: hideSidebar}">
        <sidebar></sidebar>
      </el-aside>
      <!-- main container for router-->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'

  export default {
    name: 'App',
    data () {
      return {
        hideSidebar: true
      }
    },
    components: {Sidebar}
  }
</script>

<style lang="scss">
  html, body, #app, #app > .el-container {
    width: 100%;
    height: 100%;
  }
  #app {
    .el-aside {flex-shrink: 0;}
    .el-main { padding: 0;}
  }
</style>
