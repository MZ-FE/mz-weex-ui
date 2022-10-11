<template>
  <div :style="listStyle">
    <list ref="list" class="scroller">
      <refresh v-if="refreshData" :style="loadingViewStyle" class="loading-view" @refresh="onRefresh" :display="!isRefreshing ? 'hide' : 'show'">
        <image class="loading-indicator" :src="imgData.loadingGif"></image>
<!-- IOS端 refresh组件内不显示loading-indicator组件，改用gif图       -->
        <!--        <loading-indicator v-else class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>-->
      </refresh>

      <cell>
        <slot></slot>
      </cell>

      <loading :style="loadingViewStyle" @loading="loadMore" class="loading-view" v-if="getData && hasMore" :display="!isLoadingMore ? 'hide' : 'show'">
        <loading-indicator class="indicator" :style="{ color: this.indicatorColor }"></loading-indicator>
      </loading>
    </list>
  </div>
</template>

<script>
import { loadingGif } from '../setting/icon.base64'
const dom = weex.requireModule('dom')

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
      default: null
    },
    // 请求数据的回调
    refreshData: {
      type: Function,
      default: null
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
      imgData: {
        loadingGif
      },
      isRefreshing: false,
      isLoadingMore: false,
      isIos: weex.config.env.platform === 'iOS',
      listWidth: 750
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
    loadingViewStyle () {
      return { width: `${this.listWidth}px`}
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

  created () {
  },

  mounted () {
    setTimeout(() => {
      dom.getComponentRect(this.$refs['list'], option => {
        // 查询失败时result为false
        if (!option.result) {
          return
        }
        this.listWidth = option.size.width
      })
    }, 300)
  },

  destroyed () {
  }
}
</script>

<style scoped>
.scroller {
  align-items: stretch;
}
.loading-view {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator {
  width: 100px;
  height: 100px;
  color: #999;
}
.loading-indicator {
  width: 40px;
  height: 40px;
}
</style>
