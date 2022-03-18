# mz-pagination-list

> 分页列表组件
>组合了 list、refresh、loading组件


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <mzPaginationList
      :height="400"
      :pageSize="20"
      :pageNo="1"
      :total="5"
      noDataText="暂无记录"
      :getData="getLog"
      :refreshData="refreshData">
        <div class="list-item" v-for="item in list">
        <text>{{ item }}</text>
        </div>
     </mzPaginationList>
  </div>
</template>

<script>
  import { mzPaginationList } from 'mz-weex-ui'
  export default {
    components: { mzPaginationList },
    data: () => ({
      list: [1,2,3,4,5],
    }),
    methods: {
      async refreshData() {
        this.pageNo = 1
      },
      async getLog() {}
    }
  }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :----------:|:----:|:-------:|
| height | 列表容器高度 | `String` | `''` |
| pageSize | 列表分页大小 | `Number` | `20` |
| pageNo | 当前分页页码 | `Number` | `1` |
| total |列表数据总数| `Number` | `0` |
| getData |上拉加载更多回调，仅当`pageNo * pageSize < total`可以触发| `Function` | `-` |
| refreshData |下拉刷新回调| `Function` | `-` |
| indicatorColor |lading图标的颜色| `String` | `#999` |


### Slots
| 名称 | 说明 |
| ---- | :----------:|
| default |列表内容|
