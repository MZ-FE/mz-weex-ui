# mz-illumination-bar

> 明暗亮度档位选择组件

### 规则
- 用于选择明暗亮度档位，默认单个拖动栏，最多可配置3个拖动栏


## Demo
<img src="../../example/mz-illumination-bar/demo.jpg" width="240px"/>
## 使用方法

```vue
<template>
    <mz-illumination-bar
        :value="curValueArr"
        :index="curEnvIndex"
        @updateValue="onUpdateValue"
        @slideEnd="onSlideEnd"
    ></mz-illumination-bar>
</template>
<script>
  import { MzIlluminationBar } from 'mz-weex-ui';
  export default {
  	components: { MzIlluminationBar },
  	data: () => ({
            curValueArr: [0, 0, 1],
            curEnvIndex: 0,
  	}),
        methods: {
            onUpdateValue(e) {},
            onSlideEnd() {}
        }
  }
</script>
```


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| value       | `Array` |`N`| `[0, 0, 5]`    | 拖动栏当前值 |
| index       | `Number` |`N`| `1`      | “当前亮度”指示器当前值 |
| tipArr      | `Array` |`N`| `['', '', '较暗', '较亮']`  | 右侧提示文案 |
| tabShow     | `Array` |`N`| `[false, false, true]`    | 滑动栏是否显示 |
| barColor    | `Array` |`N`| `['#d8e9ff', '#a3d3ff', '#69b8ff', '#549eff']`  | 值块的背景颜色 |

### 事件

- 滑动时候的值更新

```
@updateValue="onUpdateValue"
```

- 滑动结束时触发

```
@slideEnd="onSlideEnd"
```
