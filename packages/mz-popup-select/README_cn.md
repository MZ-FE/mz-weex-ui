# mz-popup

> 弹出选择框

## Demo

<img src="../../example/mz-popup-mz-popup-select/example.jpg" width="240px"/>

## 基本用法

```vue
<template>
    <mz-popup-select
        ref="popupSelect"
        @overlayClick="handleOverlayClick"
        @update="handleUpdate"
        @cancel="handleCancel"
    ></mz-popup-select>
</template>

<script>
import { MzPopupSelect } from "mz-weex-ui";
export default {
    components: { MzPopup },
    data: () => ({
        value: "",
    }),
    methods: {
        show() {
            this.$refs.popupSelect.show({
                list: [
                    { value: "1", label: "A: 180" },
                    { value: "2", label: "B: 选A" },
                    { value: "3", label: "C: 选B" },
                    { value: "4", label: "D: 选C" },
                ],
                value: this.value,
                title: "你的身高",
            });
        },
        handleUpdate(value) {
            this.value = value;
        },
    },
};
</script>
```

## 可配置参数

| Prop                 | Type                                        | Required | Default                   | Description                      |
| -------------------- | ------------------------------------------- | -------- | ------------------------- | -------------------------------- |
| isShow               | `Boolean`                                   | `false`  | `undefinded`              | 可以通过 isShow 控制是否打开弹窗 |
| title                | `String`                                    | `false`  | `undefinded`              | 标题                             |
| value                | `String`                                    | `false`  | `undefinded`              | 选择值                           |
| list                 | `{value: number | string, label: string}[]` | `false`  | `undefinded`              | 选择列表                         |
| extraTitleLine       | `Number`                                    | `false`  | `0`                       | 标题大于 1 行时，用于补充高度    |
| btnActiveBgc         | `String`                                    | `false`  | `rgba(38, 122, 255, 0.1)` | 按钮选中时按钮背景色             |
| btnInactiveBgc       | `String`                                    | `false`  | `rgba(0,0,0,0.04)`        | 按钮不被选中时按钮背景色         |
| btnTextActiveColor   | `String`                                    | `false`  | `#267aff`                 | 按钮选中时按钮字体颜色           |
| btnTextInacticeColor | `String`                                    | `false`  | `#000000`                 | 按钮不被选中时按钮字体颜色       |

> 注意：如果使用 isShow 控制弹窗时，建议使用 `:isShow.sync="isShow"` 进行双向绑定。value 也可以通过 `:value.sync="value"` 进行双向绑定， 或者通过 update 回调事件获取

## 事件

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| update | 用户点击其中一个选项 | value    |
| close  | 用户点击取消或者遮罩 | -        |

## 方法

### show

通过 ref 调用子组件的 show 方法使选择框弹出，并传入包含 list、value、title 属性的对象。

用 typescript 描述 show 方法:

```ts
type Show = (data: {
    list?: {
        value: string;
        label: string;
    }[];
    value?: string;
    title?: string;
}) => void;
```
