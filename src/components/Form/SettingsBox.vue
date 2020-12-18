<!-- 控件设置栏 -->
<template>
  <div class="settings-box">
    <div class="settings-box-title">

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
  created() {
  }
}
</script>

<style lang="less" scoped>
.settings-box {
  height: 100%;

  .settings-box-title {
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
