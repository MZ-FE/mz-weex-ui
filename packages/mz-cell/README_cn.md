# mz-cell

> 单元格组件，可用作展示列表信息、图片或者描述文本等。解决dof-cell抖动问题以及dof-cell2的偶现无法高亮及右侧箭头图标消失的问题。

## 基本用法

```vue
<template>
  <mz-cell @cellClicked="cellClicked" ></mz-cell>
</template>

<script>
  import { MzCell } from 'mz-weex-ui';
  export default {
  	components: { MzCell },
  	methods: {
        cellClicked() {
            this.$toast('cellClicked');
        },
    },
  }
</script>
```

## 可配置参数

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| icon | `String` |`No`| - | 列表图标  |
| iconSize | `Number` |`No`| `64` | 列表图标尺寸  |
| iconBgColor | `String` |`No`| `transparent` | 列表图标背景颜色 |
| title | `String` |`No`| - | 列表标题  |
| titleBoldValue | `Number` |`No`| `400` | 列表标题加粗  |
| titleColor | `String` |`No`| `#000000` | 列表标题颜色  |
| hasArrow | `Boolean` |`No`| `true` | 列表右侧是否有箭头  |
| arrowImg | `String` |`No`| `Base64` | 右侧箭头样式 |
| rightText | `String` |`No`| - | 右侧"设置"文本文案  |
| rightTextColor | `String` |`No`| `#666666` | 右侧"设置"颜色  |
| desc | `String` |`No`| - | 展示说明信息 |
| descColor | `String` |`No`| `#8A8A8F` | 展示说明信息的字体颜色 |
| hasSubBottomBorder | `Boolean` |`No`| `false` | 是否有下内边框 |
| hasBottomBorder | `Boolean` |`No`| `false` | 是否有下边框 |
| bottomBorderColor | `String` |`No`| `#f2f2f2` | 下边框颜色 |
| centerTitle | `Boolean` |`No`| `false` | 标题是否居中（MzCell用作单选列表时可使用）  |
| disabled | `Boolean` |`No`| `false`| 是否禁用当前cell |
| disabledColor | `String` |`No`| `'rgba(255, 255, 255, 0.7)'` | 禁用样式背景颜色  |
| cellStyle | `Object` |`No`| `{height: '0px',backgroundColor: '#FFFFFF'}` | 自定义cell的样式 |
| isHighlight | `Boolean` |`No`| `true` | cell列表点击是否显示背景色 |
| activeBgColor | `String` |`No`| `#E5E5E8` | cell点中时的底色，类似:active |

## 事件

- cell被点击时触发

```
@cellClicked="cellClicked"
```

## Slot

- 右边插槽，可以添加switch等组件

```vue
<slot name="right"> </slot>
```

- 箭头插槽，可以自定义箭头样式大小及位置

```vue
<slot name="arrow"> </slot>
```

## 注意事项

- 使用cellStyle属性时必须写入backgroundColor
