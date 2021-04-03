<!-- 套件 -->
<template>
  <div class="suit-list">
    <div class="list-main">
      <div class="list-title">出勤套件</div>
      <div class="list-content">
        <ListItem v-for="item in ATTENDANCE_SUITES" :val="item" :key="item.type"></ListItem>
      </div>
    </div>

    <div class="list-main">
      <div class="list-title">人事套件</div>
      <div class="list-content">
        <ListItem v-for="item in HR_SUITES" :val="item" :key="item.type"></ListItem>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/Form/components/ListItem";
import { ATTENDANCE_SUITES, HR_SUITES} from "@/common/enum"

export default {
  components: {
    ListItem
  },
  props: {},
  data() {
    return {
      ATTENDANCE_SUITES,
      HR_SUITES
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {}
}
</script>

<style lang="less" scoped>
.suit-list {
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
