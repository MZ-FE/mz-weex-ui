<template>
  <midea-seek-bar
    :max="max"
    :min="min"
    :value="value"
    :step="step"
    :index="index"
    :attr="attr"
    :unit="unit"
    :showTip="showTip"
    :axisH="axisH"
    :pointH="pointH"
    :pointColor="pointColor"
    :axisColor="axisColor"
    :axisBgColor="axisBgColor"
    :axisBgAlpha="axisBgAlpha"
    :axisStartColor="axisStartColor"
    :axisEndColor="axisEndColor"
    :isOneStepSlider="isOneStepSlider"
    :disable="disabled"
    @slideChange="slideChange"
    @slideEnd="slideEnd"
    :style="sliderStyle"
  ></midea-seek-bar>
</template>

<script>
export default {
  name: 'NativeSlider',
  model: {
    prop: 'value',
    event: 'slideChange'
  },
  props: {
    height: {
      type: String,
      default: '64px'
    },
    max: {
      // 滑动范围最大值
      type: [String, Number],
      default: '100'
    },
    min: {
      // 滑动范围最小值
      type: [String, Number],
      default: '0'
    },
    value: {
      // 滑动条当前值
      type: [String, Number],
      default: '50'
    },
    step: {
      // 滑动步长
      type: [String, Number],
      default: '1'
    },
    index: {
      // 索引，同一个页面循环显示多个sliders会用到，区别每个slider,默认：1
      type: [String, Number],
      default: 1
    },
    attr: {
      // 属性值，可用来区分 不同slider 默认：level
      type: [String, Number],
      default: 'level'
    },
    axisH: {
      // 滑条高度
      type: [String, Number],
      default: '4'
    },
    pointH: {
      // 滑球高度
      type: [String, Number],
      default: '20'
    },
    pointColor: {
      // 滑球颜色
      type: String,
      default: '#ffaa10'
    },
    axisColor: {
      // 滑条未滑到的区域显示的颜色
      type: String,
      default: '#f2f2f2'
    },
    axisBgColor: {
      // 滑条滑到的区域显示的颜色
      type: String,
      default: '#ffaa10'
    },
    axisBgAlpha: {
      // 滑条滑到的区域显示的颜色
      type: [String, Number],
      default: '1'
    },
    axisStartColor: {
      // 滑条未滑到的区域显示的颜色 (渐变色开始)
      type: String,
      default: ''
    },
    axisEndColor: {
      // 滑条未滑到的区域显示的颜色 (渐变色结束)
      type: String,
      default: ''
    },
    showTip: {
      type: Boolean,
      default: false
    },
    isOneStepSlider: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sliderStyle() {
      return {
        flex: 1,
        height: this.height
      }
    }
  },
  methods: {
    slideEnd(event) {
      this.$emit('slideEnd', event.value)
    },
    slideChange(event) {
      this.$emit('slideChange', event.value)
    }
  }
}
</script>

<style scoped></style>
