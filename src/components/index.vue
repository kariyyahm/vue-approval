<!-- index.vue -->
<template>
  <div>
    <Base />
    <Form />
    <Process />
  </div>
</template>

<script>
import Base from './Base/index.vue'
import Form from './Form/index.vue'
import Process from './Process/index.vue'

export default {
  components: {
    Base,
    Form,
    Process
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
