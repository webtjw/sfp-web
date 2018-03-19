<template>
  <div class="advertise-container">
    <displaying-list :list="tableData"></displaying-list>
  </div>
</template>

<script>
  import {getDisplayingList} from '../actions';
  import DisplayingList from './DisplayingList';
  import utils from '../utils/utils';

  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      async loadData () {
        let result = await getDisplayingList();
        
        if (Array.isArray(result) && result.length) {
          this.tableData = result.map(item => {
            return {
              name: item,
              status: 1,
              time: 0,
              maxTime: 10000,
              url: `http://wc.shaojun.xyz:8241/${item}`,
              type: utils.getFileType(item),
              uploadTime: '2018-02-06'
            }
          })
        } else this.tableData = [];
      }
    },
    mounted () {
      this.loadData();
    },
    components: {DisplayingList}
  }
</script>

<style lang="scss" scoped>
  .advertise-container { margin: 10px 10px 30px;}
</style>
