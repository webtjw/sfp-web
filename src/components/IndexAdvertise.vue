<template>
  <div class="index-item">
    <h1>广告概要</h1>
    <div class="content">
      <p>您一共设置过<span class="strong big">210</span>个广告，正在生效的广告有<span class="strong big">10</span>个。</p>
      <ul>
        <li class="chart-item">
          <ve-pie :data="pieData" :settings="pieSettings" width="300px" height="330px" :offsetY="50"></ve-pie>
          <h6>广告种类饼图</h6>
        </li>
        <li class="chart-item">
          <ve-line :data="lineData" width="500px"></ve-line>
          <h6>广告播放频次折线图</h6>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pieData: {
          columns: ['type', 'percentage'],
          rows: [
            {type: '图片', percentage: 0.7}, 
            {type: '视频', percentage: 0.3} 
          ]
        },
        lineData: {
          columns: ['month', '频次'],
          rows: [
            {month: '1月', '频次': 1000},
            {month: '2月', '频次': 1126},
            {month: '3月', '频次': 1349},
            {month: '4月', '频次': 1594},
            {month: '5月', '频次': 1916},
            {month: '6月', '频次': 2316},
            {month: '7月', '频次': 2200}
          ]
        }
      }
    }
  }
</script>
