<template>
  <div class="wrapper">
    <div
      class="index-line"
      v-for="i in 11"
      :key="i"
      :style="{ left: i * 67 - 28 + 'px', height: i == 1 || i == 6 || i == 11 ? '30px' : '15px' }"
    ></div>
    <text class="index-num" :style="{ left: '60px' }" v-if="envIndex != 1">1</text>
    <text class="index-num" :style="{ left: '124px' }" v-if="envIndex == 1">2</text>
    <text class="index-num" :style="{ left: '324px' }" v-if="envIndex != 5">5</text>
    <text class="index-num" :style="{ left: '394px' }" v-if="envIndex != 6">6</text>
    <text class="index-num" :style="{ left: '596px' }" v-if="envIndex == 10">9</text>
    <text class="index-num" :style="{ left: '666px' }" v-if="envIndex != 10">10</text>
    <text class="index-des" :style="{ left: envIndex * 67 - 50 + 'px' }">当前亮度</text>
    <div class="index-icon-block center" :style="{ left: envIndex * 67 - 8 + 'px' }">
      <image class="index-img" :src="iconIndex"></image>
    </div>

    <text class="env-des" :style="{ left: envDes1Left + 'px' }">较暗</text>
    <text class="env-des" :style="{ right: envDes2Right + 'px' }">较亮</text>

    <div class="bar-bg">
      <div class="bg-block"></div>
      <div class="value-block" :style="{ width: valueBlockWidth + 'px' }"></div>
      <div class="tap-icon center" :style="{ left: tabIconLeft + 'px' }">
        <image class="tab-img" :src="iconTab"></image>
      </div>

      <slider-bar
        class="slider-bar"
        v-bind="config"
        @updateValue="sliderBarUpdateValue"
        @slideEnd="sliderBarSlideEnd"
        @sliderClick="sliderBarSlideClick"
      ></slider-bar>
    </div>
  </div>
</template>

<script>
import sliderBar from "./sliderBar.vue";

export default {
  name: 'illuminationBar',
  components: {
    sliderBar
  },
  props: {
    index: {
      type: Number,
      default: 3
    },
    envIndex: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      iconIndex:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAAE6DSy/AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAHgAAAACyl2QUAAADOklEQVRIDb1XO28TQRC+vTuDLEAilJQRCkJUyOdIKClAyk+AkpJHTcFLpDob4xSpSUro4CekIBKWkHBoEEgBISQKKAEpSgL27g0zC3Pe29t1/ECcZM/ONzPfzu7Ojn1B4Hv6aQ3IJuiLlUCIrZCA/AFI8nFhQCH9RtImcBACcIsAkROSIsQ+gYXHdCCDToM9TGNl+bW26S9YPV+Vu709dmRJTsWFsGViSTmoNLluEgzW+RfNAnjkdDBXINPkGTtpBgAoLBcCuFRwkI0kY4ClTGtfaBxCe+Ekg6bE09R4Ye9NBz0WYrWEmQC06rOY8BMTs8eF5E2jatTuZBC0GOOzY52lk0A2ausAwVV2YukiKRHgjm3gti5xkC1tkgIBlvH7AGDODrL1ePFYRVzclITnBJj2N0x7xnb26XFcPSHudr5rAtzpPp5+7HP24XEUnfbZ/g2OG/rYV2k8Q+k6sIHuDZ7GFdn7qWuWcVt6Ccx7RUVlB7LuJOCuxE5mRTLG0kmAtaC7GDuRpOo0dR6XCMzbzk4kXaVNeInA7AbkYD5U5qZO4wIBrr1rO5g63RG7/eQE8PxCjHl6Gv6ARjbr2wPNyEB1dj6bBu8YLxu1crbrDKC1OMM9jA3DpNrr5cWlCZQaXm02Gd1aLvEQHszP4cbkKdnOPl31fuklh1JlN3xOw/BJrv8wvolteUcbh4FKRnZ23mDMGR0nxNt44eg5bpPjcI2dAJWQ2u19tKsGib5GRw6dEjdflv94DMlorASoXJXc/4STH3dxItmPKK7OUq932V1YfhNdRhOjsqVy901OvmTTPp7/CyYfj0faAboqSmXvRq1cEQgZReFZce/VB57IJw/cAWjMJypT26NOThORr47BWN/EjA9NoJ/WlySoLnaOkXaKSUlSDMUSh4nbY28C+At0OQiyUv+3CQ7Ws40/XG5PZwKqWb+GK3jqDhkfJS7idEWWElDN2u0sy9ZcztNgxEncNkfhbPG8HuK2l5zsoOn0sF1Z7uZ/c/IE8Pd+DX+VnNs03YTlaHxNW4/vb+kXHn0E/TRZ+V+TUzo0F86p3090AvFh/bLyArej9DpUzn86BFev8LOJc64Q029rWVNM9cuDvQAAAABJRU5ErkJggg==',
      iconTab:
        'data:image/png;base64,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',
      config: {
        length: 544,
        min: 0,
        max: 8,
        value: 0,
        disabled: false,
        stepMode: true
      },
      valueTemp: 0,
      isTouchEnd: true
    }
  },
  watch: {
    index () {
      this.config.value = this.index - 1
      this.valueTemp = this.config.value
    }
  },
  computed: {
    valueBlockWidth () {
      return (this.valueTemp + 1) * 67
    },
    isAndroid () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'android'
    },
    envDes1Left () {
      return ((this.valueTemp + 1) * 67) / 2 - 10
    },
    envDes2Right () {
      return ((10 - (this.valueTemp + 1)) * 67) / 2 - 10
    },
    tabIconLeft () {
      return (this.valueTemp + 1) * 67 - 8
    }
  },
  methods: {
    sliderBarUpdateValue (e) {
      if (this.isTouchEnd) {
        this.isTouchEnd = false
        return
      }
      this.valueTemp = e
      this.$emit('updateValue', e + 1)
    },
    sliderBarSlideEnd (e) {
      this.config.value = e
      this.valueTemp = e
      this.isTouchEnd = true
      this.$emit('slideEnd', e + 1)
    },
    sliderBarSlideClick (e) {
      this.config.value = e
      this.valueTemp = e
      this.isTouchEnd = true
      this.$emit('slideEnd', e + 1)
    }
  },
  created () {
    this.config.value = this.index - 1
    this.valueTemp = this.config.value
  }
}
</script>

<style scoped>
.wrapper {
  width: 750px;
  height: 422px;
}
.seekbar {
  width: 620px;
  height: 90px;
  position: absolute;
  left: 64px;
}
.bar-bg {
  width: 750px;
  height: 270px;
  position: absolute;
  left: 0;
  top: 60px;
}
.bg-block {
  width: 670px;
  height: 270px;
  position: absolute;
  left: 40px;
  top: 0;
  background-color: #d5e8ff;
}
.value-block {
  height: 270px;
  position: absolute;
  left: 40px;
  top: 0;
  background-color: #59a5ff;
  border-right-width: 3px;
  border-right-color: #ffffff;
  border-right: dashed;
}
.index-line {
  width: 4px;
  background-color: #c9c9c9;
  border-radius: 2px;
  position: absolute;
  top: 338px;
}
.index-num {
  width: 30px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  line-height: 30px;
  color: #fb8333;
  text-align: center;
  font-weight: 400;
  position: absolute;
  top: 334px;
}
.index-des {
  width: 120px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  line-height: 30px;
  color: #fb8333;
  text-align: center;
  font-weight: 400;
  position: absolute;
  top: 376px;
}
.env-des {
  width: 100px;
  font-family: PingFangSC-Regular;
  font-size: 32px;
  line-height: 34px;
  color: #666666;
  text-align: center;
  font-weight: 400;
  position: absolute;
  top: 10px;
}
.index-icon-block {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 340px;
}
.tap-icon {
  width: 96px;
  height: 96px;
  position: absolute;
  top: 84px;
}
.center {
  justify-content: center;
  align-items: center;
}
.index-img {
  width: 32px;
  height: 32px;
}
.tab-img {
  width: 88px;
  height: 58px;
}
.slider-bar {
  position: absolute;
  left: 76px;
  top: 0;
}
</style>
