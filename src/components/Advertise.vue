<template>
  <div class="advertise-container">
    <advertise-list :list="tableData"></advertise-list>
  </div>
</template>

<script>
  import AdvertiseList from './AdvertiseList';

  export default {
    data() {
      return {
        tableData: [
          {name: '恒山加油机1', status: 1, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 0, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 1, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 0, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 0, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 1, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 0, time: 20, maxTime: 300, uploadTime: '2010-05-06'},
          {name: '恒山加油机1', status: 1, time: 20, maxTime: 300, uploadTime: '2010-05-06'}
        ]
      }
    },
    components: {AdvertiseList}
  }
</script>

<style lang="scss" scoped>

</style>
