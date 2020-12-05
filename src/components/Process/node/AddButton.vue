<!-- 加号按钮 -->
<template>
  <div class="add-button">
    <div class="add-content">
      <a-popover v-model="visible" trigger="click">
        <div slot="content" class="add-button-content global-center" style="flex-wrap: wrap;">
          <div class="icon-item global-start-center" v-for="item in nodeType" :key="item.value">
            <div class="icon-wrap global-center">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#icon-${item.value}`"></use>
              </svg>
            </div>
            <span class="icon-name">
            {{ item.label }}
          </span>
          </div>
        </div>
        <a-button icon="plus" shape="circle" type="primary" class="add-btn" />
      </a-popover>
    </div>
  </div>
</template>

<script>
import {nodeType} from '@/common/enum'

export default {
  components: {},
  props: {},
  data() {
    return {
      nodeType,
      visible: false
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
@import "../../../index";

.add-button {
  .add-content {
    position: relative;
    width: 240px;
    height: 82px;
    margin: 0 auto;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: @connect-line;
      z-index: 10;
    }

    .add-btn {
      z-index: 11;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
