<template>
  <div class="wrapper">
    <dof-minibar title="日历" />

    <mz-calendar
      :showCalendar="showCalendar"
      :scrollToDay="scrollToDay"
      :monthSpan="4"
      @overlayClicked="showCalendar = false"
      @checked="dayChecked"
      :disabledList="disabledList"
      :emphasizedList="emphasizedList"
      :overlayCfg="{ opacity: 0 }"
      titleText="XXXXXX"
      boxShadow="0 -8px 16px rgba(0, 0, 0, 0.1)"
    >
      <text name="trigger" class="text-btn" @click="showCalendar = true"
        >showCalendar</text
      >
    </mz-calendar>
  </div>
</template>

<script>
import { DofMinibar } from "dolphin-weex-ui";
import MzCalendar from "../../index";

export default {
  data() {
    return {
      showCalendar: false,
      disabledList: ["2022-06-14", "2022-06-18"],
      emphasizedList: ["2022-04-15"],
      scrollToDay: "2022-04-15",
    };
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
.text-btn {
  width: 200px;
  color: #fff;
  line-height: 60px;
  text-align: center;
  background-color: #00a0e9;
  border-radius: 8px;
}
</style>