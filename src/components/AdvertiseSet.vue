<template>
  <div class="advertise-set">
    <label class="form-item">
      <div class="label">广告 ID：</div>
      <div class="bold">{{inputId}}</div>
      <!-- <el-input v-model="inputId" :disabled="true" placeholder="请要媒体资源 ID" style="width: 300px;"></el-input> -->
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
        positionValue: null,
        position: [
          {label: '默认', value: ''}
        ],
        dateRange: ''
      }
    },
    methods: {
      submit () {
        const {inputId, positionValue, inputTime, dateRange, formatDate} = this;
        if (!inputId) this.$message.error('请输入要设置的广告 ID')
        else if (positionValue === null) this.$message.error('请选择广告位置')
        else if (!inputTime) this.$message.error('请输入广告播放频次')
        else if (!/[0-9]+/.test(inputTime) || inputTime <= 0) this.$message.error('播放次数应该为大于0的数字')
        else if (!dateRange) this.$message.error('请选择广告播放时间范围')
        else {
          this.$emit('confirmSubmit', {
            Title: inputId,
            Zone: positionValue,
            PlayCountLimit: inputTime,
            PlayStartDate: formatDate(dateRange[0]),
            PlayEndDate: formatDate(dateRange[1])
          })
        }
      },
      formatDate (date) {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
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
      .bold { font-weight: 700;}
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
