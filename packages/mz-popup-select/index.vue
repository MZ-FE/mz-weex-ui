<template>
  <dof-popup
    ref="popup"
    :show="isShowPopup"
    @dofPopupOverlayClicked="handleOverlayClicked"
    :height="height"
  >
    <div class="content">
      <list class="list" v-if="isUseList">
        <cell>
          <text class="title" ref="title">{{ insTitle }}</text>
        </cell>
        <cell v-for="item in insList" :key="item.value">
          <div
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
        </cell>
      </list>
      <div v-else>
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
    isShow: {
      type: Boolean,
    },
    list: {
      type: Array,
    },
    value: {
      type: [Number, String],
    },
    title: {
      type: String,
    },
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
    extraTitleLine: {
      type: Number,
      default: 0,
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
    isUseList() {
      // 判断内容的高度是否大于屏幕一半的高度，如果大于，则使用list组件
      const halfPageHeight =
        ((750 / weex.config.env.deviceWidth) * weex.config.env.deviceHeight) / 2
      const contentHeight =
        this.insTitle === ''
          ? 96 + this.insList.length * 96 + 104
          : 144 + this.insList.length * 96 + 104 + this.extraTitleLine * 48
      return contentHeight > halfPageHeight
    },
    height() {
      // 顶部title144（如果title为空则为96） + 每一个选项96（高度80+底边距16） + 取消按钮104（按钮96+顶边距8）+ 额外的行高（比如title多行）
      // 如果计算结果大于屏幕一半高度则返回屏幕一半的高度
      const halfPageHeight =
        ((750 / weex.config.env.deviceWidth) * weex.config.env.deviceHeight) / 2
      const contentHeight =
        this.insTitle === ''
          ? 96 + this.insList.length * 96 + 104
          : 144 + this.insList.length * 96 + 104 + this.extraTitleLine * 48
      if (contentHeight > halfPageHeight) {
        return halfPageHeight
      }
      return contentHeight
    },
  },
  methods: {
    /** 通过ref调用show方法展示弹出框
     * @param {string} title 标题
     * @param {string} value 已选择值
     * @param {array} list 选项列表
     * @param {string} list.label 选项展示的文字
     * @param {number | string} list.value 选项对应的值
     */
    show({ list, value, title } = {}) {
      if (list) {
        this.insList = list
      }
      if (value) {
        this.insValue = value
      }
      if (title) {
        this.insTitle = title
      }
      this.isShowPopup = true
    },
    handleClick(value) {
      this.$emit('update', value)
      this.$emit('update:value', value)
      this.$emit('update:isShow', false)
      this.$refs.popup.hide()
    },
    handleCancel() {
      this.$emit('close')
      this.$emit('update:isShow', false)
      // 使用hide才能展示关闭动画
      this.$refs.popup.hide()
      // 如果这里再执行this.isShowPopup = false会导致动画失效
      // 所以不需要this.isShowPopup = false
    },
    handleOverlayClicked() {
      this.$emit('close')
      this.$emit('update:isShow', false)
      // 用户点击遮罩时就dof-popup就已经调用hide，不需要手动调用
      // 只需要将isShowPopup设置成false
      this.isShowPopup = false
    },
  },
  watch: {
    // 不能初始化时调用hide，不然会导致无法打开弹窗
    isShow(val) {
      if (!val) {
        this.$refs.popup.hide()
        return
      }
      this.isShowPopup = true
    },
    list: {
      handler(value) {
        if (value) {
          this.insList = value
        }
      },
      immediate: true,
    },
    value: {
      handler(val) {
        if (val) {
          this.insValue = val
        }
      },
      immediate: true,
    },
    title: {
      handler(value) {
        if (value) {
          this.insTitle = value
        }
      },
      immediate: true,
    },
  },
}
</script>

<style scoped>
.content {
  width: 750px;
  align-items: center;
  flex: 1;
}

.list {
  flex: 1;
}
.title {
  font-family: PingFangSC-Medium;
  font-size: 34px;
  color: #000000;
  letter-spacing: -0.41px;
  text-align: center;
  font-weight: 600;
  margin: 48px 0;
  max-width: 686px;
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
