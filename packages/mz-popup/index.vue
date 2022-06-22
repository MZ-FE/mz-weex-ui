<template>
  <div class="wrapper">
    <div @touchend="handleTouchEnd">
      <dof-overlay
        :show="haveOverlay"
        v-if="show"
        ref="overlay"
        v-bind="composedOverlayCfg"
        @dofOverlayBodyClicked="dofOverlayBodyClicking"
      />
    </div>
    <div
      ref="popupRef"
      v-if="show"
      class="popup"
      :height="height"
      :hack="isNeedShow"
      @click="popupClicked"
      :style="composedStyle"
    >
      <slot></slot>
    </div>
    <div ref="btnWrapperRef">
      <slot name="trigger">
        <dof-button
          ref="btnRef"
          type="primary"
          size="small"
          :text="btnText"
          @dofButtonClicked="dofButtonClicked"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import { DofOverlay, DofButton } from "dolphin-weex-ui";
const domModule = weex.requireModule("dom");
const animation = weex.requireModule("animation");

module.exports = {
  components: { DofOverlay, DofButton },
  props: {
    // 弹层是否显示
    show: {
      type: Boolean,
      default: false,
    },
    // 从哪弹出 "free" | "bottom"
    pos: {
      type: String,
      default: "free",
    },
    btnText: {
      type: String,
      default: "显示弹层",
    },
    // 是否带有遮罩屏蔽
    haveOverlay: {
      type: Boolean,
      default: true,
    },
    // 遮罩层配置，用于覆盖默认配置
    overlayCfg: {
      type: Object,
      default: () => ({}),
    },
    // 弹层下是否显示投影，可转入自定义投影样式
    boxShadow: {
      type: Boolean | String,
      default: true,
    },
    // 弹层高度
    popupHeight: {
      type: Number,
      default: 500,
    },
    // 尺寸\位置\背景,均由此参数控制,可覆盖设置
    popupStyle: {
      type: Object,
      default: () => ({}),
    },
    animation: {
      type: Object,
      default: () => ({
        timingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
      }),
    },
  },
  data: () => ({
    btnSize: {},
    btnWrapperSize: {},
    popupSize: {},
    // 默认遮罩层配置
    defaultOverlayCfg: {
      hasAnimation: true,
      timingFunction: ["ease-in", "ease-out"],
      duration: 300,
      opacity: 0, // 遮罩存在但不显示
    },
    // 默认弹框样式
    defaultStyle: {
      left: "0px",
      width: "750px",
      transformOrigin: "top center",
      backgroundColor: "#ffffff",
    },
    screenHeight: 1080,
  }),
  computed: {
    // HACK 弹层动画
    isNeedShow() {
      try {
        setTimeout(() => {
          this.appearPopup(this.show);
        }, 50);
      } catch (error) {
        this.$nextTick(() => {
          this.appearPopup(this.show);
        });
      }
      return this.show;
    },
    composedStyle() {
      const {
        defaultStyle,
        popupStyle,
        boxShadow,
        btnSize,
        popupHeight,
        screenHeight,
      } = this;
      const style = {
        height: `${this.popupHeight}px`,
      };
      if (boxShadow) {
        const defaultShadow = "0 8px 8px rgba(0, 0, 0, 0.1)";
        style.boxShadow =
          typeof boxShadow === "string" ? boxShadow : defaultShadow;
      }

      if (this.pos === "bottom") {
        style.top = `${screenHeight}px`;
        style.borderTopLeftRadius = "32px";
        style.borderTopRightRadius = "32px";
      } else {
        style.borderRadius = "32px";

        // 其它自动判断弹框方向 // HACK 非严格计算
        if (btnSize.top < 700) {
          style.top = `${btnSize.height + btnSize.top}px`;
        } else {
          style.top = `${btnSize.top - popupHeight}px`;
        }
      }
      return { ...defaultStyle, ...style, ...popupStyle };
    },
    composedOverlayCfg() {
      return { ...this.defaultOverlayCfg, ...this.overlayCfg };
    },
    btnSizeGot() {
      return Object.keys(this.btnSize).length > 0;
    },
    // 弹层是否覆盖按钮
    isCovered() {
      const { btnSize, btnWrapperSize, popupSize: p } = this;
      const b = this.btnSizeGot ? btnSize : btnWrapperSize;
      return b.top < p.top + p.height && p.top < b.top + b.height;
    },
  },
  mounted() {
    this.appearPopup(this.show);
    domModule.getComponentRect("viewport", (data) => {
      this.screenHeight = data.size.height;
    });
  },
  methods: {
    handleTouchEnd(e) {
      // 点击穿透问题
      e.preventDefault && e.preventDefault();
    },
    dofButtonClicked() {
      if (this.btnSizeGot) {
        this.$emit("buttonClicked");
      } else {
        domModule.getComponentRect(this.$refs.btnRef, ({ size, result }) => {
          if (result) {
            // console.log(JSON.stringify(size));
            this.btnSize = size;
          }
          this.$emit("buttonClicked");
        });
      }
    },

    dofOverlayBodyClicking() {
      this.appearPopup(false);
    },
    appearPopup(isShow, duration = 300) {
      const popupEl = this.$refs["popupRef"];
      if (!popupEl) {
        return;
      }
      const styles = {};
      if (this.pos === "bottom") {
        styles.transform = `translateY(-${isShow ? this.popupHeight : 0}px)`;
      } else {
        styles.opacity = isShow ? 1 : 0;
      }
      animation.transition(
        popupEl,
        {
          styles,
          duration,
          delay: 0,
          ...this.animation,
        },
        () => {
          // 打开弹框时计算弹框尺寸
          if (isShow) {
            domModule.getComponentRect(popupEl, ({ size, result }) => {
              if (result) {
                // console.log(JSON.stringify({ popupEl: size }));
                this.popupSize = size;
              }
            });

            // 按钮尺寸不存在，则计算wrapper的尺寸
            if (!this.btnSizeGot) {
              domModule.getComponentRect(
                this.$refs.btnWrapperRef,
                ({ size, result }) => {
                  if (result) {
                    // console.log(JSON.stringify({ btnWrapperRef: size }));
                    this.btnWrapperSize = size;
                  }
                }
              );
            }
          }
          // 关闭弹框时 emit 事件
          else {
            this.$emit("overlayClicked");
          }
        }
      );
    },
    popupClicked() {
      if (this.isCovered) {
        this.$emit("buttonClicked");
      }
      this.$emit("popupClicked");
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  right: 0;
  left: 0;
  width: 750px;
}
</style>
