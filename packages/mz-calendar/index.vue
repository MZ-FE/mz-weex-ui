<template>
  <div>
    <mz-popup
      :show="showCalendar"
      :pos="pos"
      :popupStyle="popupStyle"
      :btnText="btnText"
      @buttonClicked="$emit('buttonClicked')"
      @overlayClicked="$emit('overlayClicked')"
    >
      <div class="calendar">
        <div class="week-title">
          <div class="week-item" v-for="day in WEEK_DAYS" :key="day">
            <text class="text-week">{{ day }}</text>
          </div>
        </div>
        <scroller class="days-scroller">
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
            </div>
          </div>
        </scroller>
      </div>
      <slot slot="trigger"></slot>
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
    // 从哪弹出 "free" | "bottom"
    pos: {
      type: String,
      default: "bottom",
    },
    height: {
      type: [Number],
      default: 520,
    },
    // 日期跨度，以月为单位
    monthSpan: {
      type: Number,
      default: 3,
    },
    normalDayStyle: {
      type: Object,
      default: () => ({
        width: "42px",
        height: "42px",
        color: "#267aff",
        fontSize: "30px",
        lineHeight: "42px",
        textAlign: "center",
        borderRadius: "21px",
      }),
    },
    todayStyle: {
      type: Object,
      default: () => ({
        color: "#267aff",
        backgroundColor: "#e3ebf9",
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
        fontSize: "18px",
      }),
    },
    // 禁用的日期
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
     * ! 今天与选定日期的月份，差值超过 monthSpan - 1
     * ! 选定日期晚于今天
     * ! 在 disabledList 中
     */
    isDisabled(day) {
      const { monthSpan, disabledList } = this;
      const diff = today.month() - day.month();
      return (
        diff > monthSpan - 1 ||
        (diff < 0 && diff > monthSpan - 13) ||
        day.isAfter(today) ||
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
          offset: -this.height / 2 + weekTitleHeight,
        });
      }
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
        setTimeout(() => this.scrollTo(), 500);
      }
    },
  },
};
</script>

<style scoped>
.calendar {
  position: relative;
  height: 500px;
  padding-top: 20px;
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

.text-week {
  color: #29c3ff;
  font-size: 18px;
}

.text-month {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  text-align: center;
}
</style>
