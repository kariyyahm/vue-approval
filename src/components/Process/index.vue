<!-- 流程设置 -->
<template>
  <div class="process">
    <div class="process-tree">
      <SponsorNode v-if="processData" :currentNode="processData.childNode" :parentNode="processData"
                   @editNode="editNode"/>
      <div class="process-over">
        流程结束
      </div>
    </div>
    <NodeSettings ref="NodeSettings"/>
  </div>
</template>

<script>
import Vue from 'vue'
import SponsorNode from './node/SponsorNode'
import ApproverNode from './node/ApproverNode'
import CopyerNode from './node/CopyerNode'
import HandlerNode from './node/HandlerNode'
import RouteNode from './node/RouteNode'
import RouterNode from './node/RouterNode'
import NodeSettings from './settings/NodeSettings'

Vue.component('ApproverNode', ApproverNode)
Vue.component('CopyerNode', CopyerNode)
Vue.component('HandlerNode', HandlerNode)
Vue.component('RouteNode', RouteNode)
Vue.component('RouterNode', RouterNode)

export default {
  components: {
    SponsorNode,
    NodeSettings
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    processData() {
      return this.$store.state.processData
    }
  },
  methods: {
    editNode({node, childNode}) {
      this.$refs.NodeSettings.openSettings({
        activeNode: childNode,
        activeParentNode: node
      })
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
@import '../../index.less';

.process {
  background-color: rgb(238, 241, 243);
  width: 100vw;
  min-height: calc(~"100vh - 45px");
  padding: 10px 0;
  text-align: center;
  overflow-x: auto;

  .process-tree {
    margin: 60px;
    display: inline-block;

    .process-over {
      position: relative;
      padding-top: 5px;
      text-align: center;
      color: rgba(25, 31, 37, 0.4);

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: @connect-line;
      }
    }
  }
}
</style>
