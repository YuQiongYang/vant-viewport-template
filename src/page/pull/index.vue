<template lang="pug">
  van-pull-refresh(v-model="isLoading" @refresh="onRefresh" v-if="list.length > 0")
    van-list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" @refresh="onRefresh")
      div(v-for="item in list" :key="item.id" class="lists") {{item.name}}
</template>

<script>
import { List, Cell, PullRefresh } from 'vant'
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh
  },
  data () {
    return {
      isLoading: false,
      list: [],
      params: {page: 1, limit: 5},
      paging: null,
      loading: false,
      finished: false
    }
  },
  created () {
    this.getDataLists()
  },
  methods: {
    async getDataLists (keys) {
      const res = await this.$api.user.get(this.params)
      this.finished = false
      if (res) {
        if (keys === 'up') {
          this.list = this.list.concat(res.data)
          if (this.paging && this.paging.total === this.list.length) {
            this.finished = true
          }
        } else {
          this.isLoading = false
          this.list = res.data
        }
        this.paging = res.paging
      }
    },
    onLoad () {
      // 数据全部加载完成
      this.params.page = this.params.page + 1
      this.getDataLists('up')
      // 加载状态结束
      this.loading = false
    },
    onRefresh () {
      this.params.page = 1
      this.isLoading = true
      this.getDataLists('down')
    }
  }
}
</script>

<style lang="scss" scoped>
  .lists{
    height: 100px;
  }
</style>
