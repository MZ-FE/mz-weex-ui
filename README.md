# MZ Weex Ui

[![Build Status](https://img.shields.io/travis/apache/mz-weex-ui.svg?style=flat-square)](https://travis-ci.org/apache/mz-weex-ui)
[![npm](https://img.shields.io/npm/v/weex-ui.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/weex-ui)
[![NPM downloads](https://img.shields.io/npm/dm/weex-ui.svg?style=flat-square)](https://npmjs.org/package/weex-ui)
[![NPM all downloads](https://img.shields.io/npm/dt/weex-ui.svg?style=flat-square)](https://npmjs.org/package/weex-ui)
[![CNPM all downloads](http://npm.taobao.org/badge/d/weex-ui.svg?style=flat-square)](https://npm.taobao.org/package/weex-ui)
[![GitHub last commit](https://img.shields.io/github/last-commit/apache/mz-weex-ui.svg?style=flat-square)](https://github.com/apache/mz-weex-ui/commits/dev)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/apache/mz-weex-ui.svg?style=flat-square)](https://github.com/apache/mz-weex-ui/issues?utf8=%E2%9C%93&q=)
[![Package Quality](http://npm.packagequality.com/shield/weex-ui.svg?style=flat-square)](http://packagequality.com/#?package=weex-ui)
[![Join the chat at https://gitter.im/alibaba-weex-ui/chat](https://img.shields.io/gitter/room/apache/mz-weex-ui.svg?style=flat-square)](https://gitter.im/alibaba-weex-ui/chat?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## 文档

* **[主页](https://worldsoon.github.io/mz-weex-ui/#/cn/)**

## 安装

```shell
npm i mz-weex-ui -S
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
                "libraryName": "mz-weex-ui",
                "libDir": "packages",
                "style": false
            }
        ]
    ]
}
```

## 调试

```shell
npm i
npm run start
```

一旦它编译完成后，将会自动打开一个浏览器，你可以将浏览器切换到开发者模式，这时候在 console 中你可以看到一个预览二维码，直接使用你的 Weex App 扫码就可以看到 Demo 效果。


## 协议

* 遵循 [Apache 协议](https://apache.org/)
* 请自由地享受和参与开源
