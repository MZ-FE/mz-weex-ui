<template>
  <div ref="wrapper">
    <div
      class="container"
      v-for="(item, index) in listData"
      :style="cellStyle"
      :key="'skid-' + index"
    >
      <div
        v-if="isAndroid"
        @click="dofCellClicked(index)"
        class="itemWrap"
        ref="menuItem"
        :style="{
          width:
            parseInt(width) +
            116 * (item.rightItem && item.rightItem.length) +
            'px',
        }"
        @swipe="slideMenu($event, index, item.rightItem.length)"
        @touchend="touchend"
      >
        <div>
          <slot name="swipeItem" v-bind:data="item" v-bind:index="index"></slot>
        </div>

        <div
          class="swipe-action-right"
          v-if="item.rightItem && item.rightItem.length > 0"
          :style="{ width: 116 * item.rightItem.length + 'px' }"
        >
          <div
            class="swipeItem"
            v-for="(rightCon, i) in item.rightItem"
            :key="i"
            :style="{ backgroundColor: rightCon.bgColor }"
            @click="onRightNode(index, i, rightCon.text)"
          >
            <text class="swipeText">{{ rightCon.text }}</text>
          </div>
        </div>
      </div>

      <div
        v-else
        @click="dofCellClicked(index)"
        ref="skid"
        class="dof-skid"
        :style="{
          width:
            parseInt(width) +
            116 * (item.rightItem && item.rightItem.length) +
            'px',
        }"
        @panstart="
          (e) =>
            !isAndroid &&
            onPanStart(
              e,
              item,
              index,
              item.rightItem ? item.rightItem.length : 0
            )
        "
        @panend="(e) => onPanEnd(e, item, index)"
      >
        <div ref="swipeItem">
          <slot name="swipeItem" v-bind:data="item" v-bind:index="index"></slot>
        </div>

        <div
          class="swipe-action-right"
          v-if="item.rightItem && item.rightItem.length > 0"
          :style="{ width: 116 * item.rightItem.length + 'px' }"
        >
          <div
            class="swipeItem"
            v-for="(rightCon, i) in item.rightItem"
            :key="i"
            :style="{ backgroundColor: rightCon.bgColor }"
            @click="onRightNode(index, i, rightCon.text)"
          >
            <text class="swipeText">{{ rightCon.text }}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  background-color: #00c277;
}
.dof-skid {
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
}

/* android */

.itemWrap {
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  background-color: yellow;
}

.swipe-action-right {
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
}
.swipeItem {
  width: 116px;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.swipeText {
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  lines: 2;
  line-height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<script>
import Binding from "weex-bindingx/lib/index.weex.js";
import Utils from "../utils";

const animation = weex.requireModule("animation");

export default {
  props: {
    width: {
      type: String,
      default: "750px",
    },
    listData: {
      type: Array,
      default: () => [],
    },
    itemStyle: {
      type: Object,
      default: () => ({}),
    },
    // 临时禁用滑动功能
    disableSwipe: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      mobileX: 0,
      webStarX: 0,
      saveIdx: null,
      isAndroid: Utils.env.isAndroid(),
      isIOS: Utils.env.isIOS(),
      cellCanClick: true, //android
      isHighlight: false,
    };
  },

  mounted() {},
  created() {},

  computed: {
    cellStyle() {
      return Object.assign(
        {
          marginBottom: "0",
        },
        {
          ...this.itemStyle,
          width: this.width,
        }
      );
    },
  },

  methods: {
    dofCellClicked(index) {
      //点击触发滑动恢复初始化
      if (this.isAndroid) {
        this.rightSlide(); // 列表初始化
        console.log(JSON.stringify(this.cellCanClick));
        this.cellCanClick && this.$emit("dofCellClicked", { index });
      } else {
        for (let index = 0; index < this.listData.length; index++) {
          this.special(this.$refs.skid[index], {
            transform: "translate(0, 0)",
          });
        }
        this.$emit("dofCellClicked", { index });
      }
    },

    special(dom, styles) {
      animation.transition(dom, {
        styles,
        duration: 150, // ms
        timingFunction: "ease",
        delay: 0, // ms
      });
    },
    onRightNode(index, i, text) {
      if (this.disableSwipe) {
        return;
      }

      if (this.isAndroid) {
        this.rightSlide();
        this.$emit("dofRightClicked", { index, i, text });
      } else {
        this.special(this.$refs.skid[this.saveIdx], {
          transform: "translate(0, 0)",
        });
        this.$emit("dofRightClicked", { index, i, text });
      }
    },

    onPanEnd(e, node, i) {
      if (this.disableSwipe) {
        return;
      }
      if (Utils.env.isWeb()) {
        const webEndX = e.changedTouches[0].pageX;
        this.movingDistance(webEndX - this.webStarX, node, this.$refs.skid[i]);
      }
    },

    // 使用官方的pan事件解决某些ios设备使用@swipe不能滑动的问题
    onPanStart: function (e, node, i, len) {
      if (this.disableSwipe) {
        return;
      }
      const { saveIdx } = this;
      if (saveIdx !== i && saveIdx !== null && this.$refs.skid[saveIdx]) {
        this.special(this.$refs.skid[saveIdx], {
          transform: "translate(0, 0)",
        });
        this.mobileX = 0;
      }
      this.saveIdx = i;
      !Utils.env.isWeb() ? this.mobile(e, node, i, len) : this.web(e, node, i);
      e.stopPropagation();
    },
    web(e) {
      this.webStarX = e.changedTouches[0].pageX;
    },
    mobile(e, node, i, len) {
      let el = this.$refs["skid"][i];
      Binding.bind(
        {
          anchor: el.ref,
          eventType: "pan",
          props: [
            {
              element: el.ref,
              property: "transform.translateX",
              // expression: `x+${this.isAndroid ? 0 : this.mobileX}`
              expression: 116 * len, //处理ios设备左滑移动距离，防止闪烁
            },
          ],
        },
        (e) => {
          const { state, deltaX } = e;
          if (state === "end") {
            this.mobileX = deltaX;
            // this.movingDistance(this.mobileX, node, el);
            this.movingDistance(e.deltaX, node, el); //add by lau
          }

          // 滑动结束
          this.$emit("swipeEnd", { index: i, deltaX });
        }
      );
    },
    movingDistance(scope, node, el) {
      const len = node.rightItem ? node.rightItem.length : 0;
      const distance = len * -116;
      // if (scope < -80*len) {
      //   this.special(el, {
      //     transform: `translate(${distance}px, 0)`
      //   });
      //   this.mobileX = distance;
      // } else {
      //   this.special(el, {
      //     transform: 'translate(0, 0)'
      //   });
      //   this.mobileX = 0;
      // }

      //modify by lau
      if (scope < 0) {
        this.special(el, {
          transform: `translate(${distance}px, 0)`,
        });
      } else if (scope > 0) {
        this.special(el, {
          transform: "translate(0, 0)",
        });
      } else {
        return;
      }
    },

    // 适配Android
    // 经n次尝试和测试后，发现weex的click事件和touchend事件冲突, 防止滑动后触发click事件
    // 这里异步处理，touchend事件结束后才激活向上传递的click事件
    touchend() {
      setTimeout(() => {
        this.cellCanClick = true;
      }, 100);
    },

    slideMenu(e, index, length) {
      this.cellCanClick = false;
      let ele = this.$refs.menuItem[index];
      let direction = e.direction;
      if (direction == "left") {
        this.leftSlide(e, ele, length);
      } else if (direction == "right") {
        this.rightSlide(ele);
      }
      e.stopPropagation();
    },

    // @params ele 要执行动画的元素
    leftSlide(e, ele, length) {
      this.rightSlide();
      animation.transition(ele, {
        styles: {
          transform: `translateX(-${116 * length}px)`,
        },
        duration: 150, //ms
        timingFunction: "ease",
        // needLayout: false,   //变化后是否刷新页面
        delay: 0, //ms
      });
      e.stopPropagation();
    },

    rightSlide() {
      let listItems = this.$refs.menuItem;
      for (let i = 0; i < listItems.length; i++) {
        animation.transition(
          listItems[i],
          {
            styles: {
              transform: "translateX(0px)",
            },
            duration: 100, //ms
            timingFunction: "ease-in",
            needLayout: true,
            delay: 0, //ms
          },
          function () {}
        );
      }
      return false;
    },
  },
};
</script>
