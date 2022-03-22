# mz-log-list

> 日志列表组件


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <mzLogList :list="list"></mzLogList>
  </div>
</template>

<script>
  import { mzLogList } from 'mz-weex-ui'
  export default {
    components: { mzLogList },
    data: () => ({
      list: [{ label: '12:00', content: '11111'}, { label: '13:00', content: '2222'}],
    }),
  }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :----------:|:----:|:-------:|
| list |列表数据| `Array` | `[]` |

#### list数据结构
| Prop | Description | Type | Default |
| ---- | :----------:|:----:|:-------:|
| label | 日志左侧文案 | `String` | `` |
| content | 日志右侧文案 | `String` | `` |
