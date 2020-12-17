<!-- 节点设置页 -->
<template>
  <a-drawer class="node-settings" :title="title" placement="right" :width="550" :visible="visible" @close="onClose">
    <div class="settings-content">
      <p>Some contents...</p>
    </div>
    <div class="settings-footer">
      <a-button shape="round" @click="onClose">取 消</a-button>
      <a-button type="primary" shape="round">保 存</a-button>
    </div>
  </a-drawer>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      title: '',
      // loadingBtn: false
    }
  },
  computed: {},
  methods: {
    openSettings(data) {
      console.log(data)
      this.visible = true
      this.title = data.activeNode.name
    },
    onClose() {
      this.visible = false
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.node-settings {
  /deep/ .ant-drawer-wrapper-body {
    overflow: hidden;
  }
  /deep/ .ant-drawer-body {
    padding: 0;
    height: calc(~"100vh - 55px");
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .settings-content {
      height: calc(~"100vh - 100px");
      overflow-y: auto;
      padding: 20px;
    }

    .settings-footer {
      background-color: #FFFFFF;
      height: 60px;
      padding: 14px 24px;
      border-top: 1px solid rgb(217, 217, 217);
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        margin-left: 8px;
      }
    }
  }
}
</style>
