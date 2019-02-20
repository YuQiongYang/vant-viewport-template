import h from '@/utils/http'

class user {
  static get (params) { return h.get('https://yuanyang.youfenxiao.net/manager/api/book/list', params) }
  static post (params) { return h.post('...', params) }
}

export default user
