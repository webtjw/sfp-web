const videoType = ['mp4', '3gp', 'mkv', 'flv'];
const imageType = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'png'];

const utils = {
  getFileSuffix (file) {
    if (file && typeof file === 'string') {
      const reg = file.match(/[^\.]\.([0-9A-z]+)$/);
      if (reg && reg[1]) return reg[1];
    }

    return false;
  },
  getFileType (file) {
    const suffix = utils.getFileSuffix(file);
    
    if (suffix) {
      if (videoType.indexOf(suffix) > -1) return '视频';
      else if (imageType.indexOf(suffix) > -1) return '图片';
    }

    return false;
  }
}

export default utils;
