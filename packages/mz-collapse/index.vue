<template>
  <div class="mz-collapse">
    <div class="mz-collapse-header" @click="toggleExpand">
      <slot>
        <div>
          <text class="mz-collapse-header-title">{{ title }}</text>
        </div>
      </slot>

      <div class="right-cell">
        <text class="right-text" v-if="rightText">{{ rightText }}</text>
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
  import { arrowIconNew } from '../setting/icon.base64';

  export default {
    name: 'mz-collapse',
    props: {
      title: {
        type: String,
        default: ''
      },
      rightText: {
        type: String,
        default: ''
      },
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
        arrowImg: arrowIconNew
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
    padding: 0 32px;
    background-color: #fff;
  }
  .mz-collapse-header {
    padding: 32px 0;
    border-bottom: 1px  solid #f2f2f2;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  .mz-collapse-header-title {
    color: #000;
    font-size: 32px;
    line-height: 40px;
  }

  .right-cell {
    flex-direction: row;
    align-items: center;
  }
  .right-text {
    padding-right: 20px;
    color: #666;
    font-size: 28px;
  }
  .icon-arrow {
    width: 22px;
    height: 22px;
    transform: rotate(0);
    transition: transform ease-in;
  }

  .icon-arrow-expand {
    transform: rotate(90deg);
  }

  .mz-collapse-content {
    padding-left: 20px;
  }
</style>
