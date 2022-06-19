<template>
  <div class="wrapper">
    <dof-minibar title="日历" />

    <mz-calendar :monthSpan="4" @checked="dayChecked" />
  </div>
</template>

<script>
import { DofMinibar } from "dolphin-weex-ui";
import MzCalendar from "../../index";

export default {
  data() {
    return {};
  },
  components: {
    DofMinibar,
    MzCalendar,
  },
  methods: {
    dayChecked(day) {
      this.$toast(day.format("MM-DD"));
    },
  },

  computed: {},
};
</script>

<style scoped>
.wrapper {
  background-color: #f0f0f0;
}
</style>