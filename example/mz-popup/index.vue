<template>
  <div class="wrapper">
    <dof-minibar title="自定义弹层" />

    <mz-popup
      :show="popupDataA.show"
      :overlayCfg="{ opacity: 0.2 }"
      :button="button"
      @overlayClicked="popupDataA.show = false"
      @buttonClicked="popupDataA.show = !popupDataA.show"
      @popupButtonClicked="popupButtonClicked"
      class="popupA"
    >
      <text class="popup-text">默认 slot 弹层内容</text>
    </mz-popup>

    <mz-popup
      :show="popupDataB.show"
      :boxShadow="false"
      :popupStyle="popupStyleB"
      @overlayClicked="overlayClicked"
      @buttonClicked="showList"
    >
      <text
        slot="trigger"
        class="text-button"
        @click="showList"
        ref="resTrigger"
        >弹层B</text
      >

      <text class="resItem" @click="$bridge.toast('选项一')">选项一</text>
      <text class="resItem">选项二</text>
      <text class="resItem">选项三</text>
    </mz-popup>
  </div>
</template>

<script>
import { DofMinibar } from "dolphin-weex-ui";
import MzPopup from "../../index";
const domModule = weex.requireModule("dom");

export default {
  data() {
    return {
      popupDataA: {
        show: false,
      },
      popupDataB: {
        show: false,
        offset: {},
      },
      button: [
        {
          text: "取消",
          textColor: "#666",
        },
        "确定",
      ],
    };
  },
  components: {
    DofMinibar,
    MzPopup,
  },
  methods: {
    // 显示列表弹层，如果已有位置数据，则直接显示
    showList() {
      console.log("showList");
      if (this.popupBReady) {
        this.popupDataB.show = !this.popupDataB.show;
      } else {
        domModule.getComponentRect(this.$refs.resTrigger, ({ size }) => {
          this.popupDataB = {
            show: !this.popupDataB.show,
            offset: {
              top: size.top,
              left: size.left,
            },
          };
        });
      }
    },
    overlayClicked() {
      console.log("overlayClicked");
      this.popupDataB.show = false;
    },
    popupButtonClicked(params) {
      this.$bridge.toast(params);
    },
  },

  computed: {
    popupBReady() {
      return Object.keys(this.popupDataB.offset).length > 0;
    },
    popupStyleB() {
      const { offset } = this.popupDataB;

      return {
        backgroundColor: "transparent",
        borderRadius: "0px",
        top: `${offset.top - 210}px`,
        left: `${offset.left - 10}px`,
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #f0f0f0;
}

.popupA {
  margin-top: 500px;
}

.popup-text {
  text-align: center;
}

.text-button {
  width: 100px;
  height: 60px;
  margin-top: 200px;
  margin-left: 200px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  background-color: #333;
  border-radius: 8px;
}

.resItem {
  width: 120px;
  height: 64px;
  margin-bottom: 4px;
  color: #fff;
  line-height: 64px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>