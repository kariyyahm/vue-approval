<!-- 条件分支节点 -->
<template>
  <div class="node">
    <div class="route node-wrapper">
      <div class="node-box">
        <div class="route node-box-title">
          <span class="route-title">
<!--            <name-input :name="currentNode.name" @change="onChangeName" />-->
            <span>优先级{{ currentNode.priority }}</span>
          </span>
          <a-icon type="close" class="icon-close" @click="delNode"/>
        </div>
        <div class="node-box-conditions" @click="editNode">
          <p class="node-box-conditions-detail">
            summary + ellipsis </p>
        </div>
      </div>
      <AddButton :current-node="currentNode" class="node-addBtn"/>
    </div>
    <!-- 子节点 -->
    <div v-if="currentNode.childNode">
      <component :is="getNodeComponent(currentNode.childNode)" :currentNode="currentNode.childNode"
                 :parentNode="currentNode" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BaseNode from './BaseNode'

export default {
  mixins: [BaseNode],
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
  watch: {},
  created() {
  }
}
</script>
