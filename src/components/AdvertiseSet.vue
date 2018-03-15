<template>
  <div class="advertise-set">
    <label class="form-item">
      <div class="label">广告 ID：</div>
      <el-input v-model="inputId" placeholder="请要媒体资源 ID" style="width: 300px;"></el-input>
      <!-- <div class="extra" @click="() => $router.push">上传新资源</div> -->
    </label>
    <label class="form-item">
      <div class="label">广告位：</div>
      <el-select v-model="positionValue" placeholder="请选择广告位">
        <el-option
          v-for="item in position"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </label>
    <label class="form-item">
      <div class="label">播放频次：</div>
      <el-input v-model="inputTime" placeholder="请输入播放频次数字" style="width: 240px;"></el-input>
    </label>
    <label class="form-item">
      <div class="label">播放时间范围：</div>
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </label>
    <!-- btn -->
    <div class="btn">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="$emit('closeDialog')">取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      initialId: {type: [Number, String], default: ''}
    },
    data () {
      return {
        inputId: '',
        inputTime: '',
        positionValue: '',
        position: [
          {label: '广告位 1', value: 1},
          {label: '广告位 2', value: 2},
          {label: '广告位 3', value: 3},
          {label: '广告位 4', value: 4}
        ],
        dateRange: ''
      }
    },
    methods: {
      submit () {
        const {inputId, positionValue, inputTime, dateRange} = this;
        
        if (!inputId) this.$message.error('请输入要设置的广告 ID')
        else if (!positionValue) this.$message.error('请选择广告位置')
        else if (!inputTime) this.$message.error('请选择广告播放频次')
        else if (!dateRange) this.$message.error('请选择广告播放时间范围')
        else {
          this.$message.success('设置成功')
          this.$emit('closeDialog')
        }
      }
    },
    mounted () {
      this.inputId = this.initialId
    }
  }
</script>

<style lang="scss" scoped>
  .advertise-set {
    padding: 30px 30px 10px;
    display: inline-block;
    font-size: 14px;
    background-color: #fff;
    border-radius: 4px;
    .form-item {
        margin: 10px 0;
      display: flex;
      align-items: center;
      .label {
        width: 100px;
        flex-shrink: 0;
        margin: 0 10px;
        text-align: right;
      }
    }
    .btn {
      padding: 20px;
      text-align: center;
    }
    .extra {
      margin-left: 20px;
      color: #409eff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
