### 在项目中使用 MZ Weex Ui

安装 mz-weex-ui

>npm i mz-weex-ui@latest -S

安装babel-preset-stage-0 和 babel-plugin-component 插件，前者用于babel编译，后者用于优化   mz-weex-ui 包的组件引用

> npm i babel-plugin-component babel-preset-stage-0  -D

同时修改.babelrc如下

```
{
  "presets": ["es2015", "stage-0"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "mz-weex-ui",
        "libDir": "packages",
        "style": false
      }
    ]
  ]
}
```

### 玩一玩 MZ Weex Ui
修改 `src/index.vue` 进行测试

```vue
<template>
  <div>
    <mz-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </mz-button>
    <mz-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
    </mz-popup>
  </div>
</template>

<script>
  import { WxcButton, WxcPopup } from 'mz-weex-ui';
  module.exports = {
    components: { WxcButton, WxcPopup },
    data: () => ({
      isShow: false
    }),
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      }
    }
  };
</script>
```

### 检测是否可以正常运行

启动一个web服务器

> npm run serve

可以看到如下：

<img src="https://img.alicdn.com/tfs/TB16db4hlTH8KJjy0FiXXcRsXXa-1920-1080.gif" width="400"/>

测试下 weex 编译单文件

> weex src/index.vue

<img src="https://img.alicdn.com/tfs/TB1QYEMhfDH8KJjy1XcXXcpdXXa-1672-824.png" width=400/>

测试下 Android 编译和打包

> weex platform add android
       
> weex run android

<img src="https://img.alicdn.com/tfs/TB1cqothcjI8KJjSsppXXXbyVXa-1620-892.png" width="400"/>    <img src="https://img.alicdn.com/tfs/TB1hq3xhgnH8KJjSspcXXb3QFXa-890-438.png" width="200" />


测试下 iOS 编译和打包

> weex platform add ios
       
> weex run ios

<img src="https://img.alicdn.com/tfs/TB1YdW2kvDH8KJjy1XcXXcpdXXa-2300-1156.png" width="600" />


### 更多
- [mz-weex-ui-demo](https://github.com/tw93/weex-ui-demo)
