import { ImagePreview } from 'vant'

export default {
  state: {

  },
  mutations: {
    HANDLE_PREVIEW_IMAGES (state, payload) {
      if (Array.isArray(payload)) {
        ImagePreview(payload)
      } else {
        ImagePreview([payload])
      }
    }
  }
}
