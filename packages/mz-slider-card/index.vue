<template>
  <div class="card-pane" :style="{ width: width }">
    <div class="card">
      <div :class="[disabled ? 'opacity30' : 'opacity100']">
        <div class="header">
          <div class="flex-row center">
            <div v-if="iconSrc" class="icon center mr-16" :style="{ backgroundColor: color }">
              <image class="icon-img" :src="iconSrc"></image>
            </div>
            <text class="text-32 mr-16" :style="{ color: '#000000' }">{{ title }}</text>
            <div v-if="isShowValue" class="badge center">
              <text class="text-28" :style="{ color: '#979797' }">{{ slideValue }}{{ unit }}</text>
            </div>
          </div>

          <div>
            <slot name="headerRight"></slot>
          </div>
        </div>

        <div class="slider-wrapper">
          <native-slider
            :value="value"
            :min="min"
            :max="max"
            :pointColor="showPointColor"
            :axisBgColor="themeColor"
            @slideChange="onSlideChange"
            @slideEnd="onSlideEnd"
            :disabled="disabled"
          ></native-slider>
        </div>

        <div class="axis-data">
          <text v-for="labelItem in axisData" :key="labelItem.label" class="text-20 text-grey-dark">{{
            labelItem.label
          }}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NativeSlider from './NativeSlider.vue'

export default {
  name: 'SlideControlCard',
  model: {
    prop: 'value',
    event: 'slideEnd'
  },
  components: {
    NativeSlider
  },
  props: {
    width: {
      type: String,
      default: '750px'
    },
    iconSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '滑动条'
    },
    themeColor: {
      type: String,
      default: '#FFAA10'
    },
    pointColor: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    isShowValue: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 50
    },
    unit: {
      type: String,
      default: ''
    },
    axisData: {
      type: Array,
      default: () => {
        return []
      }
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      slideValue: 0
    }
  },
  computed: {
    showPointColor() {
      let pointColor = this.pointColor || this.themeColor

      return this.disabled ? '#C7C7CC' : pointColor
    },
    color() {
      return this.disabled ? '#C7C7CC' : this.themeColor
    }
  },
  watch: {
    value(newVal) {
      this.slideValue = newVal
    }
  },
  created() {
    this.slideValue = this.value
  },
  methods: {
    onSlideChange(value) {
      this.slideValue = value
      this.$emit('slideChange', value)
    },
    onSlideEnd(value) {
      this.$emit('slideEnd', value)
    }
  }
}
</script>

<style scoped>
.card-pane {
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 32px;
  width: 686px;
  background-color: #fff;
  border-radius: 16px;
}

.flex-row {
  flex-direction: row;
}

.center {
  align-items: center;
  justify-content: center;
}
.header {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.mr-16 {
  margin-right: 16px;
}
.text-28 {
  font-size: 28px;
}
.text-32 {
  font-size: 32px;
}
.icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.opacity30 {
  opacity: 0.3;
}
.opacity100 {
  opacity: 1;
}
.slider-wrapper {
  margin-top: 40px;
}
.badge {
  padding: 0 10px;
  min-width: 110px;
  height: 40px;
  border-width: 2px;
  border-color: #979797;
  border-radius: 20px;
  opacity: 0.5;
}
.axis-data {
  margin-top: 8px;
  width: auto;
  height: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.text-20 {
  font-size: 20px;
}

.text-grey-dark {
  color: #8a8a8f;
}

.icon-img {
  width: 32px;
  height: 32px;
}
</style>
