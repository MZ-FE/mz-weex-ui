<template>
  <div>
    <dof-minibar
      backgroundColor="transparent"
      textColor="#000000"
      title="mz-slider-card 滑动条卡片"
    >
    </dof-minibar>

    <MzSliderCard
      v-model="value"
      :min="1"
      :max="4"
      themeColor="#267AFF"
      title="门铃音量"
      :isShowValue="false"
      :axisData="axisData"
      @slideEnd="slideEnd"
    >
    </MzSliderCard>
  </div>
</template>

<style scoped></style>
<script>
  import { DofMinibar } from 'dolphin-weex-ui'
  import { MzSliderCard } from '../../index';

  export default {
    components: {
      DofMinibar,
      MzSliderCard
    },
    data: () => ({
      value: 1,
      axisData: [
        {
          label: '静音',
          value: 1
        },
        {
          label: '低',
          value: 2
        },
        {
          label: '中',
          value: 3
        },
        {
          label: '高',
          value: 4
        }
      ]
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
