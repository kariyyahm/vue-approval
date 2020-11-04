<!-- 高级设置 -->
<template>
  <div class="settings">
    <a-tabs class="settings-tabs" default-active-key="processSettings" tab-position="left">
      <a-tab-pane key="processSettings" tab="流程高级设置">
        <ProcessSettings/>
      </a-tab-pane>
      <a-tab-pane key="dataLabel" tab="数据标题">
        <DataLabel/>
      </a-tab-pane>
      <a-tab-pane key="remindFill" tab="提醒填写">
        <RemindFill/>
      </a-tab-pane>
      <a-tab-pane key="printTemplate" tab="打印模版">
        <PrintTemplate/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ProcessSettings from './components/ProcessSettings'
import DataLabel from './components/DataLabel'
import RemindFill from './components/RemindFill'
import PrintTemplate from './components/PrintTemplate'

export default {
  components: {
    ProcessSettings,
    DataLabel,
    RemindFill,
    PrintTemplate
  },
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
.settings {
  background-color: rgb(238, 241, 243);
  width: 100vw;
  min-height: calc(~"100vh - 45px");
  padding: 10px 0;

  .settings-tabs {
    min-height: calc(~"100vh - 65px");
    width: 840px;
    background-color: #fff;
    margin: 0 auto;
    padding: 25px;
    border-radius: 8px;

    /deep/ .ant-tabs-bar {
      height: calc(~"100vh - 115px");
    }

    /deep/ .ant-tabs-content {
      height: calc(~"100vh - 115px");
      overflow-y: auto;
    }
  }
}
</style>
