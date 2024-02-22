<template>
  <div class="dof-diamond-tab">
    <div class="dof-diamond-tab-box" :style="{ borderRadius }">
      <div
        v-for="(tab, i) in tabData"
        :key="i"
        :class="['dof-diamond-tab-item']"
        @click="clickTabItem(i)"
        @touchstart="touchTabItem(i)"
        @touchend="touchEnd"
        :style="{ left: -i + 'px' }"
      >
        <div
          :class="[
            'dof-diamond-tab-item-label',
            i === 0 ? 'first-tab' : '',
            i === tabData.length - 1 ? 'last-tab' : ''
          ]"
          :style="{
            'border-color': tabActive === i ? activeBorderColor : borderColor,
            'background-color': touchActive === i ? touchColor : bgColor,
            height: itemHeight + 'px',
            width: itemWidth + 'px',
            'border-top-left-radius': i === 0 ? borderRadius : '0px',
            'border-bottom-left-radius': i === 0 ? borderRadius : '0px',
            'border-top-right-radius': i === tabData.length - 1 ? borderRadius : '0px',
            'border-bottom-right-radius': i === tabData.length - 1 ? borderRadius : '0px'
          }"
        >
          <text
            class="label-text"
            :style="{
              fontSize: textFontSize,
              color: tabActive === i || touchActive === i ? activeTextColor : textColor
            }"
            >{{ tab.label.length > labelMaxLen ? tab.label.slice(0, labelMaxLen) + '...' : tab.label }}</text
          >
        </div>
        <!-- 模拟斜杆 -->
        <div
          v-if="i !== tabData.length - 1"
          class="tabLine"
          :style="
            Object.assign(
              {
                backgroundColor: bgColor,
                // 'background-color': touchActive === i ? touchColor : bgColor,
                'border-left-color': touchActive === i ? touchColor : 'transparent',
                'border-right-color': touchActive - 1 === i ? touchColor : 'transparent',
                'border-left-width': !(tabActive === i || tabActive - 1 === i) ? '0px' : '2px',
                'border-right-width': !(tabActive === i || tabActive - 1 === i) ? '0px' : '3px'
              },
              tabLineStyle
            )
          "
        >
          <div
            class="tabLineMaskDown"
            :style="
              Object.assign(
                {
                  'border-color': tabActive === i || tabActive - 1 === i ? activeBorderColor : 'transparent',
                  'background-color': touchActive - 1 === i ? touchColor : bgColor
                },
                maskStyle
              )
            "
          ></div>
          <div
            class="tabLineMaskUp"
            :style="
              Object.assign(
                {
                  'background-color': touchActive === i ? touchColor : bgColor
                },
                maskStyle
              )
            "
          ></div>
          <div
            class="border-top"
            :style="{
              'border-color': tabActive === i ? activeBorderColor : borderColor,
              // 优化边缘显示
              width: tabActive - 1 === i ? itemHeight / 4 - 1 + 'px' : itemHeight / 4 + 3 + 'px'
            }"
          ></div>
          <div
            class="border-bottom"
            :style="
              Object.assign(
                {
                  'background-color': tabActive - 1 === i ? activeBorderColor : borderColor
                },
                fakeBorderStyle
              )
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabData: {
      type: Array,
      required: false,
      default: () => []
    },
    active: {
      type: Number,
      required: false,
      default: null
    },
    // 背景色
    bgColor: {
      type: String,
      required: false,
      default: '#000'
    },
    // 选择状态边框颜色
    activeBorderColor: {
      type: String,
      required: false,
      default: '#b35336'
    },
    // 字体大小
    textFontSize: {
      type: String,
      required: false,
      default: '24px'
    },
    // 字体颜色
    textColor: {
      type: String,
      required: false,
      default: '#71717a'
    },
    // 选中态字体颜色
    activeTextColor: {
      type: String,
      required: false,
      default: '#ffffff'
    },
    // 常规边框颜色
    borderColor: {
      type: String,
      required: false,
      default: 'rgba(61, 61, 66, 1)'
    },
    // 点击颜色
    touchColor: {
      type: String,
      required: false,
      default: '#1A1A1C'
    },
    // 高度
    itemHeight: {
      type: Number,
      default: 64
    },
    itemWidth: {
      type: Number,
    },
    labelMaxLen:{
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderRadius() {
      return this.itemHeight / 2 + 'px'
    },
    tabLineStyle() {
      return {
        width: this.itemHeight / 4 + 1 + 'px',
        height: this.itemHeight + 'px'
      }
    },
    maskStyle() {
      return {
        width: this.itemHeight + 2 + 'px',
        height: this.itemHeight + 2 + 'px'
      }
    },
    fakeBorderStyle() {
      return {
        width: this.itemHeight / 4 + 2 + 'px'
      }
    }
  },
  watch: {
    active: {
      handler(val, oldVal) {
        this.tabActive = val
      }
    },
    // tabActive(val) {
    //   this.$emit('tabActiveChange', {index:val,data:this.tabData[val]})
    // }
  },
  data() {
    return {
      tabActive: this.active,
      touchActive: null
    }
  },
  mounted() {},
  methods: {
    clickTabItem(i) {
      if(this.disabled){
        this.$emit('tabDisabled')
        return
      }else{
        this.tabActive = i
        this.$emit('tabActiveChange', {index:i,data:this.tabData[i]})
      }
    },
    touchTabItem(i) {
      this.touchActive = i
    },
    touchEnd() {
      this.touchActive = null
    }
  }
}
</script>

<style scoped>
.dof-diamond-tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dof-diamond-tab-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border-radius: 32px; */
}
.dof-diamond-tab-item {
  display: flex;
  flex-direction: row;
  position: relative;
}
.dof-diamond-tab-item-label {
  /* height: 64px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  /* border-width: 2px;
  border-left-width: 0px;
  border-right-width: 0px; */
  border-top-width: 2px;
  border-bottom-width: 2px;
}
.label-text {
  font-family: PingFangSC-Regular;
  /* 使用1px解决鸿蒙显示多1像素问题 */
  padding: 1px;
}
.label-text-active {
}
.first-tab {
  border-left-width: 2px;
  padding-left: 32px;
  /* border-radius: 32px 0px 0px 32px; */
}
.last-tab {
  border-right-width: 2px;
  padding-right: 32px;
  /* border-radius: 0px 32px 32px 0px; */
}

.tabLine {
  /* width: 16px; */
  /* height: 64px; */
  overflow: hidden;
  /* border: 2px solid transparent; */
  border-top: 0;
  border-bottom: 0;
  position: relative;
}
.tabLineMaskDown {
  /* width: 66x; */
  /* height: 66px; */
  position: absolute;
  right: 0;
  top: 0;
  border-top-width: 2px;
  transform: rotateZ(-77deg);
  transform-origin: right top;
}
.tabLineMaskUp {
  /* width: 66x; */
  /* height: 66px; */
  position: absolute;
  right: 0;
  top: 0;
  /* border-top: 2px solid transparent; */
  transform: rotateZ(13deg);
  transform-origin: right top;
}
.border-top {
  /* width: 18px; */
  /* height: 4px; */
  /* 使用border解决ios显示多1像素问题 */
  border-top-width: 4px;
  top: -2px;
  left: -3px;
  position: absolute;
}
.border-bottom {
  /* width: 18px; */
  height: 4px;
  bottom: -2px;
  position: absolute;
}
</style>
