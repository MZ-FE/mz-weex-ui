<template>
  <scroller class="link-list" scroll-direction="horizontal">
    <text
      v-for="(item, index) in list"
      :key="index"
      :style="getItemStyle(item)"
      @click="clickLink(item)"
      >{{ item.name }}</text
    >
  </scroller>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    itemStyle: {
      type: Object,
      default: () => ({}),
    },
    itemCheckedStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  name: "index",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    clickLink(item) {
      this.$emit("select", item);
    },
    getItemStyle(item, index) {
      let style = Object.assign(
        {
          marginRight: index === this.list.length - 1 ? "0" : "20px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(199, 199, 204, 1)",
          fontSize: "26px",
          lineHeight: "72px",
          textAlign: "center",
          borderRadius: "36px",
        },
        this.itemStyle
      );

      if (item.checked) {
        Object.assign(
          style,
          {
            borderWidth: "0",
            color: "#fff",
            backgroundColor: "#267aff",
          },
          this.itemCheckedStyle
        );
      }

      return style;
    },
  },

  created() {},

  mounted() {},

  destroyed() {},
};
</script>

<style scoped>
.link-list {
  width: 750px;
  padding: 24px 32px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}
</style>
