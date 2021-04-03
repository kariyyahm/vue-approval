<!-- 列表单元项 -->
<template>
  <div class="list-item">
    <span>{{val.icon || '**'}}</span>
    <span class="item-label">{{val.name}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    val: {

    }
  },
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
.list-item {
  display: flex;
  align-items: center;
  width: 124px;
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid rgb(236, 237, 239);
  border-radius: 8px;
  cursor: grab;
  background-color: #fff;
  padding-left: 12px;


  &:hover {
    border-color: #006afe;
    box-shadow: 0 4px 2px 0 rgba(17, 31, 44, 0.1);

    > span {
      color: #006afe;
    }
  }

  .item-label {
    font-size: 12px;
    color: rgba(17, 31, 44, 0.4);
    margin-left: 8px;
  }
}
</style>
