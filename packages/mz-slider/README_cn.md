# mz-slider-bar

> 滑动选择组件（文档待完善）

### 规则

-   用于选择线性取值范围中某个具体的值（整数），或者选取一个取值范围

## Demo

## 使用方法

```vue
<template>
    <mz-slider
        v-model="num"
        :min="0"
        :max="100"
        :track-height="40"
        @input="input"
    >
        <mz-slider-scale :value="0">暖</mz-slider-scale>
        <mz-slider-scale :value="100">冷</mz-slider-scale>
    </mz-slider>
</template>
<script>
import { MzSlider } from 'mz-weex-ui';
export default {
	components: { MzSlider },
	data: () => ({
    num: 0,
	});
  methods: {
    async input(value) {
        console.log(value)
    },
  }
}
</script>
```

### 可配置参数

| Prop              | Type               | Required | Default   | Description                                                   |
| ----------------- | ------------------ | -------- | --------- | ------------------------------------------------------------- |
| value(v-model)    | `number`或 `array` | `Y`      | `0`       | 当前值，传入 number 类型为单侧滑杆，传入 array 类型为双侧滑杆 |
| min               | `Number`           | `N`      | `0`       | 滑条最小值                                                    |
| max               | `Number`           | `N`      | `100`     | 滑条最大值                                                    |
| step              | `Number`           | `N`      | `1`       | 步长                                                          |
| track-height      | `Number`           | `N`      | `40`      | 滑动条轨道高度                                                |
| disabled          | `Boolean`          | `N`      | `false`   | 是否禁用                                                      |
| readonly          | `Boolean`          | `N`      | `false`   | 滑动条是否只读                                                |
| track-color       | `String`           | `N`      | `#f2f2f2` | 滑动条轨道颜色                                                |
| track-color       | `String`           | `N`      | `-`       | 滑动条滚动条颜色，优先级大于 theme                            |
| button-size       | `Number`           | `N`      | `24`      | 滑动条按钮尺寸                                                |
| button-color      | `String`           | `N`      | `#ffffff` | 滑动条按钮颜色                                                |
| gradientBarConfig | `object`           | `N`      | `24`      | 渐变条配置（优先级最高），目前只支持 3 种颜色渐变             |

#### gradientBarConfig

| Prop  | Type     | Required | Default | Description                      |
| ----- | -------- | -------- | ------- | -------------------------------- |
| start | `String` | `N`      | `-`     | 渐变左端颜色                     |
| mid   | `String` | `N`      | `-`     | 渐变中间颜色,不传为 2 种颜色渐变 |
| end   | `String` | `N`      | `-`     | 渐变右端颜色                     |

### 事件

-   滑动时候的值更新

```
@input="input"
```

-   滑动结束且组件值有变化时触发

```
@change="change"
```
