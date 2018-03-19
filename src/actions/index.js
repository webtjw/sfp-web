import axios from './axios';

export async function getMediaList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/raw');
}

export async function addMedia (formData) {
  return axios({
    method: 'POST',
    url: 'http://wc.shaojun.xyz:8211/api/media/upload',
    data: formData
  })
}

export async function approveMeidaItem (id) {
  return axios({
    method: 'put',
    url: `http://wc.shaojun.xyz:8211/api/media/approve/${id}`
  })
}

export async function getAdvertiseList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/assets');
}

export async function getDisplayingList () {
  return axios.get('http://wc.shaojun.xyz:8211/api/media/playable');
}