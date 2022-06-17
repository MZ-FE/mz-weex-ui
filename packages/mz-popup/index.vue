<template>
    <div>
        <div @touchend="handleTouchEnd">
            <dof-overlay
                :show="haveOverlay"
                v-if="show"
                ref="overlay"
                v-bind="composedOverlayCfg"
                @dofOverlayBodyClicked="dofOverlayBodyClicking"
            />
        </div>
        <div
            ref="popupRef"
            v-if="show"
            :height="height"
            :hack="isNeedShow"
            @click="() => {}"
            class="popup"
            :style="composedStyle"
        >
            <slot></slot>

            <div :style="{ height: show && isipx ? '68px' : '0px' }"></div>
        </div>
    </div>
</template>

<script>
import { DofOverlay } from 'dolphin-weex-ui';

const animation = weex.requireModule('animation');
const { platform, deviceModel } = weex.config.env;
const isIos = platform.toLowerCase() === 'ios';
const isIpx = isIos && deviceModel.match(/^iPhone(\d*),\d*$/)[1] >= 10;

module.exports = {
    components: { DofOverlay },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        overlayCfg: {
            type: Object,
            default: () => ({}),
        },
        // 投影
        hasShadow: {
            type: Boolean,
            default: true,
        },
        // 尺寸\位置\背景,均由此参数控制,可覆盖设置
        popupStyle: {
            type: Object,
            default: () => ({}),
        },
        animation: {
            type: Object,
            default: () => ({
                timingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            }),
        },
    },
    data: () => ({
        isIpx,
        haveOverlay: true,
        defaultOverlayCfg: {
            hasAnimation: true,
            timingFunction: ['ease-in', 'ease-out'],
            duration: 300,
            opacity: 0, // 遮罩存在但不显示
        },
        // 默认弹框样式
        defaultStyle: {
            top: '0px',
            left: '0px',
            width: '750px',
            height: '500px',
            backgroundColor: '#FFFFFF',
            borderBottomLeftRadius: '32px', // IoT UI 规范弧度
            borderBottomRightRadius: '32px',
            transformOrigin: 'top left',
        },
    }),
    computed: {
        isNeedShow() {
            try {
                setTimeout(() => {
                    this.appearPopup(this.show);
                }, 50);
            } catch (error) {
                this.$nextTick(() => {
                    this.appearPopup(this.show);
                });
            }
            return this.show;
        },
        composedStyle() {
            const { defaultStyle, popupStyle, hasShadow } = this;
            const style = {};
            if (hasShadow) {
                style.boxShadow = '0 8px 8px rgba(0, 0, 0, 0.1)';
            }
            return { ...defaultStyle, ...style, ...popupStyle };
        },
        composedOverlayCfg() {
            const { overlayCfg, defaultOverlayCfg } = this;
            return { ...defaultOverlayCfg, ...overlayCfg };
        },
    },
    mounted() {
        this.appearPopup(this.show);
    },
    methods: {
        handleTouchEnd(e) {
            // 在支付宝上面有点击穿透问题
            platform === 'Web' && e.preventDefault && e.preventDefault();
        },
        dofOverlayBodyClicking() {
            this.appearPopup(false);
        },
        appearPopup(isShow, duration = 100) {
            const popupEl = this.$refs['popupRef'];
            if (!popupEl) {
                return;
            }
            animation.transition(
                popupEl,
                {
                    styles: { opacity: isShow ? 1 : 0 },
                    duration,
                    delay: 0,
                    ...this.animation,
                },
                () => {
                    if (!isShow) {
                        this.$emit('overlayClicked');
                    }
                }
            );
        },
    },
};
</script>

<style scoped>
.popup {
    position: fixed;
    right: 0;
    left: 0;
    width: 750px;
}
</style>
