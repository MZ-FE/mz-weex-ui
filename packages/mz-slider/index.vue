<template>
  <div
    :class="['dof-slider']"
    :style="disabledStyle"
    @touchstart="onTouchStart"
    @horizontalpan="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div
      class="dof-slider-track"
      ref="track"
      :style="trackStyle"
      :key="'slider'"
    >
      <div
        v-if="isGradientBar"
        class="dof-slider-gradient-bar"
        :style="gradientBarStyle"
      >
        <div
          class="slider-gradient-bar-left"
          v-if="_gradientBarConfig.mid"
          :style="{
            height: `${this.trackHeight}px`,
            backgroundImage: `linear-gradient(to right, ${_gradientBarConfig.start}, ${_gradientBarConfig.mid})`,
            width: midWidth + _buttonSize / 2 + 1 + 'px',
          }"
        ></div>
        <div
          v-if="_gradientBarConfig.mid"
          class="dof-slider-gradient-bar-right"
          :style="{
            height: `${this.trackHeight}px`,
            backgroundImage: `linear-gradient(to right, ${_gradientBarConfig.mid}, ${_gradientBarConfig.end})`,
            width: midWidth + _buttonSize / 2 + 'px',
          }"
        ></div>
        <div
          class="slider-gradient-bar-left"
          v-if="!_gradientBarConfig.mid"
          :style="{
            height: `${this.trackHeight}px`,
            backgroundImage: `linear-gradient(to right, ${_gradientBarConfig.start}, ${_gradientBarConfig.end})`,
            right: 0 + 'px',
          }"
        ></div>
      </div>
      <div v-if="!isGradientBar" :style="lineStyle"></div>
      <div :class="['dof-slider-bar']" ref="bar" :style="barStyle">
        <div
          v-if="!isGradientBar"
          :style="smallBarStyle"
          :class="[
            barColor || isGradientBar ? '' : `dof-slider-bar--${this.theme}`,
          ]"
        ></div>
        <div
          :class="['dof-slider-button', isGradientBar ? 'button-scale' : '']"
          v-for="(itemStyle, i) in buttonStyle"
          :key="i + disabled"
          :style="itemStyle"
        ></div>
      </div>
    </div>
    <div class="dof-slider-scales" v-if="$slots.default">
      <slot></slot>
    </div>
    <div
      class="dof-slider-disabled-mask"
      v-if="isGradientBar && disabled"
      @touchstart="maskTouchStart"
    ></div>
  </div>
</template>

<script>
// import { getBoundingClientRect } from '../utils/dom.js'
import { clamp } from "../utils/math-extension.js";
import { Touch } from "../utils/touch.js";
const dom = weex.requireModule("dom");

const getBoundingClientRect = (element, func, delay = 50) => {
  setTimeout(() => dom && dom.getComponentRect(element, func), delay);
};

export default {
  mixins: [],
  props: {
    value: {
      type: [Number, Array], // Number为单点滑杆， Array为双侧滑杆
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    trackHeight: {
      type: Number,
      default: 40,
    },
    trackColor: {
      type: String,
      default: "#F2F2F2",
    },
    theme: {
      type: String,
      default: "brand",
    },
    barColor: {
      type: String,
      default: "",
    },
    buttonColor: {
      type: String,
      default: "#ffffff",
    },
    buttonSize: {
      type: Number,
      default: 0,
    },
    delay: {
      type: Number,
      default: 50,
    },
    gradientBarConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      touch: Touch.Create(),
      current: 0,
      startValue: 0,
      width: 0,
      dragTargetIndex: null, // 0 1
      startRight: null,
      prevScreenX: null,
      isTouching: false,
      isShow: false,
      getWidthRectTime: 0,
    };
  },
  watch: {
    barStyle() {
      this.isShow = true;
    },
  },
  computed: {
    _gradientBarConfig() {
      return this.gradientBarConfig;
    },
    _buttonSize() {
      if (this.buttonSize) return this.buttonSize;
      return 24;
    },
    // 是否双侧
    isBoth() {
      return Object.prototype.toString.call(this.value) === "[object Array]";
    },
    // 是否渐变bar
    isGradientBar() {
      return this._gradientBarConfig.start && this._gradientBarConfig.end;
    },
    scope() {
      return this.max - this.min;
    },
    interactive() {
      return !this.disabled && !this.readonly;
    },
    _trackHeight() {
      if (this.trackHeight < this._buttonSize) return this._buttonSize * 1.6;
      return this.trackHeight;
    },
    trackStyle() {
      const res = {
        height: `${this._trackHeight}px`,
        backgroundColor: this.trackColor,
        borderRadius: `${this._trackHeight / 2}px`,
      };
      // 渐变bar样式
      if (this.isGradientBar || this.trackHeight < this._buttonSize) {
        res.backgroundColor = "transparent";
      }
      return res;
    },
    barStyle() {
      let percent = 0;
      if (this.isBoth) {
        percent =
          (Math.min(this.value[1], this.max) -
            Math.max(this.value[0], this.min)) /
          this.scope;
      } else {
        percent = (this.value - this.min) / this.scope;
      }

      // const width = ((this.value - this.min) / this.scope) * this.width
      // const widthCss = clamp(width+this._trackHeight, this._trackHeight, this.width)

      // fix: 修复value带来的width小于this._trackHeight时，bar宽度不变
      const width = percent * this.width;
      let widthCss = this._trackHeight;
      if (percent < 0) {
        widthCss = this._trackHeight;
      } else if (percent > 1) {
        widthCss = this.width + this._trackHeight;
      } else {
        // 正常滑动
        widthCss = width + this._trackHeight;
      }
      const res = {
        width: `${widthCss}px`,
        borderRadius: `${this._trackHeight / 2}px`,
        height: `${this._trackHeight}px`,
      };

      if (this.isBoth)
        res.left =
          ((Math.max(this.value[0], this.min) - this.min) / this.scope) *
            this.width +
          "px";

      res.backgroundColor = "transparent";
      return res;
    },
    smallBarStyle() {
      const buttonPadding =
        this.trackHeight > this._buttonSize
          ? 0
          : (this._trackHeight - this._buttonSize) / 2 + 1;
      const res = {
        position: "absolute",
        top: `${(this._trackHeight - this.trackHeight) / 2}px`,
        left: `${buttonPadding}px`,
        right: `${buttonPadding}px`,
        height: `${this.trackHeight}px`,
        borderRadius: `${this.trackHeight / 2}px`,
      };
      if (this.barColor) {
        res.backgroundColor = this.barColor;
      }
      return res;
    },
    buttonStyle() {
      const buttonSize = this._buttonSize;
      const res = {
        top: `${(this._trackHeight - buttonSize) / 2}px`,
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        borderRadius: `${buttonSize / 2}px`,
        backgroundColor: this.buttonColor,
      };
      const buttonPadding = (this._trackHeight - buttonSize) / 2;
      return this.isBoth
        ? [
            { ...res, left: `${buttonPadding}px` },
            { ...res, right: `${buttonPadding}px` },
          ]
        : [{ ...res, right: `${buttonPadding}px` }];
    },
    lineStyle() {
      const buttonPadding = (this._trackHeight - this._buttonSize) / 2 + 1;
      const res = {
        position: "absolute",
        top: `${(this._trackHeight - this.trackHeight) / 2}px`,
        left: `${buttonPadding}px`,
        right: `${buttonPadding}px`,
        height: `${this.trackHeight}px`,
        borderRadius: `${this.trackHeight / 2}px`,
      };
      if (this.trackColor) {
        res.backgroundColor = this.trackColor;
      }
      return res;
    },
    gradientBarStyle() {
      const buttonPadding = (this._trackHeight - this._buttonSize) / 2 + 1;

      console.log("gradientBarStyle");
      console.log(buttonPadding);
      const res = {
        top: `${(this._trackHeight - this.trackHeight) / 2}px`,
        left: `${0}px`,
        right: `${0}px`,
        height: `${this.trackHeight}px`,
        borderRadius: `${this.trackHeight / 2}px`,
      };
      return res;
    },
    midWidth() {
      return this.width / 2;
    },
    disabledStyle() {
      if (!this.isShow) return { opacity: 0 };
      return this.isGradientBar && this.disabled
        ? { opacity: 0.3 }
        : { opacity: 1 };
    },
  },
  mounted() {
    this.getRect();
  },
  methods: {
    getRect() {
      getBoundingClientRect(
        this.$refs.track,
        (res) => {
          if (res.result && res.size.width !== 0) {
            // 实际可滑动长度（可变化范围）= bar宽度 - btn宽度
            this.width = res.size.width - this._trackHeight;
          } else {
            this.getWidthRectTime < 6
              ? setTimeout(() => {
                  this.getWidthRectTime++;
                  this.getRect();
                }, 50)
              : (this.width = res.size.width - this._trackHeight);
          }
        },
        this.delay
      );
    },
    async onTouchStart(e) {
      if (!this.interactive) {
        return;
      }
      if (this.isGradientBar) this.isTouching = true;
      this.touch.start(e);

      if (this.isBoth) {
        let { left, right } = await this.getBarRect();
        let startX = this.touch.startX;
        this.startRight = right;
        this.dragTargetIndex =
          Math.abs(left - startX) < Math.abs(right - startX) ? 0 : 1;
        this.current = this.value[this.dragTargetIndex];
      } else {
        this.current = this.value;
      }

      this.startValue = this.format(this.current);
    },
    onTouchMove(e) {
      if (!this.interactive) {
        return;
      }

      this.touch.move(e);

      const delta = this.touch.deltaX;
      if (this.isBoth && this.value[0] === this.value[1]) {
        this.dragTargetIndex =
          e.changedTouches[0].screenX > this.prevScreenX ? 1 : 0;
        if (delta === 0) {
          this.dragTargetIndex = this.touch.startX >= this.startRight ? 1 : 0;
        }
      }

      const total = this.width;
      const diff = (delta / total) * this.scope;

      this.current = this.startValue + diff;
      this.prevScreenX = e.changedTouches[0].screenX;

      if (delta === 0) return;
      this.update(this.current);
    },
    async onTouchEnd(e) {
      if (!this.interactive) {
        return;
      }
      this.isTouching = false;
      // 点按
      if (this.startValue === this.current) {
        const total = this.width;
        let { left, right } = await this.getBarRect();
        const diff =
          ((this.touch.startX - (this.dragTargetIndex === 0 ? left : right)) /
            total) *
          this.scope;
        this.current = this.startValue + diff;
      }
      this.update(this.current, true);
      this.$emit("dragend", e);
    },
    format(value) {
      const min = +this.min;
      const max = +this.max;
      const step = +this.step;

      let val = clamp(value, min, max);
      if (this.isBoth) {
        this.dragTargetIndex === 1 && (val = clamp(value, this.value[0], max));
        this.dragTargetIndex === 0 && (val = clamp(value, min, this.value[1]));
      }

      const diff = Math.round((val - min) / step) * step;

      return min + diff;
    },
    update(value, end = false) {
      let val = null;
      if (this.isBoth) {
        if (this.dragTargetIndex === 0) {
          val = [this.format(value), this.value[1]];
        }
        if (this.dragTargetIndex === 1) {
          val = [this.value[0], this.format(value)];
        }
      } else {
        val = this.format(value);
      }
      (!this.isBoth || this.dragTargetIndex !== null) &&
        this.$emit("input", val);
      if (end) {
        this.$emit("change", val);
      }
    },
    getBarRect() {
      return new Promise((resolve) => {
        getBoundingClientRect(
          this.$refs.bar,
          (res) => {
            if (res.result) {
              resolve({
                left: res.size.left,
                right: res.size.right,
              });
            }
          },
          0
        );
      });
    },
    maskTouchStart() {},
  },
};
</script>

<style scoped>
.dof-slider {
  flex-direction: column;
  position: relative;
}

.dof-slider-track {
  position: relative;
}

.dof-slider-bar {
  position: relative;
  overflow: hidden;
  /* transition-property: width;
  transition-duration: 100ms; */
}

.dof-slider-bar--brand {
  background-color: #267aff;
}

.dof-slider-bar--purple {
  background-color: #995efc;
}
.dof-slider-bar--blue-purple {
  background-color: #6575ff;
}
.dof-slider-bar--blue {
  background-color: #29c3ff;
}
.dof-slider-bar--cyan {
  background-color: #00cbb8;
}
.dof-slider-bar--yellow {
  background-color: #ffaa10;
}
.dof-slider-bar--orange {
  background-color: #ff8225;
}
.dof-slider-bar--orange-red {
  background-color: #ff6a4c;
}
.dof-slider-bar--gray-offline {
  background-color: #7c879b;
}

.dof-slider-button {
  position: absolute;
}
.button-scale {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-delay: 0s;
  transform: scale(1);
}
.button-scale:active {
  transform: scale(1.5);
}
.dof-slider-button-touching {
  transform: scale(1.5);
}
.dof-slider-scales {
  position: relative;
  margin-top: 16px;
  height: 24px;
}
.dof-slider-gradient-bar {
  position: absolute;
}
.slider-gradient-bar-left {
  position: absolute;
  top: 0px;
  left: 0px;
}
.dof-slider-gradient-bar-right {
  position: absolute;
  top: 0px;
  right: 0px;
}
.dof-slider-disabled-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>
