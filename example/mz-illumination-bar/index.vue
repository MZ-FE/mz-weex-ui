<template>
  <div class="wrapper" @viewappear="appear">
    <dof-minibar title="明暗阀值设置" class="top-bar" :use-default-return="false" @dofMinibarLeftButtonClicked="goBack">
    </dof-minibar>

    <div class="des-block">
      <div :style="{ height: '20px' }"></div>
      <text class="des-text">{{ desText1 }}</text>
      <div :style="{ height: '24px' }"></div>
      <text class="des-text">{{ desText2 }}</text>
    </div>
    <mz-illumination-bar
      :index="curIndex"
      :env-index="curEnvIndex"
      @updateValue="onUpdateValue"
      @slideEnd="onSlideEnd"
    ></mz-illumination-bar>

    <div class="default-btn center" @click="onSetDefaultClick">
      <text class="default-text">恢复默认</text>
    </div>
    <div class="confirm-btn center">
      <text class="confirm-text">确定</text>
    </div>
  </div>
</template>

<script>
import { DofMinibar } from 'dolphin-weex-ui'
import { MzIlluminationBar } from '../../index';

export default {
  name: 'index.vue',
  components: {
    DofMinibar,
    MzIlluminationBar
  },
  data () {
    return {
      desText1: '明暗程度分为\n较暗、较亮 两个等级',
      desText2: '拖动按钮可调节\n不同等级之间的判断阀值',
      curIndex: 4,
      curEnvIndex: 1,
    }
  },
  methods: {
    goBack () {
      this.$pop()
    },
    onUpdateValue (e) {
      this.curIndex = e
    },
    onSlideEnd (e) {
      this.curIndex = e
    },
    onSetDefaultClick () {
      this.curIndex = 4
    },
  },
}
</script>

<style scoped>
.wrapper {
  flex: 1;
  background-color: #ffffff;
}
.des-block {
  width: 750px;
  height: 220px;
}
.des-text {
  width: 750px;
  height: 80px;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #666666;
  text-align: center;
  line-height: 40px;
  font-weight: 400;
}
.center {
  justify-content: center;
  align-items: center;
}
.confirm-btn {
  width: 560px;
  height: 88px;
  background-color: #267aff;
  border-radius: 44px;
  position: fixed;
  bottom: 100px;
  left: 100px;
}
.confirm-text {
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #ffffff;
  font-weight: 500;
}
.default-btn {
  width: 160px;
  height: 64px;
  background-color: #f2f2f2;
  border-radius: 32px;
  position: fixed;
  bottom: 246px;
  left: 296px;
}
.default-text {
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #666666;
  font-weight: 500;
}
</style>
