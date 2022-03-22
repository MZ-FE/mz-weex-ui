<template>
  <div class="log-list">
    <div class="line" v-if="list.length > 0"></div>
    <div class="log-item" v-for="(logItem, logIndex) in list" :key="logIndex">
      <text class="time-text">{{ logItem.label }}</text>
      <div class="dot"></div>

      <text class="content-text">{{ logItem.content }}</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},

  created () {},

  mounted () {},

  destroyed () {}
}
</script>

<style scoped>
.log-item {
  padding-top: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.time-text {
  width: 126px;
  padding-right: 20px;
  font-size: 24px;
  color: #8a8a8f;
  text-align: left;
  line-height: 24px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #c7c7cc;
  border-radius: 50%;
}

.log-list {
  position: relative;
}
.line {
  position: absolute;
  width: 2px;
  left: 131px;
  top: 40px;
  bottom: 12px;
  background-color: #e5e5e8;
}
.content-text {
  padding-left: 48px;
  font-size: 24px;
  color: #000000;
  line-height: 24px;
}
</style>
