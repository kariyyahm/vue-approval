<!-- 基础设置 -->
<template>
  <div class="base">
    我是基础设置
    <a-button type="danger">test</a-button>
    <a-input v-model="name" placeholder="请输入" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      name: ''
    }
  },
  computed: {},
  methods: {},
  watch: {
    name(val) {
      this.$emit('changeName', val)
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.base {
  width: 100vw;
}
</style>
