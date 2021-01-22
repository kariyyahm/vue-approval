<!-- 控件选择栏 -->
<template>
  <div class="select-box">
    <div class="select-radio-group">
      <a-radio-group default-value="control">
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

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
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

}
</style>
