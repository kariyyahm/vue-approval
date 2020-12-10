<!-- 发起人节点 -->
<template>
  <div class="node">
    <div class="sponsor node-wrapper">
      <div class="node-box">
        <div class="sponsor node-box-title">
          <span style="display: flex; align-items: center;">
            <span class="title-text"> currentNode.name </span>
          </span>
          <a-icon type="close" class="icon-close" @click="delNode"/>
        </div>
        <div class="node-box-content" @click="editNode">
          <p class="node-box-content-persons">summary</p>
        </div>
      </div>
      <AddButton class="node-addBtn"/>
    </div>
<!--    <div v-if="currentNode.childNode">-->
<!--      <component-->
<!--          :is="getNodeComponent(currentNode.childNode)"-->
<!--          :currentNode="currentNode.childNode"-->
<!--          :parentNode="currentNode"-->
<!--          v-on="$listeners"-->
<!--      />-->
<!--    </div>-->
  </div>
</template>

<script>
import AddButton from "./AddButton";
import BaseNode from "@/components/Process/node/BaseNode";

export default {
  mixins: [BaseNode],
  components: {
    AddButton
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
