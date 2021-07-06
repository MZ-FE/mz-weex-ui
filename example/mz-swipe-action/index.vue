<template>
  <div style="background-color: #f2f2f2;">
    <dof-minibar
      backgroundColor="transparent"
      textColor="#000000"
      title="mz-swipe-action"
    >
    </dof-minibar>

    <mz-swipe-action
      ref="scenePaneSwipe"
      @dofRightClicked="cellMenuClick"
      width="686px"
      :itemStyle="{ marginBottom: '24px', borderRadius: '16px' }"
      :list-data="list"
    >
      <template slot="swipeItem" slot-scope="scope">
        <div class="list-item">
          <div class="item-left">
            <text class="item-name">{{scope.data.deviceName}}</text>
          </div>
        </div>
      </template>
    </mz-swipe-action>
  </div>
</template>

<style scoped>
  .list-item {
    height: 152px;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
  }

  .item-left {
    flex-direction: row;
    align-items: center;
  }
</style>

<script>
  import { DofMinibar } from 'dolphin-weex-ui'
  import { MzSwipeAction } from '../../index';

  let modal = weex.requireModule('modal');

  export default {
    components: {
      DofMinibar,
      MzSwipeAction
    },
    data: () => ({
      list: [
        {
          deviceName: '灯光',
          rightItem: [
            {text: '编辑', bgColor: '#4fa7ff'},
            {text: '删除', bgColor: '#FF3B30'}]
        },
        {
          deviceName: 'test',
          rightItem: [{text: '删除', bgColor: '#FF3B30'}]
        }
      ]
    }),
    created () {
    },
    methods: {
      //e.index，e.i，e.text 当前列表索引，当前点击的侧滑选项索引，当前点击的侧滑选项文本
      async cellMenuClick (e) {
        modal.toast({
          message: JSON.stringify(e),
          duration: 3
        })
      },
    }
  };
</script>
