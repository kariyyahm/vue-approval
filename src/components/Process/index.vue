<!-- 流程设置 -->
<template>
  <div class="process">
    <SponsorNode/>
    <div class="process-over">
      流程结束
    </div>
    <NodeSettings ref="NodeSettings"/>
  </div>
</template>

<script>
import SponsorNode from './node/SponsorNode'
import NodeSettings from './settings/NodeSettings'

export default {
  components: {
    SponsorNode,
    NodeSettings
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
.process {
  background-color: rgb(238, 241, 243);
  width: 100vw;
  min-height: calc(~"100vh - 45px");
  padding: 10px 0;

  .process-over {

  }
}
</style>
