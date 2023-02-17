<template>
  <div
    class="card"
    :style="{ height: cardHeight + 'px', backgroundColor: cardBgColor }"
  >
    <div class="date-block">
      <text class="date-text" :style="{ color: dateColor }">{{ title }}</text>
    </div>

    <div class="item-block" v-for="(item, index) in list" :key="index">
      <text class="item-time" :style="composedTimeStyle(item.isWarn)">{{
        item.label
      }}</text>
      <text class="item-content" :style="composedContentStyle(item.isWarn)">{{
        item.content
      }}</text>
      <div class="rightIcon">
        <slot name="rightIcon" v-bind:listItem="item"></slot>
      </div>

      <div
        class="line-top"
        :style="{ backgroundColor: lineColor }"
        v-if="index !== 0"
      ></div>
      <div
        class="line-bottom"
        :style="{ backgroundColor: lineColor }"
        v-if="index !== list.length - 1"
      ></div>
      <div class="dot" :style="dotStyle(item.isWarn)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    // 卡片底色
    cardBgColor: {
      type: String,
      default: "#ffffff",
    },
    dateColor: {
      type: String,
      default: "#666666",
    },
    timeColor: {
      type: String,
      default: "#8a8a8f",
    },
    contentColor: {
      type: String,
      default: "#000000",
    },
    lineColor: {
      type: String,
      default: "#e5e5e8",
    },
    dotColor: {
      type: String,
      default: "#c7c7cc",
    },
    warnigColor: {
      type: String,
      default: "#ff3b30",
    },
  },
  computed: {
    cardHeight() {
      return this.list.length * 88 + 112;
    },
  },
  methods: {
    composedTimeStyle(isWarn = false) {
      return { color: isWarn ? this.warnigColor : this.timeColor };
    },
    composedContentStyle(isWarn = false) {
      return { color: isWarn ? this.warnigColor : this.contentColor };
    },
    dotStyle(isWarn = false) {
      return { backgroundColor: isWarn ? this.warnigColor : this.dotColor };
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 16px;
}
.date-block {
  height: 96px;
}
.date-text {
  font-family: PingFangSC-Medium;
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  top: 36px;
  left: 33px;
}
.item-block {
  height: 88px;
}
.item-time {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  text-align: right;
  line-height: 24px;
  font-weight: 400;
  position: absolute;
  left: 32px;
  top: 32px;
}
.item-content {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  position: absolute;
  left: 208px;
  top: 32px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  position: absolute;
  left: 148px;
  top: 38px;
}
.line-top {
  width: 2px;
  height: 49px;
  position: absolute;
  left: 153px;
  top: 0;
}
.line-bottom {
  width: 2px;
  height: 49px;
  position: absolute;
  left: 153px;
  bottom: 0;
}
.rightIcon {
  position: absolute;
  right: 32px;
  top: 24px;
}
.text-warn {
  color: #ff3b30;
}
</style>
