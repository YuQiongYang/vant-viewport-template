import axios from 'axios';
import Qs from 'qs';
import store from '../store';

const http = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'}),
  withCredentials: true
});

http.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['x-access-token'] = store.getters.token;
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

http.interceptors.response.use(function (response) {
  // const status = response.data.customer.auth_status;
  // 对响应数据做点什么
  store.commit('MODIFY_LOADING_STATUS', {status: false, reqTips: ''});
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  store.commit('MODIFY_LOADING_STATUS', {status: false, reqTips: '网络错误，请检查网络连接情况'});
  console.log(error.response);
  store.commit('SHOW_ERROR', error.response);
  return Promise.reject(error.response);
});

export default http;
