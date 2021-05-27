# 升级日志

## 0.8.5
- [!] mz-dialog: supplement missing parameters ` show` in document
- [!] mz-mask: fix bug that inconsistent behavior between clicking close button and clicking overlay
- [+] mz-pan-item: add judgment before using element

## 0.8.4
- [+] [mz-lightbox](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-lightbox/) 增加 `show-indicator` 参数控制是否显示indicator

## 0.8.3
- [+] [mz-loading](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-loading/) 增加 `loading-pic` 参数用于覆盖原有 loading 图片.
- [+] [mz-loading](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) 增加 `block-color` 参数用于覆盖原有滑块颜色.

## 0.8.0
- [!]从 alibaba/weex-ui 迁移到 [apcahe/incubator-weex-ui](https://github.com/apache/incubator-weex-ui)


## 0.7.1
- [+] [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) 新增 `wxcSliderBarTouchEnd` 事件.
- [!] 修复 [mz-mask](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-mask/) 输入时候抖动问题
- [!] 修复调试时候 console 不显示二维码的问题


## 0.7.0
- [-] 移除支付宝判断，防止审核问题 [issue/467](https://github.com/apache/incubator-weex-ui/issues/467)
- [!] [mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-bar/) 增加 `supportXBar` 参数可用于设置不要 iPhone X 底部 bar 的增高兼容效果

## 0.6.16
- [+] [mz-pan-item](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/?id=mz-pan-item-%E7%9A%84%E4%BD%BF%E7%94%A8) 滑动时候新增 `extId` 回调  [issue/441](https://github.com/apache/incubator-weex-ui/issues/441)

## 0.6.15
- [!] 解决[mz-swipe-action](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-swipe-action/)删除最后一个数据项，再点击其他项动画报错
- [!] [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/)组件 动态给value赋值后，再滑动返回值错乱
- [!] [mz-radio](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-radio/)组件修改list array时无法修改选中项

## 0.6.14
- [!] [mz-swipe-action](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-swipe-action/)添加slot标签，扩展styles和height属性

## 0.6.13
- [!] 修复[mz-overlay](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-dialog/)在[mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-bar/)上使用问题
- [+] 添加[mz-swipe-action](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-swipe-action/)侧滑组件
- [!] 修复[mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 设置display样式问题，添加isHighlight属性控制button是否高亮显示

## 0.6.12
- [!] 修复 [mz-lightbox](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-lightbox/) 设置透明度问题
- [!] 修复 [mz-mask](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-mask/) 设置透明度问题
- [!] 修复 [mz-special-rich-text](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-rich-text/) 不能单击，组件不能修改内部样式的问题
- [!] 修复 [mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 单击没有高亮显示问题

## 0.6.11
- [!] 修复 [mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 动态修改 disabled 时候抖动问题
- [!] 修复 [mz-stepper](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-stepper/) line-height 对其问题
- [!] 修复 [mz-ep-slider](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-ep-slider/) loopedIndex 取余问题

## 0.6.10

- [!] 修复 [mz-popover](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-popover/) 在 Web 环境报 `lines` 的错误 [issue/384](https://github.com/apache/incubator-weex-ui/issues/384)
- [!] 修复[mz-city](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-city/) 搜索时候 sourceData 的 warning 问题 [issue/382](https://github.com/apache/incubator-weex-ui/issues/390)
- [!]修复[mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 组件 btnStyle 在有 size 设置时候不可覆盖的问题 [issue/382](https://github.com/apache/incubator-weex-ui/issues/390)
- [+] 新增 Weex 和 Bindingx 官方钉钉群

## 0.6.9

- [!] 修复 [mz-loading](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-loading/) 组件的 Bug，当 need-mask 为 false 时候
- [-] 移除文档 [with-weex-toolkit](https://apache.github.io/incubator-weex-ui/#/cn/with-weex-toolkit) 中对最新版本的 weex-toolkit 特殊的处理

## 0.6.8

- [+][mz-tab-page](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/) 支持 tab-item 更多的参数设置，详细可见[文档](<(https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/)>)
- [+][mz-lightbox](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/) 支持设置 index 和 interval
- [!][mz-rich-text](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-rich-text/) 中 mz-special-rich-text 移除之前兼容 ios 的老逻辑

## 0.6.7

- [!] Loading 位置属性修改，防止多个时候的重叠 [pull/323](https://github.com/apache/incubator-weex-ui/pull/323)
- [!] 文档英语语法修正 [pull/329](https://github.com/apache/incubator-weex-ui/pull/329)、[pull/330](https://github.com/apache/incubator-weex-ui/pull/330)
- [+][utils](https://apache.github.io/incubator-weex-ui/#/packages/utils/) 中新增 iPhoneXS Max/ iPhoneXR 判断方法 [pull/337](https://github.com/apache/incubator-weex-ui/pull/337)
- [!] 升级 npm querystringify、url-parse 对应版本号 [pull/329](https://github.com/apache/incubator-weex-ui/pull/329)
- [+][mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 新增绿色主题 [pull/291](https://github.com/apache/incubator-weex-ui/pull/291)
- [+][mz-indexlist](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-indexlist/) 新增 `need-animation` 参数来 disable 锚点动画 [issue/341](https://github.com/apache/incubator-weex-ui/issues/341)
- [!] 修复 [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) Android 下拖动滑块后禁用仍然可以拖动滑块 [issue/331](https://github.com/apache/incubator-weex-ui/issues/331)
- [+][mz-minibar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-minibar/) 新增 bar-style 可用来自定义参数 [issue/326](https://github.com/apache/incubator-weex-ui/issues/326)

## 0.6.6

- [!] 修复 [mz-tab-page](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/) 中 Padding 不存在时候的报错 [issue/320](https://github.com/apache/incubator-weex-ui/issues/320)
- [!] 修复 [mz-popup](https://apache.github.io/incubator-weex-ui/#/packages/mz-popup/) 组件传入的 standOut 值为字符串 bug [issue/319](https://github.com/apache/incubator-weex-ui/issues/319)

## 0.6.5

- [+][`mz-button`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) 支持设置 disabled 样式进行覆盖
- [!] 修复 [`mz-rich-text`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-rich-text/) link 不支持点击回调问题 [issue/298](https://github.com/apache/incubator-weex-ui/issues/298)
- [+][mz-city](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-city/) 新增`show-nav-header` 来控制是否显示栏目头部 [issue/294](https://github.com/apache/incubator-weex-ui/issues/294)
- [+][mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-bar/) 在 isTabView 为 false 时候也支持设置高亮 [issue/292](https://github.com/apache/incubator-weex-ui/issues/292)
- [+][mz-popover](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-popover/) 支持文字部分样式覆盖 [issue/289](https://github.com/apache/incubator-weex-ui/issues/289)

## 0.6.4

- [+][`mz-searchbar`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-searchbar/) 支持设置键盘返回键的类型 [issues/287](https://github.com/apache/incubator-weex-ui/issues/287)
- [!] 修复 [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) 浮动定位问题 [issues/282](https://github.com/apache/incubator-weex-ui/issues/282)
- [+][mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) 支持动态修改数据并样式实时展示
- [!] 修复 [mz-button](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-button/) type 使用的 bug 问题
- [+] 修复 [mz-grid-select](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-grid-select/) 多个时候会存在 key 重复的问题
- [!] 修复 [`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-ep-slider/) 最后一个可能卡顿问题 [issues/277](https://github.com/apache/incubator-weex-ui/issues/277)

## 0.6.3

- [!] 修复 [`mz-minibar`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-minibar/) 设置右侧 slot 时候回调无效问题 [issue/263](https://github.com/apache/incubator-weex-ui/issues/263)
- [+][`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-ep-slider/) 支持设置右滑加载更多设置，通过配置 `pull-more` slot 即可
- [!] 修复 [mz-icon](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-icon/) 在某些容器请求字体文件出错问题 [issues/253](https://github.com/apache/incubator-weex-ui/issues/253)
- [+][mz-popup](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-popup/) 支持设置原有位置突出的 `stand-out` [issue/251](https://github.com/apache/incubator-weex-ui/issues/251)
- [+] 支持在构建过程中自动生成入口 `index.js` [pull/259](https://github.com/apache/incubator-weex-ui/pull/259)
- [!] 修复 [mz-searchbar](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-searchbar/) barStyle 字段默认值返回 `undefined` 值 [pull/255](https://github.com/apache/incubator-weex-ui/pull/255)
- [+][mz-result](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-result/) 支持获取新增的错误类型展示 [pull/252](https://github.com/apache/incubator-weex-ui/pull/252)

## 0.6.2

- [+][`utils`](https://apache.github.io/incubator-weex-ui/#/cn/packages/utils/) 功能增强，新增`objToParams`、`paramsToObj`、`getPageHeight`、`getScreenHeight`等功能，详细可见 [utils/index.js](https://github.com/apache/incubator-weex-ui/blob/master/packages/utils/index.js)
- [!] 修复 [`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-ep-slider/) 只有两个 slider 时候的滑动 bug [pull/248](https://github.com/apache/incubator-weex-ui/pull/248)
- [!] 修复 [`mz-searchbar`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-searchbar/) 同时设置自定义样式和主题时候的背景冲突 [issues/242](https://github.com/apache/incubator-weex-ui/issues/242)/[pull/245](https://github.com/apache/incubator-weex-ui/pull/245)
- [+][`mz-mask`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-mask/) 支持传入 `top` 参数控制距离顶部的高度 [issues/240](https://github.com/apache/incubator-weex-ui/issues/240)/[pull/241](https://github.com/apache/incubator-weex-ui/pull/241)
- [!][`mz-popover`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-popover/) demo 问题修复 [pull/236](https://github.com/apache/incubator-weex-ui/pull/236)

## 0.6.1

- [+][`mz-tab-page`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/) 新增沉浸式全屏效果的页面切换组件 `mz-full-page`,详细使用见组件文档
- [+][`mz-tab-page`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-tab-page/) 新增参数`need-slider` 控制是否需要手势滑动
- [!] 解决 `import {BindEnv} from 'weex-ui'` 的使用问题
- [!][mz-cell](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-cell/) 功能增强，支持配置额外内容
- [!] 修复 [`mz-slider-bar`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-slider-bar/) 在 Web 端和 iOS 端样式显示
- [+][`mz-refresher`](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-refresher/) 放出 refresh 和 pullingdown 事件回调

## 0.6.0

- [+][mz-button](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-button/README.md) 组件支持更多 `type`，去除 `normal`/ `highlight`，新增 type 类型 `white`、`blue`，同时新增按钮 `size` 设置，升级后使用需要注意
- [!] 解决 bindingx 打包体积过大问题，Binding 相关判断由 `Utils.env` 转移到 `BindEnv`，升级需注意 [issue 191](https://github.com/apache/incubator-weex-ui/issues/191)
- [+] 新 Binding 组件: [`mz-refresh`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-refresh/README.md)，目前处于 beta 阶段，欢迎提建议
- [-] 移除高版本 weex-vue-loader 中对组件默认样式的提示 [issue 198](https://github.com/apache/incubator-weex-ui/issues/189)
- [+][mz-popover](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md) 组件支持动画 [pr 184](https://github.com/apache/incubator-weex-ui/pull/184/files)
- [+][mz-searchbar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-searchbar/README.md) 支持设置 `bar-style` 样式覆盖主题颜色
- [!][mz-rich-text](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-rich-text/README.md) 对 `mz-special-rich-text` iPad、Android 兼容性增强
- [+] 常见问题/bindingx 相关组件文档更新

## 0.5.3

- [!][mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) 支持不显示定位城市，直接传入`currentLocation`为空即可
- [+][mz-checkbox](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-checkbox/README.md) 新增 `has-top-border`/`has-bottom-border` 参数用于控制是否展示上线 border 线
- [+][mz-progress](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-progress/README.md) 新增 `bar-radius` 参数用于控制进度条的圆角

## 0.5.2

- [!] 重新使用 `rebind()` 用在适配 [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md) 在 iOS Binding 老版本上面 list 滑动注销 Bug
- [+][mz-searchbar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-searchbar/README.md) 允许配置 取消 按钮文案
- [!][`mz-mask`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-mask/README.md) 支持控制蒙层不可以自动关闭

## 0.5.0

- [+][mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md)、[mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md)、[mz-slider-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-slider-bar/README.md) 支持[Bindingx](https://alibaba.github.io/bindingx/) 🎉🎉
- [-] 移除 [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md) 中的 rebind() 调用
- [!] 修复 [`mz-city`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) 组件 props 参数问题
- [+] 给 [mz-popover](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md) 增加更多 demo 同时兼容适配 Android

## 0.4.1

- [+] 新组件: [`mz-popover`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md). 🎉🎉
- [+][mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md)、[mz-page-calendar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-calendar/README.md) 支持 model 形式动画
- [+][mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md)、[mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) 支持设置 iconFont 到 text 之间的 margin
- [+][mz-loading](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) 支持设置防误触蒙层
- [+][mz-simple-flow](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-simple-flow/README.md) 支持设置多行标题

## 0.4.0

- [+] 更强大的 [mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) 组件，使用简单化，默认城市配置，不需传入很多参数，**但是涉及参数变动**
- [!] 优化 Github 中 Readme 中英文档的显示
- [+] 新增一个中文版本的 [Changelog](https://github.com/apache/incubator-weex-ui/blob/master/CHANGELOG_cn.md)
- [+] 从群里收集，新增更多的常见问题
- [+] 合并外部贡献者的代码提交

## 0.3.13

- [!] 修复 [`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) slot bug
- [!][mz-indexlist](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-indexlist/README.md) 完全支持自定义样式 [issue 132](https://github.com/apache/incubator-weex-ui/issues/132)
- [+] 新增一篇 [`Weex + Ui - Weex Conf 2018`](https://apache.github.io/incubator-weex-ui/#/cn/weex-ui-weex-conf-2018)文章, 欢迎来[翻译](https://github.com/apache/incubator-weex-ui/blob/master/docs/weex-ui-weex-conf-2018.md).

## 0.3.12

- [+] 新增 `happypack` 用来提高打包速度
- [+] 增加一个 [weex-ui](https://github.com/tw93/weex-ui-demo) 汇集使用案例
- [+][mz-stepper](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-stepper/README.md) 支持默认值的动态更新 [issue126](https://github.com/apache/incubator-weex-ui/issues/126).
- [!] 修复 [mz-grid-select](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-grid-select/README.md) 的[展示 bug](https://github.com/apache/incubator-weex-ui/issues/123).

## 0.3.11

- [+][`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) 完全支持自定义导航栏头部
- [!] 修复 [mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md) 动态数据更新问题
- [!] 修复 [mz-result](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-result/README.md)的文档代码错误 [issue112](https://github.com/apache/incubator-weex-ui/issues/112)
- [!] 修复 [mz-mask](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-mask/README.md) 由于数据更新导致被隐藏的[bug](https://github.com/apache/incubator-weex-ui/issues/111)
- [!] 修复 [`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) 中的 iconfont bug
- [+] 官网支持用户编辑文档和支持 copy 代码

## 0.3.10

- [+] 新组件: [`mz-icon`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-icon/README.md) 🎉🎉
- [+] 新组件: [`mz-city`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md)
- [-] 移除所有组件中无用的默认样式
- [+] `mz-indexlist` 新增头部 slot. [issue105](https://github.com/apache/incubator-weex-ui/issues/105)
- [+] `mz-tab-bar` [支持 IPhoneX](https://img.alicdn.com/tfs/TB1_qrtkf2H8KJjy0FcXXaDlFXa-768-354.png).

## 0.3.9

- [+] `mz-minibar` 支持 slot
- [+] 更强大的 [mz-rich-text](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-rich-text/README.md) 组件,不再需要给一个 icon 同时传入高宽了
- [+] 新增一个 [FQA](https://apache.github.io/incubator-weex-ui/#/docs/fqa)

## 0.3.8

- [+][mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 和 [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 支持 `iconFont`.
- [!] 修复 [mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md)自定义样式时候的配置问题 [issue 89](https://github.com/apache/incubator-weex-ui/issues/89)
- [!] 修复 [mz-button](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-button/README.md) 配置错误时候出现展示空白问题

## 0.3.7

- [!] 修复 [mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 的高度计算问题
- [+] 功能函数的增强
- [!] 修改 webpack 的配置

## 0.3.4

- [+][mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md#api)、[mz-checkbox](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-checkbox/README.md#checkboxlist) 新加一个 `config` 用来改变颜色和 icon
- [!][mz-result](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-result/README.md) 使用公用主题代替飞猪色彩
- [!] mz-button 使用 `red/yellow` 参数代替 `taobao/fliggy`
- [+] 在官网上新增一个 [`加入社区群`](https://apache.github.io/incubator-weex-ui/)

## 0.3.3

- [+][mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 支出 `bedge`、`dot` 设置
- [+] 在官网中新增一个组件 [样板间](https://apache.github.io/incubator-weex-ui/docc/demo.html)

## 0.3.2

- [!] 梳理所有组件的使用文档，进行纠错优化
- [!][官网](https://apache.github.io/incubator-weex-ui/) 性能的一些优化
- [!] 修复一些组件在特定环境中使用报错 [issue 70](https://github.com/apache/incubator-weex-ui/issues/70)

## 0.3.1

- [+] mz-page-calendar 新增 `showHeader` 参数
- [!] 修复 mz-minibar 的函数回调问题

## 0.3.0

- [+] 新组件: [mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 🎉🎉
- [-] 移除组件中所有阿里电商特色的东西

## 0.2.9

- [+] 组件展示适配 IPhoneX
- [!] 代码格式遵循 ESlint
- [+] 更强大的 [mz-page-calendar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-calendar/README.md) 组件
- [+] 正式发布 Weex Ui 官网 🎉🎉

## 0.2.8

- [+] 所有组件进行无障碍优化 🎉🎉

## 0.2.7

- [+] 更强大的 [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md) 组件
- [!] 更新开发环境下面的包依赖
- [!] 补充 README 文档

## 0.2.6

- [!] 修复 `mz-dialog` bug

## 0.2.3

- [-] 移除`mz-mask`中`overlay-can-close` [入参](<(https://github.com/apache/incubator-weex-ui/issues/44)>)
- [-] 移除`mz-cell`中[无用的样式](<(https://github.com/apache/incubator-weex-ui/issues/45)>)
- [!] 修复 `npm run start` 命令在 Windows 上面调试问题

## 0.2.2

- [!] 修复由于没有加协议头导致的图片展示问题

## 0.2.1

- [+] 更强大的 [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md)
- [!] 新增 [功能函数](https://github.com/apache/incubator-weex-ui/blob/master/packages/utils/README.md)

## 0.2.0

- [!] 更新参考 demo 代码
- [!] 规范化代码结构体系
- [!] 修复一些在特定环境中由于 ES6 引用问题不能使用的组件

## 0.1.3

- [+] 文档中代码的支持高亮显示
- [!] 修复`mz-indexlist` 的 [bug](https://github.com/apache/incubator-weex-ui/issues/16).
- [!] 规划化`mz-searchbar`,`mz-minibar` 的事件命名

## 0.1.2

- [!] 修复链接的跳转 bug
- [!] 修改部分组件的使用文档展示

## 0.1.1

- [!] 优化组件的使用文档

## 0.1.0

- [+] 第一个完整的版本 🎉🎉
