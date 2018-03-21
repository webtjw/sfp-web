import axios from './axios';

// 资源列表 获取资源列表数据
export async function getMediaList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/raw');
}
// 资源列表 审核通过
export async function approveMeidaItem (id) {
  return axios({
    method: 'put',
    url: `http://wc.shaojun.xyz:8211/api/media/approve/${id}`
  })
}
// 资源列表 删除
export async function deleteMedia (fileName) {
  return axios.delete(`http://wc.shaojun.xyz:8211/api/media/deleteFromRawResources/${fileName}`)
}
// 上传资源
export async function addMedia (formData) {
  return axios({
    method: 'POST',
    url: 'http://wc.shaojun.xyz:8211/api/media/upload',
    data: formData
  })
}
// 广告列表 获取列表数据
export async function getAdvertiseList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/assets');
}
// 广告列表 删除
export async function deleteAdvertise (fileName) {
  return axios.delete(`http://wc.shaojun.xyz:8211/api/media/deleteFromAssets/${fileName}`);
}
// 广告列表 “加入到播放列表”
export async function addToDisplaying (fileName) {
  return axios.put(`http://wc.shaojun.xyz:8211/api/media/add/${fileName}`);
}
// 播放列表 获取列表数据
export async function getDisplayingList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/playable');
}
// 播放列表 “移除”
export async function removeDisplaying (fileName) {
  return axios.delete(`http://wc.shaojun.xyz:8211/api/media/deleteFromPlaylist/${fileName}`);
}