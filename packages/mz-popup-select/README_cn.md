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

| Prop                 | Type                               | Required | Default                   | Description                |
| -------------------- | ---------------------------------- | -------- | ------------------------- | -------------------------- |
| btnActiveBgc         | `String`                           | `false`  | `rgba(38, 122, 255, 0.1)` | 按钮选中时按钮背景色       |
| btnInactiveBgc       | `String`                           | `false`  | `rgba(0,0,0,0.04)`        | 按钮不被选中时按钮背景色   |
| btnTextActiveColor   | `String`                           | `false`  | `#267aff`                 | 按钮选中时按钮字体颜色     |
| btnTextInacticeColor | `String`                           | `false`  | `#000000`                 | 按钮不被选中时按钮字体颜色 |
| on-update            | `(value: number | string) => void` | `false`  | `undefinded`              | 点击一个选项时的回调函数   |
| on-overlayClick      | `() => void`                       | `false`  | `undefinded`              | 点击遮罩层时的回调函数     |
| on-cancel            | `()=> void`                        | `false`  | `undefinded`              | 点击取消时的回调函数       |

## 可调用方法

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
