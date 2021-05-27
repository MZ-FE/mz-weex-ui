# Change Log

## 0.8.5
- [!] mz-dialog: 文档上补充上 `show` 参数
- [!] mz-mask: 修正了单击“关闭”按钮和单击“覆盖”之间不一致行为的错误
- [+] mz-pan-item: 使用元素前添加判断


## 0.8.4
- [+] [mz-lightbox](https://apache.github.io/incubator-weex-ui/#/cn/packages/mz-lightbox/) add `show-indicator` param to show indicator

## 0.8.3
- [+] [mz-loading](https://apache.github.io/incubator-weex-ui/#/packages/mz-loading/) add `loading-pic` param.
- [+] [mz-loading](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) add `block-color` param.

## 0.8.0
- [!]From alibaba/weex-ui to [apcahe/incubator-weex-ui](https://github.com/apache/incubator-weex-ui)

## 0.7.1
- [+] [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) add `wxcSliderBarTouchEnd` event.
- [!] Fixed [mz-mask](https://apache.github.io/incubator-weex-ui/#/packages/mz-mask/) jitter bug when inputting.
- [!] Fixed the problem that the QR code does not display when debugging.

## 0.7.0
- [-] Remove alipay util,Preventing audit issues [issue/467](https://github.com/apache/incubator-weex-ui/issues/467)
- [!] [mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-bar/) add `supportXBar` param.

## 0.6.16
- [+] [mz-pan-item](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/?id=mz-pan-item) add `extId` when  pan. [issue/441](https://github.com/apache/incubator-weex-ui/issues/441)

## 0.6.15
- [!] [mz-swipe-action](https://apache.github.io/incubator-weex-ui/#/packages/mz-swipe-action/)fix delete the last data item, then click on another item to report the error.
- [!] [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) fix dynamically assign value to value, then slide back to return value
- [!] [mz-radio](https://apache.github.io/incubator-weex-ui/#/packages/mz-radio/) fix the selected item cannot be modified when modifying the list array

## 0.6.14
- [!] [mz-swipe-action](https://apache.github.io/incubator-weex-ui/#/packages/mz-swipe-action/) adds slot labels, extended style and height attributes

## 0.6.13
- [!] Fixed[mz-overlay](https://apache.github.io/incubator-weex-ui/#/packages/mz-dialog/)problem on[mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-bar/)
- [+] add a new componet named mz-swipe-action
- [!] Fix [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/) displaying style problem, add isHighlight attribute to control whether button is highlighted or not.

## 0.6.12
- [!] Fixed set transparency issues [mz-lightbox](https://apache.github.io/incubator-weex-ui/#/packages/mz-lightbox/).
- [!] Fixed set transparency issues [mz-mask](https://apache.github.io/incubator-weex-ui/#/packages/mz-mask/).
- [!] Fixed cannot click, the component cannot modify the internal style [mz-special-rich-text](https://apache.github.io/incubator-weex-ui/#/packages/mz-rich-text/).
- [!] Fixed click no highlighting question [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/).

## 0.6.11
- [!] Fixed the shake when change disabled about [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/).
- [!] Fixed the line-height bug about [mz-stepper](https://apache.github.io/incubator-weex-ui/#/packages/mz-stepper/).
- [!] Fixed the loopedIndex bug about [mz-ep-slider](https://apache.github.io/incubator-weex-ui/#/packages/mz-ep-slider/).

## 0.6.10

- [!] Fixed the `lines` bug about [mz-popover](https://apache.github.io/incubator-weex-ui/#/packages/mz-popover/) when in web.  [issue/384](https://github.com/apache/incubator-weex-ui/issues/384)
- [!] Fixed the `sourceData` warning about [mz-city](https://apache.github.io/incubator-weex-ui/#/packages/mz-city/) when searching. [issue/382](https://github.com/apache/incubator-weex-ui/issues/382)
- [!] Fixed the `btnStyle` style cannot cover about [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/). [issue/390](https://github.com/apache/incubator-weex-ui/issues/390)
- [+] Add Weex and Bindingx DingTalk Group.

## 0.6.9
- [!] Fixed the bug about [mz-loading](https://apache.github.io/incubator-weex-ui/#/packages/mz-loading/) When `need-mask` is false.
- [-] Remove the special treatment for weex-toolkit in [install](https://apache.github.io/incubator-weex-ui/#/docs/install).

## 0.6.8
- [+] [mz-tab-page](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/) supports more settings about tab-item, More can see [here]((https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/))
- [+] [mz-lightbox](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/) add  params about `index` and `interval`
- [!] [mz-rich-text](https://apache.github.io/incubator-weex-ui/#/packages/mz-rich-text/)  remove the old hack about mz-special-rich-text

## 0.6.7
- [!] Modifying the location attribute of loading [pull/323](https://github.com/apache/incubator-weex-ui/pull/323)
- [!] English document grammar correction [pull/329](https://github.com/apache/incubator-weex-ui/pull/329)、[pull/330](https://github.com/apache/incubator-weex-ui/pull/330)
- [+] New judgement method about iPhoneXS Max/ iPhoneXR  in util [utils](https://apache.github.io/incubator-weex-ui/#/packages/utils/) [pull/337](https://github.com/apache/incubator-weex-ui/pull/337)
- [!] Update the npm version of querystringify and url-parse [pull/329](https://github.com/apache/incubator-weex-ui/pull/329)
- [+] [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/) add a green theme [pull/291](https://github.com/apache/incubator-weex-ui/pull/291)
- [+] [mz-indexlist](https://apache.github.io/incubator-weex-ui/#/packages/mz-indexlist/) add a  `need-animation` param to disable the index animation [issue/341](https://github.com/apache/incubator-weex-ui/issues/341)
- [!] Fixed the bug about [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) When drag can still be dragged after Android dragging the slider. [issue/331](https://github.com/apache/incubator-weex-ui/issues/331)
- [+] [mz-minibar](https://apache.github.io/incubator-weex-ui/#/packages/mz-minibar/) add bar-style param to cover style  [issue/326](https://github.com/apache/incubator-weex-ui/issues/326)

## 0.6.6
- [!] Fixed the padding undefined bug for [mz-tab-page](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/)   [issue/320](https://github.com/apache/incubator-weex-ui/issues/320)
- [!] Fixed the standOut Value bug for [mz-popup](https://apache.github.io/incubator-weex-ui/#/packages/mz-popup/)     [issue/319](https://github.com/apache/incubator-weex-ui/issues/319)

## 0.6.5
- [+] [`mz-button`](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/) supports to set the disabled style for replace
- [!] Fixed the link click callback for [`mz-rich-text`](https://apache.github.io/incubator-weex-ui/#/packages/mz-rich-text/)  [issue/298](https://github.com/apache/incubator-weex-ui/issues/298)
- [+] [mz-city](https://apache.github.io/incubator-weex-ui/#/packages/mz-city/) supports show or hidden nav header by `show-nav-header` param. [issue/294](https://github.com/apache/incubator-weex-ui/issues/294)
- [+] [mz-tab-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-bar/) supports set selected when is not tabView. [issue/292](https://github.com/apache/incubator-weex-ui/issues/292)
- [+] [mz-popover](https://apache.github.io/incubator-weex-ui/#/packages/mz-popover/) supports to replace text style. [issue/289](https://github.com/apache/incubator-weex-ui/issues/289)

## 0.6.4
- [+] [`mz-searchbar`](https://apache.github.io/incubator-weex-ui/#/packages/mz-searchbar/) supports the type of setting the keyboard return key.  [issues/287](https://github.com/apache/incubator-weex-ui/issues/287)
- [!] Fixed the [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) bug about position. [issues/282](https://github.com/apache/incubator-weex-ui/issues/282)
- [+] [mz-slider-bar](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) supports dynamic modification of data and style in real time display.
- [!] Fixed the bug about [mz-button](https://apache.github.io/incubator-weex-ui/#/packages/mz-button/) when set the `type`. [issues/268](https://github.com/apache/incubator-weex-ui/issues/268)
- [+] Fixed the bug about [mz-grid-select](https://apache.github.io/incubator-weex-ui/#/packages/mz-grid-select/) when using more than one.
- [!] Fixed the bug about [`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/packages/mz-ep-slider/) when slide to last one. [issues/277](https://github.com/apache/incubator-weex-ui/issues/277)

## 0.6.3
- [!] Fixed the bug about [`mz-minibar`](https://apache.github.io/incubator-weex-ui/#/packages/mz-minibar/) when setting right slot.  [issue/263](https://github.com/apache/incubator-weex-ui/issues/263)
- [+] [`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/packages/mz-ep-slider/) supports pull more  by setting `pull-more` slot.
- [!] Fixed the bug about [mz-icon](https://apache.github.io/incubator-weex-ui/#/packages/mz-icon/) when requesting font source.   [issues/253](https://github.com/apache/incubator-weex-ui/issues/253)
- [+] [mz-popup](https://apache.github.io/incubator-weex-ui/#/packages/mz-popup/) supports setting `stand-out`.  [issue/251](https://github.com/apache/incubator-weex-ui/issues/251)
- [+] supports to auto generate entry `index.js`. [pull/259](https://github.com/apache/incubator-weex-ui/pull/259)
- [!] Fixed the bug about [mz-searchbar](https://apache.github.io/incubator-weex-ui/#/packages/mz-searchbar/) barStyle return default value is `undefined`.  [pull/255](https://github.com/apache/incubator-weex-ui/pull/255)
- [+] [mz-result](https://apache.github.io/incubator-weex-ui/#/packages/mz-result/) supports to add customer result type.  [pull/252](https://github.com/apache/incubator-weex-ui/pull/252)

## 0.6.2
- [+] [`utils`](https://apache.github.io/incubator-weex-ui/#/packages/utils/) more powerful， add `objToParams`、`paramsToObj`、`getPageHeight`、`getScreenHeight` new functions, More you can see [utils/index.js](https://github.com/apache/incubator-weex-ui/blob/master/packages/utils/index.js).
- [!] Fixed the bug about [`mz-ep-slider`](https://apache.github.io/incubator-weex-ui/#/packages/mz-ep-slider/) when only two sliders  [pull/248].(https://github.com/apache/incubator-weex-ui/pull/248)
- [!] Fixed the bug about [`mz-searchbar`](https://apache.github.io/incubator-weex-ui/#/packages/mz-searchbar/) when setting up custom styles and background conflicts at the same time  [issues/242](https://github.com/apache/incubator-weex-ui/issues/242)/[pull/245](https://github.com/apache/incubator-weex-ui/pull/245)
- [+] [`mz-mask`](https://apache.github.io/incubator-weex-ui/#/packages/mz-mask/) Supports `top` param to control height at the top of the distance.  [issues/240](https://github.com/apache/incubator-weex-ui/issues/240)/[pull/241](https://github.com/apache/incubator-weex-ui/pull/241)
- [!] Fixed the demo bug about [`mz-popover`](https://apache.github.io/incubator-weex-ui/#/packages/mz-popover/)  [pull/236](https://github.com/apache/incubator-weex-ui/pull/236)

## 0.6.1
- [+] [`mz-tab-page`](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/) add `mz-full-page` of immersion full screen effect, more you can see the component document.
- [+] [`mz-tab-page`](https://apache.github.io/incubator-weex-ui/#/packages/mz-tab-page/) add a param about `need-slider`.
- [!] Fixed the bug about `import {BindEnv} from 'weex-ui'`.
- [!] [mz-cell](https://apache.github.io/incubator-weex-ui/#/packages/mz-cell/)  supports setting extra content.
- [!] Fixed the show about [`mz-slider-bar`](https://apache.github.io/incubator-weex-ui/#/packages/mz-slider-bar/) in web and iOS
- [+] [`mz-refresher`](https://apache.github.io/incubator-weex-ui/#/packages/mz-refresher/) supports refresh and pullingdown event.

## 0.6.0
- [+] [mz-button](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-button/README.md) supports more `type` settings, remove `normal`/ `highlight`，add new `type` ahout `white` and `blue`，new button `size` settings, pay attention to the upgrade.
- [!] Solve the problem of too big packaging bundle of bindingx，`Binding related judgments` are transferred from `Utils.env` to `BindEnv`，pay attention to the upgrade. [issue 191](https://github.com/apache/incubator-weex-ui/issues/191)
- [+] New Binding component: [`mz-refresh`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-refresh/README.md), at the present stage of beta, suggestions are welcome.
- [-] Remove the hints for `default style of the component` in weex-vue-loader high version.  [issue 198](https://github.com/apache/incubator-weex-ui/issues/189)
- [+] [mz-popover](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md) support animation.  [pr 184](https://github.com/apache/incubator-weex-ui/pull/184/files)
- [+] [mz-searchbar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-searchbar/README.md) support setting `bar-style` style to cover theme color.
- [!] [mz-rich-text](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-rich-text/README.md) enhanced compatibility with iPad and Android.
- [+] Document update for Faq and Binding.


## 0.5.3
- [!] [mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) support not to display the location, direct incoming `currentLocation` is empty.
- [+] [mz-checkbox](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-checkbox/README.md) add `has-top-border`/`has-bottom-border` for whether show top-border or bottom-border.
- [+] [mz-progress](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-progress/README.md) add `bar-radius` for setting border-radius.

## 0.5.2
* [!] Using `rebind()` to be compatible older version about [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md).
* [+] [mz-searchbar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-searchbar/README.md) allow translation of "cancel" button label
* [!] Fix the `overlay-can-close` bug about [`mz-mask`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-mask/README.md).

## 0.5.0
* [+] [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md)、[mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md)、[mz-slider-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-slider-bar/README.md) support [Bindingx](https://alibaba.github.io/bindingx/). 🎉🎉
* [-] Remove `rebind()` about [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md).
* [!] Fix the `props` bug about [`mz-city`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md).
* [+] Compatible with android and add more demo for [mz-popover](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md).

## 0.4.1
* [+] New component: [`mz-popover`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-popover/README.md). 🎉🎉
* [+] [mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md)、[mz-page-calendar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-calendar/README.md) supports for `model` animation.
* [+] [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md)、[mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) support to set margin between iconFont and text.
* [+] [mz-loading](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md) supports to set mask for preventing incorrect clicking.
* [+] [mz-simple-flow](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-simple-flow/README.md) supports to set multi-line title.

## 0.4.0

* [+] Stronger about [mz-city](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md)，it's easier to use, no need to configure a lot of parameters.
* [!] Optimization of GitHub Readme.
* [+] Add a Chinese version of [Changelog](https://github.com/apache/incubator-weex-ui/blob/master/CHANGELOG_cn.md)
* [+] Add more FQA.
* [+] Merge pull request from committer.

## 0.3.13

* [!] Fix the `slot` bug about [`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md).
* [!][mz-indexlist](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-indexlist/README.md) supports fully custom style. [issue 132](https://github.com/apache/incubator-weex-ui/issues/132)
* [+] Add a post about [`Weex + Ui - Weex Conf 2018`](https://apache.github.io/incubator-weex-ui/#/weex-ui-weex-conf-2018)`, Welcome to [translate](https://github.com/apache/incubator-weex-ui/blob/master/docs/weex-ui-weex-conf-2018.md) it.

## 0.3.12

* [+] Add `happypack` to improve the speed of build.
* [+] Add a show case of [weex-ui](https://github.com/tw93/weex-ui-demo).
* [+][mz-stepper](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-stepper/README.md) supports dynamic modification of default values [issue126](https://github.com/apache/incubator-weex-ui/issues/126).
* [!] Fix the style bug about [mz-grid-select](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-grid-select/README.md) [issue123](https://github.com/apache/incubator-weex-ui/issues/123).

## 0.3.11

* [+][`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md) supports fully customizable navigation header using slot
* [!] Fixed the dynamic update bug about [mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md).
* [!] Fixed the example code error about [mz-result](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-result/README.md). [issue112](https://github.com/apache/incubator-weex-ui/issues/112).
* [!] Fix the bug about [mz-mask](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-mask/README.md) that will hidden when updating. [issue111](https://github.com/apache/incubator-weex-ui/issues/111).
* [!] Fix the iconfont bug about [`mz-tab-bar`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-bar/README.md).
* [+] The official website supports user editing and directly copy example code.

## 0.3.10

* [+] New component: [`mz-icon`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-icon/README.md). 🎉🎉
* [+] New component: [`mz-city`](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-city/README.md).
* [-] Remove the default position relative style.
* [+] `mz-indexlist` add a head slot. [issue105](https://github.com/apache/incubator-weex-ui/issues/105)
* [+] `mz-tab-bar` [supports for IPhoneX](https://img.alicdn.com/tfs/TB1_qrtkf2H8KJjy0FcXXaDlFXa-768-354.png).

## 0.3.9

* [+] `mz-minibar` supports slot.
* [+] Stronger about [mz-rich-text](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-rich-text/README.md),do not need post the width and height for a icon.
* [+] Add a [FQA](https://apache.github.io/incubator-weex-ui/#/docs/fqa).

## 0.3.8

* [+] The [mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) and [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) support for `iconFont`.
* [!] Fixed the custom configuration bug about [mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md). [issue 89](https://github.com/apache/incubator-weex-ui/issues/89).
* [!] Fixed the blank display about [mz-button](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-button/README.md).

## 0.3.7

* [!] Fixed the height calculation error about[mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md).
* [+] Util function Enhancement.
* [!] Modify the configuration of webpack.

## 0.3.4

* [+][mz-radio](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-radio/README.md#api)、[mz-checkbox](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-checkbox/README.md#checkboxlist) add a `config` param for changing the style and icon.
* [!][mz-result](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-result/README.md) using general theme instead of `fliggy theme`.
* [!][mz-button] using `red/yellow` instead of `taobao/fliggy`.
* [+] Add a [`chat`](https://apache.github.io/incubator-weex-ui/) of the website.

## 0.3.3

* [+][mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) supports `bedge`、`dot` setting.
* [+] Add component [demo page](https://apache.github.io/incubator-weex-ui/docc/demo.html) of the website.

## 0.3.2

* [!] Organize all component documents.
* [!] Some of the optimizations on the [website](https://apache.github.io/incubator-weex-ui/).
* [!] Fixed some component export error in some env [issue 70](https://github.com/apache/incubator-weex-ui/issues/70).

## 0.3.1

* [+] mz-page-calendar add a showHeader params.
* [!] Correct the minibar function callback.

## 0.3.0

* [+] New component: [mz-tab-bar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-bar/README.md) 🎉🎉
* [-] Remove all demo Internal characteristics of Alibaba.

## 0.2.9

* [+] Support for IPhoneX.
* [!] The code format follows ESlint.
* [+] Stronger about [mz-page-calendar](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-page-calendar/README.md).
* [+] Document official website. 🎉🎉

## 0.2.8

* [+] Accessibility of components. 🎉🎉

## 0.2.7

* [+] Stronger about [mz-tab-page](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-tab-page/README.md).
* [!] Updated the development packages.
* [!] Supplement the README.

## 0.2.6

* [!] Fixed the mz-dialog bug.

## 0.2.3

* [-][#44](https://github.com/apache/incubator-weex-ui/issues/44) Remove the `overlay-can-close` prop in `mz-mask`.
* [-][#45](https://github.com/apache/incubator-weex-ui/issues/45) Remove the useless style in `mz-cell`.
* [!] Fixed the `npm run start` .

## 0.2.2

* [!] Fix image link problem.

## 0.2.1

* [+] Stronger about [mz-ep-slider](https://github.com/apache/incubator-weex-ui/blob/master/packages/mz-ep-slider/README.md).
* [!] Extraction of [common functions](https://github.com/apache/incubator-weex-ui/blob/master/packages/utils/README.md).

## 0.2.0

* [!] Update reference mode.
* [!] Normalized structure.
* [!] Fixed part of the component in some environments that cannot be used.

## 0.1.3

* [+] Fix syntax highlighting.
* [!] Fixed mz-indexlist bug from [issues/16](https://github.com/apache/incubator-weex-ui/issues/16).
* [!] Normalize mz-searchbar,mz-minibar function name.

## 0.1.2

* [!] fixed the link jump bug.
* [!] Modify the usage documentation for some components.

## 0.1.1

* [!] Improve component usage documentation.

## 0.1.0

* [+] The first full version. 🎉🎉
