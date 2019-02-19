import r from './axios'

// export
export default {
  get (_url, _params = {}) {
    return new Promise((resolve, reject) => {
      r({
        url: _url,
        method: 'get',
        params: _params
      }).then((res) => {
        return resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  post (_url, _params = {}) {
    return new Promise((resolve, reject) => {
      r({
        url: _url,
        method: 'post',
        data: _params
      }).then((res) => {
        return resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
