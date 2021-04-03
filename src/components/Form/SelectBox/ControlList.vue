<!-- 控件库 -->
<template>
  <div class="control-list">
    <div class="list-main">
      <div class="list-title">基础控件</div>
      <div class="list-content">
        <ListItem v-for="item in BASIC_CONTROLS" :val="item" :key="item.type"></ListItem>
      </div>
    </div>

    <div class="list-main">
      <div class="list-title">增强控件</div>
      <div class="list-content">
        <ListItem v-for="item in ENHANCED_CONTROLS" :val="item" :key="item.type"></ListItem>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/Form/components/ListItem";
import { BASIC_CONTROLS, ENHANCED_CONTROLS} from "@/common/enum"

export default {
  components: {
    ListItem
  },
  props: {},
  data() {
    return {
      BASIC_CONTROLS,
      ENHANCED_CONTROLS
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {}
}
</script>

<style lang="less" scoped>
.control-list {
  padding: 0 12px 30px;

  .list-main {
    margin-top: 20px;

    .list-title {
      margin-bottom: 12px;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #111f2c;
    }

    .list-content {
      max-width: 256px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
