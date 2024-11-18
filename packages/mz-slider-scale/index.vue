<template>
  <text
    :class="[
      'dof-slider-scale',
      !isFirst && !isLast && 'dof-slider-scale--mid',
      isFirst && `dof-slider-scale--first`,
      isLast && `dof-slider-scale--last`,
      _isColmo && `colmoFont`
    ]"
    ref="dof-slider-scale"
    :style="style"
  >
    <slot></slot>
  </text>
</template>

<script>
import { getBoundingClientRect } from '../utils/dom.js'

export default {
  mixins: [],
  props: {
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#8a8a8f'
    }
  },
  data() {
    return {
      isShow: false,
      elWidth: 0
    }
  },
  watch: {
    style() {
      this.isShow = true
    }
  },
  computed: {
    isLast() {
      return this.value >= this.$parent.max
    },
    isFirst() {
      return this.value <= this.$parent.min
    },
    style() {
      const style = {
        color: this.color,
        opacity: this.isShow ? 1 : 0
      }
      const p = this.$parent
      const left = ((this.value - p.min) / p.scope) * p.width + p._trackHeight / 2
      style.left = `${left}px`

      // 防止超出的情况
      if (this.isFirst) {
        delete style.left
        if (this.elWidth && p._trackHeight / 2 < this.elWidth / 2) {
          style.left = this.elWidth / 2 + 'px'
        } else {
          style.left = p._trackHeight / 2 + 'px'
        }
      }
      // 防止超出的情况
      if (this.isLast) {
        delete style.left
        if (this.elWidth && p._trackHeight / 2 < this.elWidth / 2) {
          style.right = this.elWidth / 2 + 'px'
        } else {
          style.right = p._trackHeight / 2 + 'px'
        }
      }
      return style
    }
  },
  mounted() {
    if (this.isFirst || this.isLast) this.initElWidth()
  },
  methods: {
    initElWidth() {
      const el = this.$refs['dof-slider-scale']
      getBoundingClientRect(el, res => {
        res.result && (this.elWidth = res.size.width)
      })
    }
  }
}
</script>

<style scoped>
.dof-slider-scale {
  position: absolute;
  white-space: nowrap;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #8a8a8f;
  font-weight: 400;
}

.dof-slider-scale--mid {
  transform: translate(-50%, 0px);
}
.dof-slider-scale--first {
  transform: translate(-50%, 0px);
}

.dof-slider-scale--last {
  transform: translate(50%, 0px);
}
.colmoFont {
  font-family: COLMO-Mono-Regular;
  font-size: 24px;
}
</style>
