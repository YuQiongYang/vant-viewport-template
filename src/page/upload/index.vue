<template lang="pug">
  van-uploader(:after-read="onRead" accept="image/gif, image/jpeg" multiple)
    van-icon(name="photograph" v-if="show")
    img(:src="img")
</template>

<script>
import { Uploader, Icon } from 'vant'
export default {
  components: {
    [Uploader.name]: Uploader,
    [Icon.name]: Icon
  },
  data () {
    return {
      show: true,
      img: ''
    }
  },
  methods: {
    onRead (file) {
      this.img = file.content
      console.log(file)
    }
  }
}
</script>
