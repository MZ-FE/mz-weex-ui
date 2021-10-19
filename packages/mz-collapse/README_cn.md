# mz-collapse

> 折叠面板


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <MzCollapse title="重复设置">
       <template slot="content">
         <div v-for="(item, index) in list">
           <text>{{ item }}</text>
         </div>
       </template>
     </MzCollapse>
  </div>
</template>

<script>
  import { mzCollapse } from 'mz-weex-ui'
  export default {
    components: { mzCollapse },
    data: () => ({
      list: [1,2,3,4,5],
    }),
    methods: {
    }
  }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :----------:|:----:|:-------:|
| title | 标题栏的标题 | `String` | `''` |
| rightText | 标题栏的右侧文本文案 | `String` | `''` |
| disabled | 是否禁用 | `Boolean` | `false` |
