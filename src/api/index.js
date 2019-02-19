import user from './request/user'
const api = {
  install (Vue) {
    Vue.prototype.$api = api
  },
  user
}

export default api
