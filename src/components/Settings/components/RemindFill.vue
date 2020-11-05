<!-- 提醒填写 -->
<template>
  <div class="remind-fill">
    <SettingsHeader>
      <template v-slot:main>提醒填写</template>
      <template v-slot:subtitle>通过设置推送提醒指定成员填写表单</template>
    </SettingsHeader>
    <RemindFillNote v-for="(item, index) in remindFillNotes" :key="index" :form="item" :index="index + 1" @deleteNote="deleteNote"
                    @changeNote="changeNote"/>
    <a-button class="remind-fill-add" @click="addNotes">+ 新增提醒</a-button>
  </div>
</template>

<script>
import SettingsHeader from './components/SettingsHeader'
import RemindFillNote from './components/RemindFillNote';

export default {
  components: {
    SettingsHeader,
    RemindFillNote
  },
  props: {},
  data() {
    return {
      remindFillNotes: []
    }
  },
  computed: {},
  methods: {
    addNotes() {
      this.remindFillNotes.push({
        receiver: '',
        sendWeek: '',
        sendTime: '120',
        sendWork: true,
        ding: false
      })
    },
    deleteNote(index) {
      this.remindFillNotes.splice(index - 1, 1)
    },
    changeNote(val, index) {
      this.remindFillNotes.splice(index - 1, 1, val)
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.remind-fill {

  .remind-fill-add {
    width: 100%;
    color: #40a9ff;
    background-color: rgb(250, 251, 251);
  }
}
</style>
