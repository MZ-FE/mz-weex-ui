## 开发指引

### 开发组件
在`packages`目录下创建组件文件夹，例如`packages/mz-swipe-action`，存放组件代码

#### 组件文档定义
> 使用docsify生成组件文档

创建组件文档`packages/mz-swipe-action/README_cn.md`,描述组件基本功能以及用法等。

在文档导航栏`docs/_sidebar_cn.md`增加对应的组件链接。

执行命令`npm run doc`，`http://localhost:3000`本地预览文档。

#### 组件功能实现
创建组件代码文件`packages/mz-swipe-action/index.vue`，实现组件功能


创建组件入口文件`packages/mz-swipe-action/index.js`
```js
export { default } from './index.vue';
```

新增组件后需要执行命令`npm run build:entry`，重新生成组件包入口文件，暴露接口。

#### 编写组件示例
创建`example/mz-swipe-action`文件夹，编写示例代码

### 调试预览

执行`npm run serve` 和 `npm run watch`,
可在`http://localhost:8888`浏览器预览
> 打开控制台，用weex应用对`console`面板出现的二维码进行扫码预览

### 组件库打包
`npm run build`

### 发布版本
 
  例如：1.9.1 -> 1.10.0 -> 1.11.0
#### 更新版本号

主版本号(major)，当你做了不兼容的API修改：`npm version major`

次版本号(minor)，当你做了向下兼容的功能性新增：`npm version minor`

修订号(patch)，当你做了向下兼容的问题修正：`npm version patch`

#### 发布
`npm publish`


