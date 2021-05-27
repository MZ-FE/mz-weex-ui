# MZ Weex Ui

[![Build Status](https://img.shields.io/travis/apache/incubator-weex-ui.svg?style=flat-square)](https://travis-ci.org/apache/incubator-weex-ui)
[![npm](https://img.shields.io/npm/v/weex-ui.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/weex-ui)
[![NPM downloads](https://img.shields.io/npm/dm/weex-ui.svg?style=flat-square)](https://npmjs.org/package/weex-ui)
[![NPM all downloads](https://img.shields.io/npm/dt/weex-ui.svg?style=flat-square)](https://npmjs.org/package/weex-ui)
[![CNPM all downloads](http://npm.taobao.org/badge/d/weex-ui.svg?style=flat-square)](https://npm.taobao.org/package/weex-ui)
[![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-weex-ui.svg?style=flat-square)](https://github.com/apache/incubator-weex-ui/commits/dev)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/apache/incubator-weex-ui.svg?style=flat-square)](https://github.com/apache/incubator-weex-ui/issues?utf8=%E2%9C%93&q=)
[![Package Quality](http://npm.packagequality.com/shield/weex-ui.svg?style=flat-square)](http://packagequality.com/#?package=weex-ui)
[![Join the chat at https://gitter.im/alibaba-weex-ui/chat](https://img.shields.io/gitter/room/apache/incubator-weex-ui.svg?style=flat-square)](https://gitter.im/alibaba-weex-ui/chat?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## 文档

* **[主页](https://apache.github.io/incubator-weex-ui/#/cn/)**
* [搭配 weex-toolkit 使用 MZ Weex Ui](https://apache.github.io/incubator-weex-ui/#/cn/install)

## 预览

<img src="https://img.alicdn.com/tfs/TB1O2ulhgoQMeJjy0FoXXcShVXa-1282-986.jpg" width=540/>

你可以通过飞猪、淘宝、天猫、Weex Playground 或者浏览器扫码[体验](https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js)

## 安装

```shell
npm i weex-ui -S
```

## 使用

```html
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
  import { WxcButton, WxcPopup } from 'weex-ui';
  // 或者分开引用（不是很推荐）
  // import WxcButton from 'weex-ui/packages/mz-button';
  // import WxcPopup from 'weex-ui/packages/mz-popup';
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

### 使用前

为了不打包所有的组件，你需要使用 [`babel-plugin-component`](https://www.npmjs.com/package/babel-plugin-component) 来只引入需要的组件打包，同时如果没有安装 `babel-preset-stage-0`，也需一并安装。

```shell
npm i babel-preset-stage-0 babel-plugin-component  -D
```

```json
{
    "presets": ["es2015", "stage-0"],
    "plugins": [
        [
            "component",
            {
                "libraryName": "weex-ui",
                "libDir": "packages",
                "style": false
            }
        ]
    ]
}
```

### 更多

* 如果 `webpack.config.js`中 babel-loader 有对 node_modules 进行 exclude 处理，请修改成这样 `exclude: /node_modules(?!(\/|\\).*(weex).*)/`
* 更多使用可见：[在 weex-toolkit 创建的项目中使用 MZ Weex Ui](/docs/install_cn.md) 和 [weex-ui-demo](https://github.com/tw93/weex-ui-demo)
* 为了获取最新特性, 请常查看 [升级日志](https://github.com/apache/incubator-weex-ui/releases) 并更新组件到最新版本
* 很多常见问题可以从 [faq](https://apache.github.io/incubator-weex-ui/#/cn/faq) 和 [issue 列表](https://github.com/apache/incubator-weex-ui/issues?utf8=%E2%9C%93&q=) 获得答案，假如发现了新 Bug，可以给我们提一个[issue](https://github.com/apache/incubator-weex-ui/issues/new)
* 更多的 Weex 建设经验可以从 [Weex + Ui - Weex Conf 2018](https://apache.github.io/incubator-weex-ui/#/docs/weex-ui-weex-conf-2018) 这篇文章了解，欢迎翻译~

## 调试

```shell
npm i
npm run start
```

一旦它编译完成后，将会自动打开一个浏览器，你可以将浏览器切换到开发者模式，这时候在 console 中你可以看到一个预览二维码，直接使用你的 Weex App 扫码就可以看到 Demo 效果。


## 协议

* 遵循 [Apache 协议](https://apache.org/)
* 请自由地享受和参与开源
