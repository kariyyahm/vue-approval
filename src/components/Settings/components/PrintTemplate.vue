<!-- 打印模版 -->
<template>
  <div class="print-template">
    <SettingsHeader>
      <template v-slot:main>打印模版</template>
    </SettingsHeader>
    <a-radio-group v-model="printTemplateType" name="radioGroup" style="margin-top: 6px;">
      <a-radio value="default">
        默认模版
      </a-radio>
      <a-radio value="custom">
        自定义打印模版
      </a-radio>
    </a-radio-group>
    <a-button v-show="printTemplateType === 'custom'" type="link" @click="useThird">开通第三方应用使用该功能</a-button>
  </div>
</template>

<script>
import SettingsHeader from './components/SettingsHeader'

export default {
  components: {
    SettingsHeader
  },
  props: {},
  data() {
    return {
      printTemplateType: 'default',
    }
  },
  computed: {},
  methods: {
    useThird() {
      this.$message.info('暂无第三方')
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.print-template {

}
</style>
