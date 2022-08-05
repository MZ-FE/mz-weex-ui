<template>
  <div>
    <mz-popup
      :show="showCalendar"
      :pos="pos"
      :popupStyle="popupStyle"
      :popupHeight="popupHeight"
      :btnText="btnText"
      :overlayCfg="overlayCfg"
      :boxShadow="boxShadow"
      :button="button"
      :showButton="showButton"
      @buttonClicked="$emit('buttonClicked')"
      @overlayClicked="$emit('overlayClicked')"
      @popupButtonClicked="popupButtonClicked"
    >
      <text :style="titleStyle" v-if="titleText">{{ titleText }}</text>
      <div class="calendar">
        <div class="week-title">
          <div class="week-item" v-for="day in WEEK_DAYS" :key="day">
            <text class="text-week" :style="weekStyle">{{ day }}</text>
          </div>
        </div>
        <scroller class="days-scroller" @scroll="scrollEvent">
          <div class="row" v-for="(week, r) in calendar" :key="r">
            <div
              class="day-item"
              v-for="(day, c) in week"
              :key="c"
              :ref="`day-${day.format('YYYY-MM-DD')}`"
              @click="checkDay(day)"
            >
              <text :style="dayComposedStyle(day)">{{ day.date() }}</text>
              <text
                :style="monthStyle"
                class="text-month"
                v-if="day.date() === 1"
                >{{ day.month() + 1 }}月</text
              >
              <text
                v-if="showTodayText(day)"
                :style="todayTextStyle"
                class="text-today"
                >今天</text
              >
            </div>
          </div>
        </scroller>
      </div>
      <slot v-if="showButton" slot="trigger" name="trigger"></slot>
    </mz-popup>
  </div>
</template>

<script>
import { DofButton } from "dolphin-weex-ui";
import MzPopup from "../mz-popup";
import dayjs from "dayjs";
const domModule = weex.requireModule("dom");
const today = dayjs();
const yesterday = today.subtract(1, "day");

/**
 * @description 根据当前日期生成日期序列
 * @param {number} months 日期跨度，默认为2个月
 */
export const generateCalendar = (months = 2) => {
  const weeks = [];
  const beginOfMonth = dayjs().startOf("month");
  const endOfWeek = dayjs().endOf("week");

  let currentDay = beginOfMonth.subtract(months - 1, "month").startOf("week"); // 当前月的上N个月开始，再偏移到该周的第一天

  let dates = [];
  while (currentDay.isBefore(endOfWeek)) {
    dates.push(currentDay);
    if (currentDay.day() === 6) {
      weeks.push(dates);
      dates = [];
    }
    currentDay = currentDay.add(1, "day");
  }

  return weeks;
};

module.exports = {
  components: { DofButton, MzPopup },
  props: {
    showCalendar: {
      type: Boolean,
      default: false,
    },
    // 显示默认的按钮或trigger插槽
    showButton: {
      type: Boolean,
      default: true,
    },
    // 从哪弹出 "free" | "bottom"
    pos: {
      type: String,
      default: "bottom",
    },
    // 尺寸\位置\背景,均由此参数控制,可覆盖设置
    popupStyle: {
      type: Object,
      default: () => ({}),
    },
    popupHeight: {
      type: [Number],
      default: 700,
    },
    // 日期跨度，以月为单位
    monthSpan: {
      type: Number,
      default: 3,
    },
    normalDayStyle: {
      type: Object,
      default: () => ({
        width: "46px",
        height: "46px",
        color: "#267aff",
        fontSize: "30px",
        lineHeight: "46px",
        textAlign: "center",
        borderRadius: "23px",
      }),
    },
    // 今天的数字样式
    todayStyle: {
      type: Object,
      default: () => ({}),
    },
    // 今天下标的样式
    todayTextStyle: {
      type: Object,
      default: () => ({
        color: "#29c3ff",
        fontSize: "16px",
      }),
    },
    checkedStyle: {
      type: Object,
      default: () => ({
        color: "#fff",
        backgroundColor: "#267aff",
      }),
    },
    disabledStyle: {
      type: Object,
      default: () => ({
        color: "#c7c7c7",
      }),
    },
    emphasizedStyle: {
      type: Object,
      default: () => ({
        color: "#c00",
        fontWeight: "bold",
      }),
    },
    monthStyle: {
      type: Object,
      default: () => ({
        color: "#29c3ff",
        fontSize: "16px",
      }),
    },
    weekStyle: {
      type: Object,
      default: () => ({
        color: "#c7c7c7",
        fontSize: "18px",
        fontWeight: "bold",
      }),
    },
    titleStyle: {
      type: Object,
      default: () => ({
        color: "#267aff",
        fontSize: "30px",
        fontWeight: "bold",
        height: "80px",
        lineHeight: "80px",
        paddingTop: "10px",
        left: 0,
        right: 0,
        textAlign: "center",
      }),
    },
    titleText: {
      type: String,
      default: "日历",
    },
    // 启用的日期列表，与禁用日期列表互斥存在
    enabledList: {
      type: Array,
      default: () => [],
    },
    // 禁用的日期列表
    disabledList: {
      type: Array,
      default: () => [],
    },
    // 突出显示的日期
    emphasizedList: {
      type: Array,
      default: () => [],
    },
    // 滚动到指定日期
    scrollToDay: {
      type: String,
      default: today.format("YYYY-MM-DD"),
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
    button: {
      type: Array,
      default: () => ["取消"],
    },
  },
  data() {
    return {
      checkedDate: today,
      WEEK_DAYS: ["日", "一", "二", "三", "四", "五", "六"],
    };
  },
  methods: {
    /**
     * @description 当天是否禁用
     * @param {dayjs} day
     * @returns {boolean}
     * ! 符合禁用的条件
     * ! 今天与选定日期的月份，差值超过 monthSpan - 1
     * ! 选定日期晚于今天
     * ! enabledList 非空，且 day 不在 enabledList 中
     * ! disabledList 非空，且 day 在 disabledList 中
     */
    isDisabled(day) {
      const { monthSpan, enabledList, disabledList } = this;
      const diff = today.month() - day.month();
      return (
        diff > monthSpan - 1 ||
        (diff < 0 && diff > monthSpan - 13) ||
        day.isAfter(today) ||
        (enabledList.length &&
          enabledList.every((d) => !day.isSame(d, "day"))) ||
        disabledList.some((d) => day.isSame(d, "day"))
      );
    },
    isEmphasized(day) {
      const { emphasizedList } = this;
      return emphasizedList.some((d) => day.isSame(d, "day"));
    },
    isToday(day) {
      return day.isSame(today, "day");
    },
    checkDay(day) {
      if (this.isDisabled(day)) {
        return;
      }

      this.checkedDate = day;
      this.$emit("checked", day);
    },
    showTodayText(day) {
      return this.isToday(day) && !this.isToday(this.checkedDate);
    },

    dayComposedStyle(day) {
      const style = Object.assign({}, this.normalDayStyle);
      if (this.isToday(day)) {
        Object.assign(style, this.todayStyle);
      }
      if (day.isSame(this.checkedDate, "day")) {
        Object.assign(style, this.checkedStyle);
      }
      if (this.isDisabled(day)) {
        Object.assign(style, this.disabledStyle);
      }
      if (this.isEmphasized(day)) {
        Object.assign(style, this.emphasizedStyle);
      }
      return style;
    },
    scrollTo() {
      const todayEl = this.$refs[`day-${this.scrollToDay}`];
      if (todayEl) {
        const weekTitleHeight = 100;
        domModule.scrollToElement(todayEl[0], {
          offset: -this.popupHeight / 2 + weekTitleHeight,
        });
      }
    },
    scrollEvent(e) {
      const { contentOffset } = e;
      const rowHeight = 80;
      const index = Math.floor(-contentOffset.y / rowHeight) + 2; // 向下偏移三周
      const d = this.calendar[index][6]; // 取当前行/星期的周六
      this.$emit("scroll", d.format("YYYY-MM"), e);
    },
    popupButtonClicked(index, text) {
      this.$emit("popupButtonClicked", { index, text });
    },
  },
  computed: {
    calendar() {
      return generateCalendar(this.monthSpan);
    },
    btnText() {
      if (this.isToday(this.checkedDate)) {
        return "今天";
      } else if (this.checkedDate.isSame(yesterday, "day")) {
        return "昨天";
      }
      return this.checkedDate.format("YYYY-MM-DD");
    },
  },
  watch: {
    showCalendar(val) {
      if (val && this.scrollToDay) {
        setTimeout(() => this.scrollTo(), 800);
      }
    },
  },
};
</script>

<style scoped>
.calendar {
  position: relative;
  height: 520px;
}

.days-scroller {
  height: 400px;
}

.row,
.week-title {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.day-item,
.week-item {
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
}

.text-month {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  text-align: center;
}
.text-today {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  text-align: center;
}
</style>
