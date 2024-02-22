<template>
  <div
    :class="['cell-row', hasBottomBorder && 'cell-row-hasBottomBorder']"
    :style="{
      ...curCellStyle,
      backgroundColor: isHighlight && isActive && !disabled ? activeBgColor : cellStyle.backgroundColor,
      ...borderBottomColor
    }"
    @click="onClick"
    @touchstart="onTouchStart"
    @touchend="isActive = false"
    @touchcancel="isActive = false"
  >
    <div :class="['content', hasSubBottomBorder && 'content-hasSubBottomBorder']" :style="[ height, borderBottomColor ]">
      <!-- disabledCellStyle 放在顶层在iOS中无效 -->
      <div class="flex-row center" :style="[ disabledCellStyle ]">
        <div class="function-icon-box" :style="functionIconSize" v-if="icon">
          <image :style="functionIconSize" :src="icon"></image>
        </div>
        <div class="title">
          <text :class="[centerTitle ? 'center-title' : 'left-title']" :style="{ color: titleColor }">{{ title }}</text>
          <text v-if="desc" class="desc-text" :style="{ color: descColor }">{{ desc }}</text>
        </div>
      </div>

      <div class="flex-row center right-box" :style="[ disabledCellStyle ]">
        <div v-if="useRightSlot" ref="rightSlot"><slot name="right"> </slot></div>
        <text class="right-text" :style="rightTextStyle" v-if="rightText">{{ rightText }}</text>
        <slot name="arrow">
          <image v-if="hasArrow" class="right-arrow" :src="arrowImg"></image>
        </slot>
      </div>
    </div>
    <!-- <div class="shade" :style="disabledCellStyle" v-if="disabled" @click.stop></div> -->
  </div>
</template>

<script>
const dom = weex.requireModule('dom');

export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    iconSize: {
      type: Number,
      default: 64,
    },
    iconBgColor: {
      type: String,
      default: 'transparent',
    },
    title: {
      type: String,
      default: '',
    },
    titleBoldValue: {
      type: Number,
      default: 400,
    },
    titleColor: {
      type: String,
      default: '#000000',
    },
    arrowImg: {
      type: String,
      default:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAADJyc3IyMzT09PJyM3Ix8zIx8zKyM7MzMzZ2dnJyM3MzM7JyMzJyMzKyM3Ix83IyMzR0dHJx808kUS0AAAAE3RSTlMAQcMR8v/8UzIG3SXn5lbldBaAAtNjAgAAAFdJREFUeAHty8UBBCEABLAV3KH/Xk9awGXyzwUAu7uf5869L6GU8cwsKM3fUpVsbZbdtsJ2C26/6g70T2Vdx/7X65oXF/cl+fcSufdPqtz7F1OK11oA4AvF0waYqfefXQAAAABJRU5ErkJggg==',
    },
    hasArrow: {
      type: Boolean,
      default: true,
    },
    rightText: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    descColor: {
      type: String,
      default: '#8A8A8F',
    },
    bottomBorderColor:{
      type:String,
      default:'#f2f2f2'
    },
    hasSubBottomBorder: {
      type: Boolean,
      default: false,
    },
    hasBottomBorder: {
      type: Boolean,
      default: false,
    },
    centerTitle: {
      type: Boolean,
      default: false,
    },
    rightTextColor: {
      type: String,
      default: '#666666',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // disabledColor: {
    //   type: String,
    //   default: 'rgba(255, 255, 255, 0.7)',
    // },
    cellStyle: {
      type: Object,
      default: () => ({
        height: '0px',
        backgroundColor: '#FFFFFF',
      }),
    },
    isHighlight: {
      type: Boolean,
      default: true,
    },
    isNoHighlightOnRightSlot: {
      type: Boolean,
      default: true,
    },
    activeBgColor: {
      type: String,
      default: '#E5E5E8',
    },
    useRightSlot:{
      type: Boolean,
      default: false,
    }
  },
  name: 'ColmoCell',
  components: {},
  data () {
    return {
      isActive: false,
      rightSlotSize: {
        top:0,
        bottom:0,
        right:0,
        left:0
      }
    }
  },
  computed: {
    curCellStyle () {
      const { cellStyle } = this

      return {
        ...cellStyle,
        height: this.height,
      }
    },
    disabledCellStyle () {
      if(this.disabled){
        return {opacity:0.3}
      }else{
        return {opacity:1}
      }
      // const { cellStyle } = this
      // return {
      //   ...cellStyle,
      //   height: this.height,
      //   backgroundColor: this.disabledColor,
      // }
    },
    height () {
      if (this.cellStyle.height && this.cellStyle.height !== '0px') {
        return this.cellStyle.height
      }
      return this.desc ? {height:'160px'} : {height:'104px'} //有一个1px的border问题，透露背景色问题（渲染机制导致）
    },
    functionIconSize () {
      return {
        width: this.iconSize + 'px',
        height: this.iconSize + 'px',
        borderRadius: this.iconSize / 2 + 'px',
        backgroundColor: this.iconBgColor,
      }
    },
    rightTextStyle () {
      if (this.rightTextColor) {
        return {
          color: this.rightTextColor,
        }
      } else {
        return {}
      }
    },
    borderBottomColor () {
      return {borderBottomColor:this.bottomBorderColor}
    }
  },
  watch: {},
  methods: {
    onClick (e) {
      if(this.disabled){
        this.$emit('cellDisabled', e)
      }else{
        this.$emit('cellClicked', e)
      }
    },

    onTouchStart(e) {
      const {screenX,screenY} = e.changedTouches[0]
      //因为在iOS中，无法阻止手势事件冒泡
      //只要点(screenX, screenY)不在rightSlot区域内则高亮
      if(this.rightSlotSize.top >= screenY ||
          this.rightSlotSize.bottom <= screenY ||
        this.rightSlotSize.left >= screenX ||
      this.rightSlotSize.right <= screenX){
        this.isActive = true
        }
    }
  },

  created () {},

  mounted () {
    if(this.useRightSlot && this.isNoHighlightOnRightSlot) {
        setTimeout(()=>{
          dom.getComponentRect(this.$refs.rightSlot, option => {
          this.rightSlotSize = option.size
        });
      },200)

    }
  },

  destroyed () {},
}
</script>

<style scoped>
.flex-row {
  flex-direction: row;
}
.title {
  flex-direction: column;
  justify-content: center;
}

.center {
  justify-content: center;
  align-items: center;
}

.cell-row {
  justify-content: center;
  overflow: hidden;
}
.content {
  margin-left: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.content-hasSubBottomBorder {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.cell-row-hasBottomBorder {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.left-title {
  font-family: PingFangSC-Regular;
  margin-right: 16px;
  font-size: 32px;
}
.center-title {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  text-align: center;
  width: 375px;
  margin-left: 155.5px;
}
.right-arrow {
  width: 40px;
  height: 40px;
  margin-right: -10px;
}
.right-text {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #71717a;
  letter-spacing: 0;
  text-align: right;
  font-weight: 400;
  margin-right: 18px;
}
.desc-text {
  font-family: PingFangSC-Regular;
  font-size: 24px;
  font-weight: 400;
  margin-top: 16px;
}

.function-icon-box {
  margin-right: 24px;
}
.right-box {
  margin-right: 32px;
}
.shade {
  position: absolute;
}
</style>
