<template>
  <div
    :class="[
      'widget',
      hasMargin && 'tab-margin',
      tabTitles.length === 2 && !isSlot && type != 'third-group' && 'tab-padding-160',
      tabTitles.length === 3 && !isSlot && type != 'third-group' && 'tab-padding-40',
      isSlot && 'flex-expand-layout',
      type == 'third-group' && 'thirdTabPanel'
    ]"
    :style="{ backgroundColor: mergeStyleOption.bgColor }"
  >
    <!-- 新增三类固定点击标签 -->
    <div
      :class="['dof-third-panel']"
      v-if="type === 'third-group'"
      :style="{ 'background-color': mergeStyleOption.bgColor }"
      :accessible="true"
      :aria-label="text"
    >
      <div class="btn-group-wrap" :style="wrapStyle">
        <text
          v-for="(text, index) in tabTitles"
          :key="index"
          :class="[
            'btn-text',
            index == 0 && 'leftRadius',
            index == tabTitles.length - 1 && 'rightRadius',
            !disabled && pattern === 'text' && `dof-text-highlight-${type}`
          ]"
          :data-index="index"
          :style="[
            index < tabTitles.length - 1 ? verticalLineStyle : '',
            textStyle,
            index == tabCheckedIndex ? textBtnStyle(index) : ''
          ]"
          @click="onTextClicked(index)"
          >{{ text }}</text
        >
      </div>
    </div>
    <!-- 三级标签页 -->
    <scroller
      :class="['tab-title-list', tabTitles.length <= 5 && 'space-around-layout']"
      :show-scrollbar="false"
      scroll-direction="horizontal"
      v-if="type === 'third'"
    >
      <div
        :class="['title-item', tabTitles.length > 5 && 'padding-layout-8']"
        v-for="(v, index) in tabTitles"
        :key="index"
        :ref="'dof-tab-title-' + index"
        @click="onClicked(index, tabTitles.length - 1)"
      >
        <div
          class="tab-text-wrapper thidrd-wrapper"
          :style="{
            backgroundColor:
              currentPage === index
                ? mergeStyleOption.activeBoxBgColor
                : v.icon || v.activeIcon
                ? 'transparent'
                : mergeStyleOption.boxBgColor
          }"
        >
          <image
            class="avatar-icon"
            v-if="v.icon || v.activeIcon"
            :src="currentPage === index ? v.activeIcon : v.icon"
          ></image>
          <text
            class="tab-text third-text"
            :style="{
              fontWeight: currentPage === index && mergeStyleOption.isActiveTitleBold ? 'normal' : 'normal',
              color: currentPage === index ? mergeStyleOption.activeTitleColor : mergeStyleOption.titleColor
            }"
            >{{ v.title }}</text
          >
        </div>
      </div>
    </scroller>
    <!-- 一级和二级标签 -->
    <!-- :style="{backgroundColor: '#267aff'}" -->
    <scroller
      :class="['tab-title-list', tabTitles.length <= 5 && 'space-around-layout']"
      :show-scrollbar="false"
      scroll-direction="horizontal"
      v-else
    >
      <div
        :class="['title-item', tabTitles.length > 5 && 'padding-layout-32']"
        v-for="(v, index) in tabTitles"
        :key="index"
        :ref="'dof-tab-title-' + index"
        @click="onClicked(index, tabTitles.length - 1)"
      >
        <div :class="['tab-text-wrapper', isSlot && 'minibar-inner']">
          <text
            class="tab-text"
            :style="{
              fontSize: type === 'primary' ? '32px' : '28px',
              fontWeight: currentPage === index && mergeStyleOption.isActiveTitleBold ? 'normal' : 'normal',
              color: currentPage === index ? mergeStyleOption.activeTitleColor : mergeStyleOption.titleColor
            }"
            >{{ v.title }}</text
          >
        </div>
        <div
          v-if="type !== 'third' && type !== 'third-group'"
          :class="[type == 'primary' ? 'border-bottom-line' : 'border-bottom-line-secondary']"
          :style="{
            backgroundColor: currentPage === index ? mergeStyleOption.activeBottomColor : 'transparent'
          }"
        ></div>
      </div>
    </scroller>
  </div>
</template>

<script>
const dom = weex.requireModule('dom')
import { THEME_COLOR_SET } from '../../theme/config'

export default {
  props: {
    type: {
      type: String,
      default: 'secondary'
    },
    theme: {
      type: String,
      default: 'default'
    },
    isSlot: {
      type: Boolean,
      default: false
    },
    tabTitles: {
      type: Array,
      default: () => []
    },
    tabCheckedIndex: {
      type: [Number, String],
      default: 0
    },
    tabStyles: {
      type: Object,
      default: () => ({})
    },
    hasMargin: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    currentPage: 0,
    defaultStyleOption: {
      bgColor: '#ffffff',
      titleColor: '#8a8a8f',
      activeTitleColor: '#000000',
      boxBgColor: '#f2f2f2',
      activeBoxBgColor: '#232323',
      isActiveTitleBold: true,
      iconWidth: 70,
      iconHeight: 70,
      height: 88,
      fontSize: 24,
      hasActiveBottom: true,
      activeBottomColor: '#000000',
      hasRightIcon: false
    }
  }),

  computed: {
    mergeStyleOption() {
      let { type, theme, tabStyles, defaultStyleOption } = this
      if (type === 'third') {
        if (theme === 'default') {
          return {
            ...defaultStyleOption,
            ...{
              activeTitleColor: '#ffffff',
              titleColor: '#000000'
            },
            ...tabStyles
          }
        } else if (theme === 'primary') {
          return {
            ...defaultStyleOption,
            ...tabStyles,
            ...{
              bgColor: THEME_COLOR_SET[theme],
              // boxBgColor: '#5088ff',
              boxBgColor: THEME_BOX_BGCOLOR_SET[theme],
              activeBoxBgColor: '#ffffff',
              titleColor: '#ffffff',
              activeTitleColor: THEME_COLOR_SET[theme]
            }
          }
        } else {
          return { ...defaultStyleOption, ...tabStyles, ...{ boxBgColor: THEME_BOX_BGCOLOR_SET[theme] } }
        }
      } else if (type === 'third-group') {
        return { bgColor: THEME_COLOR_SET[theme] }
      } else {
        if (theme === 'default') {
          return { ...defaultStyleOption, ...tabStyles }
        } else {
          return {
            ...defaultStyleOption,
            ...tabStyles,
            ...{
              bgColor: THEME_COLOR_SET[theme],
              titleColor: 'rgba(255,255,255, 0.6)',
              activeTitleColor: '#ffffff',
              activeBottomColor: '#ffffff'
            }
          }
        }
      }
    },

    // 新增三类固定标签
    wrapStyle() {
      const { theme } = this
      if (theme == 'default') {
        return {
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#E5E5E8'
        }
      } else {
        return {
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'rgba(255, 255, 255, 0.3)'
        }
      }
    },

    textStyle() {
      const { theme } = this
      if (theme == 'default') {
        return {
          color: '#8A8A8F'
        }
      } else {
        return {
          color: '#ffffff'
        }
      }
    },
    verticalLineStyle() {
      const { theme } = this
      if (theme == 'default') {
        return {
          borderRightWidth: '2px',
          borderRightStyle: 'solid',
          borderRightColor: '#E5E5E8'
        }
      } else {
        return {
          borderRightWidth: '2px',
          borderRightStyle: 'solid',
          borderRightColor: 'rgba(255, 255, 255, 0.3)'
        }
      }
    },
    textBtnStyle() {
      const { theme } = this
      let hackH = weex.config.env.platform == 'iOS' ? -1 : 2
      return function(i) {
        if (theme == 'default') {
          return {
            color: '#000000',
            backgroundColor: '#E5E5E8',
            marginTop: `${hackH}px`
          }
        } else {
          return {
            color: THEME_COLOR_SET[theme],
            backgroundColor: '#FFFFFF',
            marginTop: `${hackH}px`
          }
        }
      }
    }
  },
  methods: {
    onClicked(index, len) {
      this.currentPage = index
      this.$emit('dofTabSelected', { index: index })
      len > 4 && this._scrollToCurrentTab(index)
    },
    _scrollToCurrentTab(index) {
      const currentTabEl = this.$refs[`dof-tab-title-${index}`][0]
      const firstTabEl = this.$refs['dof-tab-title-0'][0]
      const SAFE_DISTANCE = 16.3

      dom.getComponentRect(currentTabEl, res => {
        let {
          size: { height, width = 110, left }
        } = res
        const appearNum = Math.floor(750 / (width + SAFE_DISTANCE))
        let offset = (-(750 - width) / 2) | 0

        if (index + 1 < appearNum) {
          dom.scrollToElement(firstTabEl, {
            offset: -16.3
          })
        } else {
          dom.scrollToElement(currentTabEl, {
            offset,
            animated: true
          })
        }
      })
    },
    // 三类固定
    onTextClicked(index) {
      // weex下不能完成事件委托
      this.tabCheckedIndex = index
      this.$emit('dofTabSelected', { index: index })
    }
  },
  watch: {
    tabCheckedIndex: {
      handler(n, o) {
        let len = this.tabTitles.length - 1
        len >= +n ? (this.currentPage = +n) : (this.currentPage = len)
        if (len > 4) {
          this.$nextTick(() => {
            this._scrollToCurrentTab(n)
          })
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.widget {
  /* background-color: #ffffff; */
  height: 88px;
}
.tab-margin {
  margin-bottom: 16px;
}
.tab-padding-160 {
  padding: 0 160px;
}
.tab-padding-40 {
  padding: 0 40px;
}
.flex-expand-layout {
  flex: 1;
}
.tab-title-list {
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
}
.space-around-layout {
  justify-content: space-around;
}
.padding-layout-32 {
  padding: 0 32px;
}
.padding-layout-8 {
  padding: 0 8px;
}
.title-item {
  height: 88px;
  justify-content: center;
  align-items: stretch;
  border-bottom-style: solid;
  /* border-width: 1px; */
}
.tab-text-wrapper {
  height: 82px;
  justify-content: center;
}
/* tabpage 在dof-minibar内部 */
.minibar-inner {
  height: 76px;
}
.thidrd-wrapper {
  flex-direction: row;
  height: 52px;
  padding: 0 30px;
  border-radius: 26px;
  /* background-color: #232323; */
  justify-content: center;
  align-items: center;
}
.avatar-icon {
  width: 36px;
  height: 36px;
  margin-right: 8px;
}
.tab-text {
  lines: 1;
  text-overflow: ellipsis;
  font-family: PingFangSC-Medium;
  letter-spacing: 0;
  /* color: #8a8a8f; */
}
.third-text {
  font-size: 24px;
  /* color: #000000; */
}
.border-bottom-line {
  width: 40px;
  height: 6px;
  border-radius: 3px;
  margin-top: -10px;
  margin-left: 10px;
  background-color: transparent;
}

.border-bottom-line-secondary {
  height: 4px;
  border-radius: 3px;
  margin-top: -2px;
  background-color: transparent;
}

/* 新增三类固定标签 */

.thirdTabPanel {
  height: 128px;
}
.dof-third-panel {
  width: 750px;
  height: 128px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.btn-group-wrap {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 64px;
  /* overflow: hidden; */
}

.btn-text {
  font-family: PingFangSC-Medium;
  color: #ffffff;
  font-size: 28px;
  line-height: 64px;
  padding-left: 32px;
  padding-right: 32px;
}

.leftRadius {
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

.rightRadius {
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
}
</style>
