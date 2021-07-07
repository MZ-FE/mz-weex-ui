# MZ Weex Ui

[中文](README_cn.md)


> 一个基于 [Weex](https://github.com/apache/incubator-weex) 的富交互、轻量级、高性能的 UI 组件库

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
