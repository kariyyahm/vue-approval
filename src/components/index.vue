<!-- index.vue -->
<template>
  <div>
    <a-tabs default-active-key="Base" :animated="false">
      <a-tab-pane key="Base" tab="基础设置">
        <Base />
      </a-tab-pane>
      <a-tab-pane key="Form" tab="表单设计">
        <Form />
      </a-tab-pane>
      <a-tab-pane key="Process" tab="流程设计">
        <Process />
      </a-tab-pane>
      <a-tab-pane key="Settings" tab="高级设置">
        <Settings />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Base from './Base/index.vue'
import Form from './Form/index.vue'
import Process from './Process/index.vue'
import Settings from './Settings/index.vue'

export default {
  components: {
    Base,
    Form,
    Process,
    Settings
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {}
}
</script>

<style lang="scss" scoped>

</style>
