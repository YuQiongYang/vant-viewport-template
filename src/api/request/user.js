import h from '@/utils/http'

class user {
  static get (params) { return h.get('http://m.gjw.com/BtCApi/Home/GethomeProductByhot', params) }
  static post (params) { return h.post('...', params) }
}

export default user
