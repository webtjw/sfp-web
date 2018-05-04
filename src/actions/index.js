import axios from './axios'

const baseServer = 'http://localhost:8211'

// 资源列表 获取资源列表数据
export async function getMediaList () {
  return axios.get(`${baseServer}/api/media/raw`);
}
// 资源列表 审核通过
export async function approveMeidaItem (id) {
  return axios({
    method: 'put',
    url: `${baseServer}/api/media/approve/${id}`
  })
}
// 资源列表 删除
export async function deleteMedia (fileName) {
  return axios.delete(`${baseServer}/api/media/deleteFromRawResources/${fileName}`)
}
// 上传资源
export async function addMedia (formData) {
  return axios({
    method: 'POST',
    url: `${baseServer}/api/media/upload`,
    data: formData
  })
}
// 广告列表 获取列表数据
export async function getAdvertiseList () {
  return axios.get(`${baseServer}/api/media/assets`);
}
// 广告列表 删除
export async function deleteAdvertise (fileName) {
  return axios.delete(`${baseServer}/api/media/deleteFromAssets/${fileName}`);
}
// 广告列表 “加入到播放列表”
export async function addToDisplaying (fileName) {
  return axios.put(`${baseServer}/api/media/add/${fileName}`);
}
// 播放列表 获取列表数据
export async function getDisplayingList () {
  return axios.get(`${baseServer}/api/media/playable`);
}
// 播放列表 “移除”
export async function removeDisplaying (fileName) {
  return axios.delete(`${baseServer}/api/media/deleteFromPlaylist/${fileName}`);
}
// 广告列表 设置播放规则
export async function setDisplayRules (params) {
  return axios.post(`${baseServer}/api/media/assets/${params.Title}/setting`, {
    data: params
  });
}