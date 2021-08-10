# mz-slider-card

> 滑动条卡片


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <MzSliderCard
          v-model="value"
          :min="1"
          :max="4"
          themeColor="#267AFF"
          title="门铃音量"
          :isShowValue="false"
          :axisData="axisData"
          @slideEnd="slideEnd"
        >
        </MzSliderCard>
  </div>
</template>

<script>
  import { MzTabPage } from 'mz-weex-ui'
  export default {
    components: { MzTabPage },
    data: () => ({
      value: 0,
            axisData: [
              {
                label: '静音'
              },
              {
                label: '低'
              },
              {
                label: '中'
              },
              {
                label: '高'
              }
            ]
    }),
    methods: {
      slideEnd(e) {
        console.log(JSON.stringify(e))
      },
    }
  }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :----------:|:----:|:-------:|
| width | 卡片宽度 | `String` | `750px` |
| iconSrc | 卡片标题图标 | `String` | `` |
| title | 卡片标题 | `String` | `滑动条` |
| v-model (value) | 绑定变量 | `Number` | `-` |
| themeColor |主题颜色| `String` | `#FFAA10` |
| pointColor |滑动块颜色| `String` | `${themeColor}` |
| min |滑动条下限| `Number` | `0` |
| max |滑动条上限| `Number` | `100` |
| isShowValue |是否显示滑动值| `Boolean` | `true` |
| axisData |横坐标标签| `Array` | `[]` |
| step |步进长度| `Number` | `1` |
| disabled |是否禁用| `Boolean` | `false` |

#### axisData数据结构详细说明
| Prop | Description | Type | Required | Default |
| ---- | :----------:|:----:|:---:|:-------:|
| label | 档位名称 | `String` | `Y` | `-` |
| value | 档位值 | `Number` | `Y` | `-` |

### Events
| 事件名 | 说明 | 回调参数
| ---- |:----:|:---:|
| slideChange | 滑动柄value变化事件	 | event |
| slideEnd | 滑动柄value滑动结束事件	 | event |
