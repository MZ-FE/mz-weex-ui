<template>
  <div class="wrapper">
    <dof-minibar title="自定义弹框" />

    <dof-button
      type="primary"
      size="small"
      text="弹框A"
      @dofButtonClicked="dofButtonClicked"
      ref="popupTrigger"
    />

    <mz-popup
      :show="popupDataA.show"
      :overlayCfg="{ opacity: 0.2 }"
      :popupStyle="popupStyle"
      @overlayClicked="popupDataA.show = false"
    >
      <text>slot 弹框内容</text>
    </mz-popup>
  </div>
</template>

<script>
import { DofMinibar, DofButton } from "dolphin-weex-ui";
import MzPopup from "../../index";
const domModule = weex.requireModule("dom");

export default {
  data() {
    return {
      popupDataA: {
        show: false,
        offset: null,
        height: 500,
      },
    };
  },
  components: {
    DofMinibar,
    DofButton,
    MzPopup,
  },
  methods: {
    dofButtonClicked() {
      if (!this.popupDataA.offset) {
        domModule.getComponentRect(this.$refs.popupTrigger, (res) => {
          this.popupDataA.offset = res.size.height + res.size.top;
          this.popupDataA.show = !this.popupDataA.show;
        });
      } else {
        this.popupDataA.show = !this.popupDataA.show;
      }
    },
  },

  computed: {
    popupStyle() {
      return {
        top: `${this.popupDataA.offset}px`,
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #f0f0f0;
}
</style>