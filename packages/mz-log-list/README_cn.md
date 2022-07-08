# mz-log-list

> 日志列表组件


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <mzLogList :title="title" :list="list">
      <div slot="rightIcon"></div>
    </mzLogList>
  </div>
</template>

<script>
  import { mzLogList } from 'mz-weex-ui'
  export default {
    components: { mzLogList },
    data: () => ({
      title: '3月7日 周五',
      list: [{ label: '10:21:25', content: '管理员密码 开锁成功'}, { label: '16:16:06', content: '管理员密码 开锁成功'}],
    }),
  }
</script>
```

### Props

| 参数 |  说明  |    类型    | 默认值  |
| ---- |:----:|:--------:|:----:|
| title |  标题  | `String` |  `''`  |
| list | 列表数据 | `Array`  | `[]` |

#### list数据结构
| Prop | Description |   Type    | Default |
| ---- |:-----------:|:---------:|:-------:|
| label |   日志左侧文案    | `String`  |   ``    |
| content |   日志右侧文案    | `String`  |   ``    |

### Slot
- 具名插槽，可在 `mz-log-list` 标签内使用；
```vue
<slot name="rightIcon"></slot>
```