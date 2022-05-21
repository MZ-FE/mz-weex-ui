<template>
  <div :style="listStyle">
    <list>
      <refresh class="loading-view" @refresh="onRefresh" :display="!isRefreshing ? 'hide' : 'show'">
        <loading-indicator class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>
      </refresh>

      <cell>
        <slot></slot>
      </cell>

      <loading @loading="loadMore" class="loading-view" v-if="hasMore" :display="!isLoadingMore ? 'hide' : 'show'">
        <loading-indicator class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>
      </loading>
    </list>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
    },
    pageSize: {
      type: Number,
      default: 20
    },
    pageNo: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    // 请求数据的回调
    getData: {
      type: Function,
      default: async () => {}
    },
    // 请求数据的回调
    refreshData: {
      type: Function,
      default: async () => {}
    },
    indicatorColor: {
      type: String,
      default: '#999'
    }
  },
  name: 'index',
  components: {},
  data () {
    return {
      isRefreshing: false,
      isLoadingMore: false,
      isIos: weex.config.env.platform === 'iOS'
    }
  },
  computed: {
    listStyle () {
      let style = {}

      if (this.height > 0) {
        style.height = `${this.height}px`
      }

      return style
    },
    hasMore () {
      return this.pageNo * this.pageSize < this.total
    }
  },
  watch: {},
  methods: {
    /**
     * 刷新，重置页面数据
     */
    async onRefresh () {
      this.isRefreshing = true
      await this.refreshData()

      this.isRefreshing = false
    },
    /**
     * 分页加载
     */
    async loadMore () {
      this.isLoadingMore = true
      await this.getData()

      this.isLoadingMore = false
    }
  },

  created () {},

  mounted () {},

  destroyed () {}
}
</script>

<style scoped>
.loading-view {
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator {
  width: 100px;
  height: 100px;
  color: #999;
}
</style>
