# mz-calendar

> 依赖 dayjs； 依赖弹层组件 `mz-popup`，可实现弹出式的日历滚动展示和简单交互

## Demo
<img src="../../example/mz-calendar/demo.gif" width="240px"/>


## 基本用法

```vue
<template>
  <mz-calendar :monthSpan="4" @checked="dayChecked" />
</template>

<script>
  import { MzCalendar } from 'mz-weex-ui';
  export default {
  	components: { MzCalendar },
  	methods: {
        dayChecked(day) {
            this.$toast(day.format('MM-DD'));
        },
    },
  }
</script>
```


### 可配置参数

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| monthSpan | `Number` |`No`| `3` | 月份跨度  |
| popupStyle | `Object` |`No`| - | 弹层样式  |
| normalDayStyle | `Object` |`No`| - | 普通日期样式  |
| todayStyle | `Object` |`No`| - | “今天”样式  |
| checkedStyle | `Object` |`No`| - | 选中日期样式  |
| disabledStyle | `Object` |`No`| - | 禁用日期样式（月份跨度之外的日期）  |
| monthStyle | `Object` |`No`| - | 月份文字样式（与日期显示于同一容器中）  |

### 事件

- 日期被选中时触发

```
@checked="dayChecked"
```
