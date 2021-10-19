<template>
  <list :style="listStyle">
    <refresh class="loading-view" @refresh="onRefresh" :display="!isRefreshing ? 'hide' : 'show'">
      <loading-indicator class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>
    </refresh>

    <cell>
      <slot></slot>
    </cell>

    <cell v-if="!isLoading && !hasMore && total === 0">
      <slot name="noData">
        <div class="no-data-box" :style="{ height: `${height}px` }">
          <text class="no-data-text">{{ noDataText }}</text>
        </div>
      </slot>
    </cell>

    <loading @loading="loadMore" class="loading-view" v-if="hasMore" :display="!isLoadingMore ? 'hide' : 'show'">
      <loading-indicator class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>
    </loading>
  </list>
</template>

<script>
export default {
  props: {
    height: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 20
    },
    pageNo: {
      type: Number,
      default: 1
    },
    noDataText: {
      type: String,
      default: '暂无数据'
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
    },
    isLoading () {
      return this.isRefreshing || this.isLoadingMore
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

.no-data-box {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.no-data-text {
  color: #666;
  line-height: 28px;
  font-size: 28px;
}
</style>
