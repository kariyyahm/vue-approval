<!-- 控件选择栏 左侧 -->
<template>
  <div class="select-box">
    <div class="select-radio-group">
      <a-radio-group v-model="activeValue" default-value="control">
        <a-radio-button value="control">
          控件库
        </a-radio-button>
        <a-radio-button value="suit">
          套件
        </a-radio-button>
        <a-radio-button value="relation">
          关联表单
        </a-radio-button>
      </a-radio-group>
    </div>

    <div class="select-box-list">
      <component :is="activeValue" />
    </div>
  </div>
</template>

<script>
import control from "@/components/Form/SelectBox/ControlList";
import suit from "@/components/Form/SelectBox/SuitList";
import relation from "@/components/Form/SelectBox/FormList";

export default {
  components: {
    control,
    suit,
    relation
  },
  props: {},
  data() {
    return {
      activeValue: 'control'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {}
}
</script>

<style lang="less" scoped>
.select-box {
  background: #fafafa;
  height: 100%;

  .select-radio-group {
    padding-top: 12px;
    width: 100%;
    text-align: center;

    /deep/ .ant-radio-button-wrapper {
      height: 28px;
      line-height: 28px;
      width: 85px;
      font-size: 12px;
      box-shadow: none;

      &:first-child {
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
      }
      &:last-child {
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
      }
    }
  }

  .select-box-list {
    height: calc(~"100vh - 85px");
    overflow-y: auto;
  }

}
</style>
