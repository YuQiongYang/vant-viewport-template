<template lang="pug">
  van-pull-refresh(v-model="isLoading" @refresh="onRefresh")
    van-list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" @refresh="onRefresh")
      van-cell(v-for="item in list" :key="item" :title="item")
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
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.getDataLists()
  },
  methods: {
    async getDataLists () {
      const res = await this.$api.user.get({seriesid: 0, pageindex: 1, pagesize: 20})
      console.log(res)
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 50; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 150) {
          this.finished = true
        }
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        // this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>
