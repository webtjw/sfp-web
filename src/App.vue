<template>
  <div id="app">
    <el-container>
      <!-- sidebar -->
      <el-aside width="200px">
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
    components: {Sidebar}
  }
</script>

<style lang="scss">
  html, body, #app, #app > .el-container {
    width: 100%;
    height: 100%;
  }
  #app > .el-container > .el-aside {
    flex-shrink: 0;
  }
</style>
