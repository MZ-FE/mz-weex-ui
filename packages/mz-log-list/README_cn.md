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
| cardBgColor | 卡片底色 | `String`  | `#ffffff` |
| dateColor | 日期颜色 | `String`  | `#666666` |
| timeColor | 时间颜色 | `String`  | `#8a8a8f` |
| contentColor | 内容颜色 | `String`  | `"#000000` |
| lineColor | 线条颜色 | `String`  | `#e5e5e8` |
| dotColor | 圆点颜色 | `String`  | `#c7c7cc` |
| warnigColor | 警告颜色，同时作用于圆点、时间、内容 | `String`  | `#ff3b30` |

#### list数据结构
| Prop | Description |   Type    | Default |
| ---- |:-----------:|:---------:|:-------:|
| label |   日志左侧文案    | `String`  |   ``    |
| content |   日志右侧文案    | `String`  |   ``    |
| isWarn |  文案是否高亮显示   | `Boolean` | `false` |

### Slot
- 具名插槽，可在 `mz-log-list` 标签内使用；
```vue
<slot name="rightIcon"></slot>
```