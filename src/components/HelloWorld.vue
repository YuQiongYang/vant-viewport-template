<template lang="pug">
  div
    p 666
    h1 666
    strong 666
    ul
      li 666
      li 666
    img(class="com-flex" v-for="img in defaultUser" v-lazy="img" @click="handleImgPreview")
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      defaultUser: ['//asset.ibanquan.com/image/5c56a3a626a801592d000043/s.png?v=1549181862']
    }
  },
  methods: {
    handleImgPreview () {
      if (this.defaultUser) {
        this.$store.commit('HANDLE_PREVIEW_IMAGES', this.defaultUser)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
  // font-size: 30px;
  color: $fc;
  background: $bg;
}
img{
  width: 100%;
  height: 200px;
}
</style>
