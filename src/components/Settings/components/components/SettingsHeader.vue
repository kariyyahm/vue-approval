<!-- SettingsHeader.vue -->
<template>
  <div class="settings-header">
    <slot name="main"></slot>
    <div class="settings-header-subtitle">
      <slot name="subtitle"></slot>
    </div>
    <a-divider style="margin-left: -24px;"/>
  </div>
</template>

<script>
export default {
  components: {},
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
.settings-header {
  font-size: 16px;
  color: #111f2c;

  .settings-header-subtitle {
    margin-top: 4px;
    font-size: 12px;
    color: rgba(17, 31, 44, 0.56);
    line-height: 20px;
  }
}
</style>
