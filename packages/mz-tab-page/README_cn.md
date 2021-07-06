# mz-tab-page

> Weex Tab 标签栏


<img src="../../example/tab-page/demo.gif" width="240"/>


## 使用方法

```vue
<template>
  <div class="mz-demo">
    <MzTabPage
          type="primary"
          slot="middle"
          :is-slot="true"
          v-model="tabCheckedIndex"
          :tab-titles="tabTitles"
          :beforeLeave="beforeLeave"
          @tabSelected="tabChangeHandler"
        ></MzTabPage>
  </div>
</template>

<script>
  import { MzTabPage } from 'mz-weex-ui'
  export default {
    components: { MzTabPage },
    data: () => ({
      tabCheckedIndex: 0,
      tabTitles: [
        {
          title: '设备'
        },
        {
          title: '推荐'
        },
        {
          title: 'test'
        }
      ]
    }),
    methods: {
      beforeLeave (e) {
        if (e.index === 1) {
          return false;
        } else {
          return true;
        }
      },
      tabChangeHandler (e) {
        console.log('tabChangeHandler');
      }
    }
  }
</script>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | :----------:|:----:|:-------:|
| v-model (value) | 绑定当前选中标签的标识符 | `Number` | `-` |
| tabTitles |标签栏数据| `Array` | `[]` |
| beforeLeave | 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise | `(name) => boolean或者Promise` | -

#### tabTitles数据结构详细说明
| Prop | Description | Type | Required | Default |
| ---- | :----------:|:----:|:---:|:-------:|
| title | 标题 | `String` | `Y` | `-` |

### Events
| 事件名 | 说明 | 回调参数
| ---- |:----:|:---:|
| tabSelected | 点击标签时触发 | { index: 选择标签的下标, ...选择的tab数据项 } |
