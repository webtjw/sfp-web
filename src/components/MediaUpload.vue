<template>
  <div class="media-upload">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="true"
      :multiple="false"
      accept="video/*,image/*"
      :before-upload="checkTypeSize"
      :on-success="uploadSuccess">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        <p>允许上传图片格式：jpg、jpeg、gif、png、bmp、png，且图片大小不得大于1MB；</p>
        <p>允许上传视频格式：mp4、3gp、mkv、flv，且视频大小不得大于1MB。</p>
        <p style="color: #E6A23C;">点击上传后，选择框会延缓出现，请耐心等候。</p>
        <p v-show="!!hintText">当前上传文件格式为<strong style="color:red;">{{hintText}}</strong></p>
      </div>
    </el-upload>
  </div>
</template>


<script>
  const videoType = ['mp4', '3gp', 'mkv', 'flv'];
  const imageType = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'png'];

  export default {
    data () {
      return {
        hintText: ''
      }
    },
    methods: {
      checkTypeSize (file) {
        var {type, size} = file;
        type = type.split('/');
        this.hintText && (this.hintText = '');
        
        if (type.length === 2 && (type[0] === 'image' || type[0] === 'video')) {
          if (videoType.indexOf(type[1] > -1)) this.hintText = '视频';
          else if (imageType.indexOf(type[1] > -1)) this.hintText = '图片';
        } else {
          this.$message.alert('上传文件格式或体积不符合要求');
          return false;
        }
      },
      uploadSuccess () {
        this.$message('上传成功');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-upload__tip {
    line-height: 2;
  }
</style>
