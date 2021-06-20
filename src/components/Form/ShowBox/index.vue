<!-- 控件展示栏 中间 -->
<template>
  <div class="show-box">
    <div class="show-box-title">
      <div>撤销 恢复</div>
      <div>PC端 ｜ 移动端</div>
    </div>
    <div class="show-box-content">
      <draggable>
        <BoxItemWrap></BoxItemWrap>
      </draggable>
    </div>
  </div>
</template>

<script>
import BoxItemWrap from "@/components/Form/ShowBox/BoxItemWrap";
export default {
  components: {
    BoxItemWrap
  },
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
.show-box {
  border-left: 1px solid #ebecee;
  border-right: 1px solid #ebecee;
  height: 100%;

  .show-box-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    padding: 0 20px;
    background: #fafafb;
    border-bottom: 1px solid #ebecee;
  }

}
</style>
