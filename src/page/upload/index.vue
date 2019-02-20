<template lang="pug">
  .upload
    van-uploader(:after-read="onRead" accept="image/gif, image/jpeg" multiple)
      van-icon(name="photograph" v-if="show")
      img(:src="img")
    van-loading(type="spinner" color="white")
    van-switch-cell(v-model="checked" title="标题")
    van-button(type="primary") 主要按钮
</template>

<script>
import { Uploader, Icon, Loading, SwitchCell, Button } from 'vant'
export default {
  components: {
    [Uploader.name]: Uploader,
    [Icon.name]: Icon,
    [Loading.name]: Loading,
    [SwitchCell.name]: SwitchCell,
    [Button.name]: Button
  },
  data () {
    return {
      show: true,
      img: '',
      checked: true
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

<style lang="scss" scoped>
.van-loading {
  // width: 60px;
  // height: 60px;
  padding: 20px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  background: rgba($color: #000000, $alpha: 0.3);
}
</style>
