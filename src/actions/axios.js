import Vue from 'vue';
import axios from 'axios';

const instance = axios.create({
  timeout: 1000 * 20
});

instance.interceptors.response.use(res => {
  const {request, headers, data} = res;
  if (request && headers) return data;
  else return res;
})

export default instance;