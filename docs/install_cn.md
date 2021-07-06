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


