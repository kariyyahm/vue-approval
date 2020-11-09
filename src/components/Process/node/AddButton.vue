<!-- 加号按钮 -->
<template>
  <div class="add-button">
    <a-popover v-model="visible" trigger="click">
      <div slot="content" class="add-button-content global-center" style="flex-wrap: wrap;">
        <div class="icon-item global-center" v-for="item in nodeType" :key="item.value">
          <div class="icon-wrap global-center">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.value}`"></use>
            </svg>
          </div>
          <span class="icon-name">
            {{ item.label }}
          </span>
        </div>
      </div>
      <a-button type="primary">
        +
      </a-button>
    </a-popover>
  </div>
</template>

<script>
import {nodeType} from '@/common/enum'

export default {
  components: {},
  props: {},
  data() {
    return {
      nodeType,
      visible: false
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.add-button {


}
</style>
