<template>
  <div>
    <dof-minibar
      backgroundColor="transparent"
      textColor="#000000"
      title="mz-slider-bar 滑动条"
    >
    </dof-minibar>

    <mz-slider-bar v-bind="sliderBarCfg"></mz-slider-bar>
  </div>
</template>

<style scoped></style>
<script>
  import { DofMinibar } from 'dolphin-weex-ui'
  import { MzSliderBar } from '../../index';

  export default {
    components: {
      DofMinibar,
      MzSliderBar
    },
    data: () => ({
      sliderBarCfg: {
        length: 400,
        range: false,
        min: 0,
        max: 100,
        value: 50,
        validColor: ['#7C879B', '#FFAA10'],
        defaultValue: 50,
        disabled: false
      }
    }),
    created () {
    },
    methods: {
      slideEnd(e) {
        console.log(JSON.stringify(e))
      },
    }
  };
</script>
