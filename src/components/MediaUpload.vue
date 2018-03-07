<template>
  <div class="media-upload">
    <div class="upload-btn">
      <el-button type="primary" @click="() => this.$refs.nativeInput.click()">选择文件</el-button>
      <div v-if="!!fileName" :class="{ok: isUploadTypeLegal}">已选择文件：<span>{{fileName}}</span>，文件体积：<span>{{fileSizeText}}</span>，类型：<span>{{isUploadTypeLegal ? '' : '错误的文件格式 '}}{{fileType}}</span></div>
    </div>
    <!-- accept="video/*,image/*" -->
    <input ref="nativeInput" class="native-input" type="file" @change="onNativeUpload">
    <div class="upload-tip">
      <p>允许上传图片格式：jpg、jpeg、gif、png、bmp、png，且图片大小不得大于1MB；</p>
      <p>允许上传视频格式：mp4、3gp、mkv、flv，且视频大小不得大于1MB。</p>
      <p style="color: #E6A23C;">点击上传后，选择框会延缓出现，请耐心等候。</p>
    </div>
    <div class="description">
      <span>简单描述：</span>
      <el-input
        class="description-input"
        type="textarea"
        :rows="2"
        placeholder="对上传文件简单描述"
        v-model="description">
      </el-input>
    </div>
    <el-button type="primary" @click="submit">上 传</el-button>
  </div>
</template>


<script>
  import {addMedia} from '../actions';

  const videoType = ['mp4', '3gp', 'mkv', 'flv'];
  const imageType = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'png'];

  export default {
    data () {
      return {
        description: '',
        fileName: '',
        fileSize: null,
        fileType: '',
        isUploadTypeLegal: true
      }
    },
    computed: {
      fileSizeText () {
        const {fileSize} = this; // 字节
        const kb = 1024;
        const mb = kb * 1024;
        const gb = mb * 1024;

        if (fileSize < mb) return Math.ceil(fileSize / kb) + 'KB';
        else if (fileSize < gb) return Math.ceil(fileSize / mb) + 'MB';
        else return Math.ceil(fileSize / gb) + 'MB';
      }
    },
    methods: {
      uploadSuccess () {
        this.$message('上传成功');
      },
      async submit () {
        const {isUploadTypeLegal, description} = this;

        if (!isUploadTypeLegal) {
          this.$message.error('选择上传文件格式错误，请重新选择文件');
          return false;
        }
        
        const formData = new FormData();
        formData.append('file', this.$refs.nativeInput.files[0]);
        // formData.append('uploader', 'admin');
        // formData.append('description', this.description);

        const result = await addMedia(formData);
        console.log(result);
      },
      onNativeUpload () {
        const {files} = this.$refs.nativeInput;
        const file = files[0];
        const type = file.type.split('/');
        let typeText = '';
        this.isUploadTypeLegal = true;

        if (type[0] === 'video' && videoType.indexOf(type[1] > -1)) typeText = '视频';
        else if (type[0] === 'image' && imageType.indexOf(type[1] > -1)) typeText = '图片';
        else {
          this.$message.error('上传文件格式错误，请阅读说明');
          this.isUploadTypeLegal = false;
        }
        
        this.fileName = file.name;
        this.fileSize = file.size;
        this.fileType = typeText || file.type;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .upload-btn {
    margin: 30px 0 20px;
    .el-button { margin-right: 20px; vertical-align: bottom;}
    > div {
      display: inline-block;
      &.ok span { color: #0dbc79;}
      span { color: red;}
    }
  }
  .upload-tip { line-height: 1.8; font-size: 13px; color: #777;}
  .native-input { display: none;}
  .description {
    font-size: 14px;
    margin: 30px 0 20px;
  }
  .description-input, .description-input textarea {
    width: 440px;
    vertical-align: middle;
  }
  .green { color: #0dbc79;}
</style>
