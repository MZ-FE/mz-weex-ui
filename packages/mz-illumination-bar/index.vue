<template>
  <div class="container-block" :style="{ height: barHeight + 82 + 'px' }">
    <div
      class="step-index"
      v-for="(index, item) in indexArr"
      :key="index"
      :style="{ bottom: item * 72 + 40 + 'px', width: item === 0 || item === 5 || item === 10 ? 32 + 'px' : 16 + 'px' }"
    ></div>
    <div class="index-block" :style="{ bottom: (9 - index) * 72 + 42 + 'px' }">
      <text class="index-text">当前亮度</text>
      <div class="index-line"></div>
    </div>
    <text class="index-num" :style="{ bottom: 9 * 72 + 42 + 'px' }" v-if="index !== 0">1</text>
    <text class="index-num" :style="{ bottom: 5 * 72 + 42 + 'px' }" v-if="index !== 5">5</text>
    <text class="index-num" :style="{ bottom: 4 * 72 + 42 + 'px' }" v-if="index !== 4">6</text>
    <text class="index-num" :style="{ bottom: 42 + 'px' }" v-if="index !== 9">10</text>

    <text class="tip-text" :style="tip1Style">{{ tipArr[0] }}</text>
    <text class="tip-text" :style="tip2Style">{{ tipArr[1] }}</text>
    <text class="tip-text" :style="tip3Style">{{ tipArr[2] }}</text>
    <text class="tip-text" :style="tip4Style">{{ tipArr[3] }}</text>

    <div ref="bar-container" class="bar-block" :style="{ height: barHeight + 80 + 'px' }">
      <div class="value-block-bg" :style="{ 'background-color': barColor[3] }"></div>
      <div ref="value-block3" class="value-block" :style="valueBlock3Style" v-if="tabShow[0]"></div>
      <div ref="value-block2" class="value-block" :style="valueBlock2Style" v-if="tabShow[1]"></div>
      <div ref="value-block1" class="value-block" :style="valueBlock1Style" v-if="tabShow[2]"></div>
      <div class="mask"></div>

      <div
        class="tab-block"
        ref="tab-block-1"
        @touchstart="weexStartHandler1"
        @touchend="weexEndHandler"
        @verticalpan="weexHandler1"
        :prevent-move-event="preventMoveEvent"
        :style="tabBlockStyle1"
        v-if="tabShow[2]"
      >
        <div class="tab">
          <image class="image-tab" :src="tabIcon"></image>
        </div>
      </div>

      <div
        class="tab-block"
        ref="tab-block-2"
        @touchstart="weexStartHandler2"
        @touchend="weexEndHandler"
        @verticalpan="weexHandler2"
        :prevent-move-event="preventMoveEvent"
        :style="tabBlockStyle2"
        v-if="tabShow[1]"
      >
        <div class="tab">
          <image class="image-tab" :src="tabIcon"></image>
        </div>
      </div>

      <div
        class="tab-block"
        ref="tab-block-3"
        @touchstart="weexStartHandler3"
        @touchend="weexEndHandler"
        @verticalpan="weexHandler3"
        :prevent-move-event="preventMoveEvent"
        :style="tabBlockStyle3"
        v-if="tabShow[0]"
      >
        <div class="tab">
          <image class="image-tab" :src="tabIcon"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Binding from 'weex-bindingx'

const dom = weex.requireModule('dom')

import { illuminationBarTab } from "../setting/icon.base64";

export default {
  name: 'illuminationBar',
  data: () => ({
    preventMoveEvent: true,
    minDist: 1,
    timeout: 100,
    isAndroid: false,
    barHeight: 720,
    diffY1: 0,
    diffY2: 0,
    diffY3: 0,
    tabIcon: illuminationBarTab,
    stepHeight: 40,
    indexArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    valueResult: [0, 0, 0],
    min: 0,
    max: 10,
    disabled: false,
    stepMode: true
  }),
  props: {
    value: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [0, 0, 5]
    },
    index: {
      type: Number,
      default: 1
    },
    tipArr: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: ['', '', '较暗', '较亮']
    },
    tabShow: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [false, false, true]
    },
    barColor: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: ['#d8e9ff', '#a3d3ff', '#69b8ff', '#549eff']
    }
  },
  watch: {
    value (e) {
      this.diffY1 = this._getDiffX(e[2])
      this.diffY2 = this._getDiffX(e[1])
      this.diffY3 = this._getDiffX(e[0])

      this.valueResult = e
    }
  },
  created () {
    this.isAndroid = this.isAndroidPlatform()
  },
  mounted () {
    this.barContainer = this.$refs['bar-container']

    //--------------------
    this.tabBlock1 = this.$refs['tab-block-1']
    this.tabBlock2 = this.$refs['tab-block-2']
    this.tabBlock3 = this.$refs['tab-block-3']

    this.valueBlock1 = this.$refs['value-block1']
    this.valueBlock2 = this.$refs['value-block2']
    this.valueBlock3 = this.$refs['value-block3']

    this.diffY1 = this._getDiffX(this.value[2])
    this.diffY2 = this._getDiffX(this.value[1])
    this.diffY3 = this._getDiffX(this.value[0])

    this.valueResult = this.value

    // 是否支持expresstionBinding
    if (Binding.isSupportBinding && Binding.prepare) {
      this.tabBlock1 &&
      Binding.prepare({
        anchor: this.tabBlock1.ref,
        eventType: 'pan'
      })
      this.valueBlock1 &&
      Binding.prepare({
        anchor: this.valueBlock1.ref,
        eventType: 'pan'
      })
      this.tabBlock2 &&
      Binding.prepare({
        anchor: this.tabBlock2.ref,
        eventType: 'pan'
      })
      this.valueBlock2 &&
      Binding.prepare({
        anchor: this.valueBlock2.ref,
        eventType: 'pan'
      })
      this.tabBlock3 &&
      Binding.prepare({
        anchor: this.tabBlock3.ref,
        eventType: 'pan'
      })
      this.valueBlock3 &&
      Binding.prepare({
        anchor: this.valueBlock3.ref,
        eventType: 'pan'
      })
    }

    // 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
    setTimeout(() => {
      dom.getComponentRect(this.barContainer, option => {
        const { bottom } = option.size
        this.bottomDiffY = bottom
      })
    }, 100)
  },

  computed: {
    valueBlock1Style () {
      let bottom = 0
      let height = 0

      bottom = this.barHeight - this.diffY1 + this.stepHeight
      height = this.barHeight + this.stepHeight

      return {
        height: height + 'px',
        transform: `translateY(${bottom}px)`,
        backgroundColor: this.barColor[0]
      }
    },
    valueBlock2Style () {
      let bottom = 0
      let height = 0

      bottom = this.barHeight - this.diffY2 + this.stepHeight
      height = this.barHeight + this.stepHeight

      return {
        height: height + 'px',
        transform: `translateY(${bottom}px)`,
        backgroundColor: this.barColor[1]
      }
    },
    valueBlock3Style () {
      let bottom = 0
      let height = 0

      bottom = this.barHeight - this.diffY3 + this.stepHeight
      height = this.barHeight + this.stepHeight

      return {
        height: height + 'px',
        transform: `translateY(${bottom}px)`,
        backgroundColor: this.barColor[2]
      }
    },
    tabBlockStyle1 () {
      let bottom = this.diffY1 * -1
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tabBlockStyle2 () {
      let bottom = this.diffY2 * -1
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tabBlockStyle3 () {
      let bottom = this.diffY3 * -1
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tip1Style () {
      let bottom = (this.diffY3 * -1 - 762) / 2
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tip2Style () {
      let bottom = (this.diffY2 * -1 - this.diffY3 - 32) / 2
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tip3Style () {
      let bottom = (this.diffY1 * -1 - this.diffY2 - 46) / 2
      return {
        transform: `translateY(${bottom}px)`
      }
    },
    tip4Style () {
      let bottom = (-40 - this.diffY1 - 10) / 2
      return {
        transform: `translateY(${bottom}px)`
      }
    }
  },
  methods: {
    isAndroidPlatform () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'android'
    },
    // 更新单选值或最小值
    weexHandler1 (e) {
      const self = this
      switch (e.state) {
        case 'start':
          self.bindBlock1()
          break
        case 'move':
          dom.getComponentRect(this.tabBlock1, option => {
            const { bottom } = option.size
            const value = this._getValue(bottom - this.bottomDiffY)
            this.valueResult[2] = value
            this.$emit('updateValue', this.valueResult)
          })
          break
        case 'end':
          if (!this.disabled) {
            if (this.isAndroid) {
              setTimeout(function () {
                self.$emit('slideEnd')
              }, 150)
            } else {
              this.$emit('slideEnd')
            }
          }
          break
        default:
          break
      }
    },
    weexHandler2 (e) {
      const self = this
      switch (e.state) {
        case 'start':
          self.bindBlock2()
          break
        case 'move':
          dom.getComponentRect(this.tabBlock2, option => {
            const { bottom } = option.size
            const value = this._getValue(bottom - this.bottomDiffY)
            this.valueResult[1] = value
            this.$emit('updateValue', this.valueResult)
          })
          break
        case 'end':
          if (!this.disabled) {
            if (this.isAndroid) {
              setTimeout(function () {
                self.$emit('slideEnd')
              }, 150)
            } else {
              this.$emit('slideEnd')
            }
          }
          break
        default:
          break
      }
    },
    weexHandler3 (e) {
      const self = this
      switch (e.state) {
        case 'start':
          self.bindBlock3()
          break
        case 'move':
          dom.getComponentRect(this.tabBlock3, option => {
            const { bottom } = option.size
            const value = this._getValue(bottom - this.bottomDiffY)
            this.valueResult[0] = value
            this.$emit('updateValue', this.valueResult)
          })
          break
        case 'end':
          if (!this.disabled) {
            if (this.isAndroid) {
              setTimeout(function () {
                self.$emit('slideEnd')
              }, 150)
            } else {
              this.$emit('slideEnd')
            }
          }
          break
        default:
          break
      }
    },

    weexStartHandler1 () {
      // 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
      if (!this.isAndroid) {
        return
      }

      this.firstInterval1 = setInterval(() => {
        dom.getComponentRect(this.tabBlock1, option => {
          const { bottom } = option.size
          const value = this._getValue(bottom - this.bottomDiffY)
          this.valueResult[2] = value
          this.$emit('updateValue', this.valueResult)
        })
      }, this.timeout)
    },

    weexStartHandler2 () {
      if (!this.isAndroid) {
        return
      }

      this.firstInterval2 = setInterval(() => {
        dom.getComponentRect(this.tabBlock2, option => {
          const { bottom } = option.size
          const value = this._getValue(bottom - this.bottomDiffY)
          this.valueResult[1] = value
          this.$emit('updateValue', this.valueResult)
        })
      }, this.timeout)
    },

    weexStartHandler3 () {
      if (!this.isAndroid) {
        return
      }

      this.firstInterval3 = setInterval(() => {
        dom.getComponentRect(this.tabBlock3, option => {
          const { bottom } = option.size
          const value = this._getValue(bottom - this.bottomDiffY)
          this.valueResult[0] = value
          this.$emit('updateValue', this.valueResult)
        })
      }, this.timeout)
    },

    // 清除定时器
    weexEndHandler () {
      if (!this.isAndroid) {
        return
      }
      this.firstInterval1 && clearInterval(this.firstInterval1)
      this.firstInterval2 && clearInterval(this.firstInterval2)
      this.firstInterval3 && clearInterval(this.firstInterval3)
    },

    bindBlock1 () {
      const self = this

      // 如果禁用，不行进行表达式绑定
      if (self.disabled) {
        Binding.unbind({
          token: this.gesToken1,
          eventType: 'pan'
        })
        this.gesToken1 = 0
        return
      }

      // 初始化按钮&条的大小范围
      let blockMax = self.barHeight

      let step = self.barHeight / (self.max - self.min)
      let stepHalf = step / 2

      const startBottom = self.diffY1 - blockMax - self.minDist

      const props = [
        {
          element: self.tabBlock1.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `min(${self.diffY2 - step}, max( floor((${self.diffY1}-y)/${stepHalf})%2 == 0 ?
            (floor((${self.diffY1}-y)/${step})*${step})
            : (ceil((${self.diffY1}-y)/${step})*${step}) , 0))*-1`
            : `min(${self.diffY2}, max(${self.diffY1} - y, 0))*-1`
        },
        {
          element: self.valueBlock1.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `(min(-${self.barHeight - self.diffY2 + step}, max( floor((${startBottom}-y)/${stepHalf})%2 == 0 ?
            (floor((${startBottom}-y)/${step})*${step})
            : (ceil((${startBottom}-y)/${step})*${step}) , -${blockMax}))-${self.stepHeight})*-1`
            : `(min(${self.diffY2 - self.barHeight}, max(${startBottom}-y, -${blockMax}))-${self.stepHeight})*-1`
        }
      ]

      const gesTokenObj = Binding.bind(
        {
          anchor: self.tabBlock1.ref,
          eventType: 'pan',
          props
        },
        e => {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            const range = self.getRange1()
            if (self.stepMode) {
              self.diffY1 = self._restrictValue(
                range.rangeX1,
                Math.floor((self.diffY1 - e.deltaY) / stepHalf) % 2 === 0
                  ? Math.floor((self.diffY1 - e.deltaY) / step) * step
                  : Math.ceil((self.diffY1 - e.deltaY) / step) * step
              )
            } else {
              // 限制diffX1范围
              self.diffY1 = self._restrictValue(range.rangeX1, self.diffY1 - e.deltaY)
            }
            self.bindBlock1()
          }
        }
      )
      this.gesToken1 = gesTokenObj.token
    },

    bindBlock2 () {
      const self = this

      // 如果禁用，不行进行表达式绑定
      if (self.disabled) {
        Binding.unbind({
          token: this.gesToken2,
          eventType: 'pan'
        })
        this.gesToken2 = 0
        return
      }

      // 初始化按钮&条的大小范围
      let blockMax = self.barHeight

      let step = self.barHeight / (self.max - self.min)
      let stepHalf = step / 2

      const startBottom = self.diffY2 - blockMax - self.minDist

      const props = [
        {
          element: self.tabBlock2.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `min(${self.diffY3 - step}, max( floor((${self.diffY2}-y)/${stepHalf})%2 == 0 ?
            (floor((${self.diffY2}-y)/${step})*${step})
            : (ceil((${self.diffY2}-y)/${step})*${step}), ${self.diffY1 + step}))*-1`
            : `min(${self.diffY3}, max(${self.diffY2} - y, ${self.diffY1}))*-1`
        },
        {
          element: self.valueBlock2.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `(min(-${self.barHeight - self.diffY3 + step}, max( floor((${startBottom}-y)/${stepHalf})%2 == 0 ?
            (floor((${startBottom}-y)/${step})*${step})
            : (ceil((${startBottom}-y)/${step})*${step}), -${blockMax - self.diffY1 - step}))-${self.stepHeight})*-1`
            : `(min(${self.diffY3 - self.barHeight}, max(${startBottom}-y, -${blockMax}))-${self.stepHeight})*-1`
        }
      ]

      const gesTokenObj = Binding.bind(
        {
          anchor: self.tabBlock2.ref,
          eventType: 'pan',
          props
        },
        e => {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            const range = self.getRange2()
            if (self.stepMode) {
              self.diffY2 = self._restrictValue(
                range.rangeX1,
                Math.floor((self.diffY2 - e.deltaY) / stepHalf) % 2 === 0
                  ? Math.floor((self.diffY2 - e.deltaY) / step) * step
                  : Math.ceil((self.diffY2 - e.deltaY) / step) * step
              )
            } else {
              // 限制diffX1范围
              self.diffY2 = self._restrictValue(range.rangeX1, self.diffY2 - e.deltaY)
            }
            self.bindBlock2()
          }
        }
      )
      this.gesToken2 = gesTokenObj.token
    },

    bindBlock3 () {
      const self = this

      // 如果禁用，不行进行表达式绑定
      if (self.disabled) {
        Binding.unbind({
          token: this.gesToken3,
          eventType: 'pan'
        })
        this.gesToken3 = 0
        return
      }

      // 初始化按钮&条的大小范围
      let blockMax = self.barHeight

      let step = self.barHeight / (self.max - self.min)
      let stepHalf = step / 2

      const startBottom = self.diffY3 - blockMax - self.minDist

      const props = [
        {
          element: self.tabBlock3.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `min(${blockMax}, max( floor((${self.diffY3}-y)/${stepHalf})%2 == 0 ?
            (floor((${self.diffY3}-y)/${step})*${step})
            : (ceil((${self.diffY3}-y)/${step})*${step}), ${self.diffY2 + step}))*-1`
            : `min(${blockMax}, max(${self.diffY3} - y, ${self.diffY2}))*-1`
        },
        {
          element: self.valueBlock3.ref,
          property: 'transform.translateY',
          expression: self.stepMode
            ? `(min(0, max( floor((${startBottom}-y)/${stepHalf})%2 == 0 ?
            (floor((${startBottom}-y)/${step})*${step})
            : (ceil((${startBottom}-y)/${step})*${step}), -${blockMax - self.diffY2 - step}))-${self.stepHeight})*-1`
            : `(min(0, max(${startBottom}-y, -${blockMax}))-${self.stepHeight})*-1`
        }
      ]

      const gesTokenObj = Binding.bind(
        {
          anchor: self.tabBlock3.ref,
          eventType: 'pan',
          props
        },
        e => {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            const range = self.getRange3()
            if (self.stepMode) {
              self.diffY3 = self._restrictValue(
                range.rangeX1,
                Math.floor((self.diffY3 - e.deltaY) / stepHalf) % 2 === 0
                  ? Math.floor((self.diffY3 - e.deltaY) / step) * step
                  : Math.ceil((self.diffY3 - e.deltaY) / step) * step
              )
            } else {
              // 限制diffX1范围
              self.diffY3 = self._restrictValue(range.rangeX1, self.diffY3 - e.deltaY)
            }
            self.bindBlock3()
          }
        }
      )
      this.gesToken3 = gesTokenObj.token
    },

    // 获取diffY1
    getRange1 () {
      let step = this.barHeight / (this.max - this.min)
      return {
        rangeX1: [0, this.diffY2 - step]
      }
    },
    getRange2 () {
      let step = this.barHeight / (this.max - this.min)
      return {
        rangeX1: [this.diffY1 + step, this.diffY3 - step]
      }
    },
    getRange3 () {
      let step = this.barHeight / (this.max - this.min)
      return {
        rangeX1: [this.diffY2 + step, this.barHeight]
      }
    },

    // 限制取值范围
    _restrictValue (range, value) {
      if (range && range.length && range.length === 2) {
        if (value < range[0]) {
          return range[0]
        } else if (value > range[1]) {
          return range[1]
        } else {
          return value
        }
      }
    },

    _getValue (diffX) {
      return Math.round((diffX / this.barHeight) * (this.max - this.min) + this.min) + 10
    },
    _getDiffX (value) {
      let transValue = (value - 10) * -1
      return ((transValue - this.min) / (this.max - this.min)) * this.barHeight
    },
    goTo (e) {
      this.diffY1 = this._getDiffX(e[2])
      this.diffY2 = this._getDiffX(e[1])
      this.diffY3 = this._getDiffX(e[0])

      this.valueResult = this.value
    }
  }
}
</script>

<style scoped>
.container-block {
  width: 750px;
}
.bar-block {
  width: 336px;
  position: absolute;
  left: 196px;
  bottom: 1px;
  overflow: hidden;
}
.tab-block {
  width: 336px;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.tab {
  width: 36px;
  height: 40px;
  position: absolute;
  left: 150px;
  top: 20px;
}
.image-tab {
  width: 36px;
  height: 40px;
}
.value-block {
  width: 336px;
  height: 0;
  position: absolute;
  left: 0;
  border-top-width: 3px;
  border-top-color: #ffffff;
  border-top: dashed;
}
.mask {
  width: 336px;
  height: 40px;
  background-color: #ffffff;
  position: absolute;
  bottom: -1px;
  left: 0;
}
.step-index {
  height: 2px;
  background-color: #979797;
  position: absolute;
  right: 570px;
}
.index-block {
  height: 70px;
  width: 196px;
  position: absolute;
  left: 0;
}
.index-text {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  line-height: 70;
  color: rgba(250, 100, 0, 0.8);
  font-weight: 400;
  margin-left: 60px;
}
.index-line {
  width: 12px;
  height: 66px;
  border-radius: 6px;
  background-color: rgba(250, 100, 0, 0.8);
  position: absolute;
  top: 2px;
  right: 16px;
}
.index-num {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  line-height: 70px;
  color: rgba(250, 100, 0, 0.8);
  font-weight: 400;
  position: absolute;
  right: 570px;
}
.value-block-bg {
  width: 336px;
  height: 760px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.tip-text {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #666666;
  line-height: 32px;
  font-weight: 400;
  position: absolute;
  left: 548px;
  bottom: 0;
}
</style>
