<template>
  <div>
    <dof-minibar
      backgroundColor="transparent"
      textColor="#000000"
    >
    </dof-minibar>

    <MzTabPage
      type="primary"
      slot="middle"
      :is-slot="true"
      v-model="tabCheckedIndex"
      :tab-titles="tabTitles"
      :beforeLeave="beforeLeave"
      @tabSelected="tabChangeHandler"
    ></MzTabPage>
  </div>
</template>

<style scoped></style>
<script>
  import { DofMinibar } from 'dolphin-weex-ui'
  import { MzTabPage } from '../../index';

  export default {
    components: {
      DofMinibar,
      MzTabPage
    },
    data: () => ({
      tabCheckedIndex: 0,
      tabTitles: [
        {
          title: '设备'
        },
        {
          title: '推荐'
        },
        {
          title: 'test'
        }
      ]
    }),
    created () {
    },
    methods: {
      beforeLeave (e) {
        console.log('beforeLeave');
        console.log(JSON.stringify(e));
        if (e.index === 1) {
          return false;
        } else {
          return true;
        }
      },
      tabChangeHandler (e) {
        console.log('tabChangeHandler');
        console.log(JSON.stringify(e));
      }
    }
  };
</script>
