<template>
  <dof-popup
    ref="popup"
    :show="isShowPopup"
    @dofPopupOverlayClicked="handleOverlayClicked"
    :height="height"
  >
    <div class="content">
      <text class="title">{{ insTitle }}</text>
      <div
        v-for="item in insList"
        :key="item.value"
        class="btn"
        :style="{
          backgroundColor:
            insValue === item.value ? btnActiveBgc : btnInactiveBgc,
        }"
        @click="handleClick(item.value)"
      >
        <text
          class="btn-text"
          :style="{
            color:
              insValue === item.value
                ? btnTextActiveColor
                : btnTextInacticeColor,
            fontWeight: insValue === item.value ? 600 : 400,
          }"
          >{{ item.label }}</text
        >
      </div>
      <div class="cancel" @click="handleCancel">
        <text class="cancel-text">取消</text>
      </div>
    </div>
  </dof-popup>
</template>

<script>
import { DofPopup } from 'dolphin-weex-ui'

export default {
  components: {
    DofPopup,
  },
  props: {
    btnActiveBgc: {
      type: String,
      default: 'rgba(38, 122, 255, 0.1)',
    },
    btnInactiveBgc: {
      type: String,
      default: 'rgba(0,0,0,0.04)',
    },
    btnTextActiveColor: {
      type: String,
      default: '#267aff',
    },
    btnTextInacticeColor: {
      type: String,
      default: '#000000',
    },
  },
  data() {
    return {
      isShowPopup: false,
      insList: [],
      insValue: '',
      insTitle: '',
    }
  },
  computed: {
    height() {
      // 顶部title144（如果title为空则为96） + 每一个选项96（高度80+底边距16） + 取消按钮104（按钮96+顶边距8）
      if (this.insTitle === '') {
        return 96 + this.insList.length * 96 + 104
      }
      return 144 + this.insList.length * 96 + 104
    },
  },
  methods: {
    /**
     * @param {array} list 选项列表
     * @param {string} value 已选择
     * @param {string} list 标题
     */
    show({ list = [], value = '', title = '' }) {
      this.insList = list
      this.insValue = value
      this.insTitle = title
      this.isShowPopup = true
    },
    handleClick(value) {
      this.$emit('update', value)
      this.$refs.popup.hide()
    },
    handleCancel() {
      this.$emit('cancel')
      this.$refs.popup.hide()
    },
    handleOverlayClicked() {
      this.$emit('overlayClicked')
      this.isShowPopup = false
    },
  },
}
</script>

<style scoped>
.content {
  width: 750px;
  align-items: center;
}

.title {
  font-family: PingFangSC-Medium;
  font-size: 34px;
  color: #000000;
  letter-spacing: -0.41px;
  text-align: center;
  font-weight: 600;
  margin: 48px 0;
}

.btn {
  width: 686px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: rgba(38, 122, 255, 0.1);
  margin-bottom: 16px;
}

.btn-text {
  font-family: PingFangSC-Semibold;
  font-size: 32px;
  color: #267aff;
  letter-spacing: -0.39px;
  text-align: center;
  line-height: 44px;
}

.cancel {
  width: 750px;
  height: 96px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  border-top-color: #f2f2f2;
  border-top-width: 2px;
  border-top-style: solid;
}

.cancel-text {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #232323;
  letter-spacing: -0.39px;
  text-align: center;
  line-height: 44px;
  font-weight: 400;
}
</style>
