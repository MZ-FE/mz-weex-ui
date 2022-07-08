<template>
  <div class="card" :style="{ height: cardHeight + 'px' }">
    <div class="date-block">
      <text class="date-text">{{ title }}</text>
    </div>

    <div class="item-block" v-for="(item, index) in list" :key="index">
      <text class="item-time">{{ item.label }}</text>
      <text class="item-content">{{ item.content }}</text>
      <div class="rightIcon">
        <slot name="rightIcon"></slot>
      </div>

      <div class="line-top" v-if="index != 0"></div>
      <div class="line-bottom" v-if="index != list.length - 1"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    cardHeight () {
      return this.list.length * 88 + 112
    }
  }
}
</script>

<style scoped>
.card {
  margin-top: 16px;
  background-color: #ffffff;
}
.date-block {
  height: 96px;
}
.date-text {
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #666666;
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
  color: #8a8a8f;
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
  color: #000000;
  line-height: 24px;
  font-weight: 400;
  position: absolute;
  left: 208px;
  top: 32px;
}
.circle {
  width: 12px;
  height: 12px;
  background: #c7c7cc;
  border-radius: 6px;
  position: absolute;
  left: 148px;
  top: 38px;
}
.line-top {
  width: 2px;
  height: 49px;
  background-color: #e5e5e8;
  position: absolute;
  left: 153px;
  top: 0;
}
.line-bottom {
  width: 2px;
  height: 49px;
  background-color: #e5e5e8;
  position: absolute;
  left: 153px;
  bottom: 0;
}
.rightIcon {
  position: absolute;
  right: 32px;
  top: 24px;
}
</style>
