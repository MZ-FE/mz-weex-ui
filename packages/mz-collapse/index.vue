<template>
  <div class="mz-collapse">
    <div class="mz-collapse-header" @click="toggleExpand">
      <slot></slot>

      <div class="arrow-wrapper" v-if="!disabled">
        <image
          class="icon-arrow"
          :class="[isExpand ? 'icon-arrow-expand' : '']"
          :src="arrowImg"
        ></image>
      </div>
    </div>

    <div class="mz-collapse-content" v-if="isExpand">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { ic_moreUp } from './assets/icon-base64';

export default {
  name: 'mz-collapse',
  props: {
    /**
     * 是否禁用，禁用后不可下拉
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data () {
    return {
      isExpand: false, // 是否展开折叠面板
      arrowImg: ic_moreUp
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 下拉展示内容
     */
    toggleExpand () {
      // 禁用下拉判断
      if (this.disabled) {
        return;
      }
      this.isExpand = !this.isExpand;
    }
  },

  created () {},

  mounted () {},

  destroyed () {}
};
</script>

<style scoped>
.mz-collapse {
  background-color: #fff;
}
.mz-collapse-header {
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

.arrow-wrapper {
  padding-right: 32px;
  flex-direction: row;
  align-items: center;
}
.icon-arrow {
  width: 32px;
  height: 16px;
  transform: rotate(-90deg);
  transition: transform ease-in;
}

.icon-arrow-expand {
  transform: rotate(0);
}

.mz-collapse-content {
  padding-left: 20px;
}
</style>
