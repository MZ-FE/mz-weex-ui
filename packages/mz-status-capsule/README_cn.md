# mz-status-capsule

> 状态胶囊，用来展示设备状态

<img src="../../example/mz-mz-status-capsule/example.png" width="400"/>

## 使用方法

```vue
<template>
    <div class="mz-demo">
        <mz-status-capsule :text="text" :statusColor="statusColor">
            <div>
                <text>门已反锁</text>
                <div class="divider" />
                <image :src="batteryImg" />
            </div>
        </mz-status-capsule>
    </div>
</template>

<script>
import { MzStatusCapsule } from "mz-weex-ui";
export default {
    components: { MzStatusCapsule },
    data: () => ({
        text: "门锁已打开",
        statusColor: "#FFAA10",
        batteryImg: "...",
    }),
};
</script>
```

### Props

| 参数             |        说明        |   类型   | 默认值 |
| ---------------- | :----------------: | :------: | :----: |
| text             |        文字        | `String` |  `''`  |
| statusColor      |    左侧小点颜色    | `String` |  `''`  |
| capsuleStyle     | 调整整个胶囊的样式 | `Object` |  `{}`  |
| textStyle        |   调整文字的样式   | `Object` |  `{}`  |
| statusPointStyle |    左侧小点样式    | `Object` |  `{}`  |

> statusColor 的优先级比 statusPointStyle 高

### Slot

| 插槽名字 |   说明    |
| -------- | :-------: |
| default  | text 内容 |

默认插槽会代替原有的 text，传入的 text 和 textStyle 属性会失效
