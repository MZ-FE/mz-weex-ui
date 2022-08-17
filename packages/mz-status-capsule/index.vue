<template>
  <div class="status-capsule" :style="capsuleStyle">
    <div class="status-point" :style="insStatusPointStyle"></div>
    <slot>
      <text class="status-text" :style="textStyle">{{ text }}</text>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    capsuleStyle: {
      type: Object,
      default: () => ({}),
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    statusPointStyle: {
      type: Object,
      default: () => ({}),
    },
    statusColor: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    insStatusPointStyle() {
      const style = { ...this.statusPointStyle }
      if (this.statusColor) {
        style.backgroundColor = this.statusColor
      }
      return style
    },
  },
}
</script>

<style>
.status-capsule {
  padding: 20px 32px;
  border-radius: 999px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(102, 102, 102, 0.08);
}

.status-point {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: #666666;
  margin-right: 16px;
}

.status-text {
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #666666;
  font-weight: 600;
  text-align: center;
}
</style>
