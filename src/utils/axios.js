import axios from 'axios'
import Qs from 'qs'
import store from '../store'

const http = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'repeat'}),
  withCredentials: true
})

http.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['x-access-token'] = store.getters.token
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

http.interceptors.response.use(function (response) {
  // const status = response.data.customer.auth_status;
  // 对响应数据做点什么
  return response.data
}, (error) => {
  return Promise.reject(JSON.stringify(error))
})

export default http
