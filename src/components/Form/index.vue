<!-- 表单设置 -->
<template>
  <div class="form">
    <div class="select">
      <SelectBox/>
    </div>
    <div class="show">
      <ShowBox/>
    </div>
    <div class="settings">
      <SettingsBox/>
    </div>
  </div>
</template>

<script>
import SelectBox from "@/components/Form/SelectBox";
import ShowBox from "@/components/Form/ShowBox";
import SettingsBox from "@/components/Form/SettingsBox";

export default {
  components: {
    SelectBox,
    ShowBox,
    SettingsBox
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

<style lang="less" scoped>
.form {
  width: 100vw;
  height: calc(~"100vh - 45px");
  padding: 0;
  display: flex;

  >div {
    height: 100%;
  }

  .select {
    min-width: 280px;
  }

  .show {
    min-width: 350px;
    flex-grow: 1;
  }

  .settings {
    min-width: 300px;
  }
}

</style>
