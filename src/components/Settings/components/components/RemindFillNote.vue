<!-- RemindFillNote.vue -->
<template>
  <div class="remind-fill-note">
    <div class="remind-fill-note-header">
      <span>{{ `提醒方式${index}` }}</span>
      <a-icon type="delete" style="font-size: 16px; cursor: pointer;" @click="onDelete"/>
    </div>
    <a-form-model class="remind-fill-note-form" ref="ruleForm" :model="form">
      <a-form-model-item label="接收人" prop="receiver" required>
        <a-select v-model="form.receiver" style="width: 380px">
          <a-select-option v-for="item in PERSONS" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="每周发送时间" prop="sendWeek" placeholder="请选择" required>
        <a-select v-model="form.sendWeek" style="width: 380px">
          <a-select-option v-for="item in WEEKS" :key="item.value" :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="提醒时间" prop="sendTime">
        <a-select v-model="form.sendTime" style="width: 100px">
          <a-select-option v-for="item in TIMES" :key="item.value" :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="提醒发送至" prop="sendWork">
        <a-checkbox v-model="form.sendWork" disabled>
          工作通知
        </a-checkbox>
      </a-form-model-item>
      <a-form-model-item label="发Ding提醒" prop="ding">
        <a-switch v-model="form.ding"/>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
const PERSONS = [
  {id: '001', name: '赵大'},
  {id: '002', name: '陈二'},
  {id: '003', name: '张三'},
  {id: '004', name: '李四'},
  {id: '005', name: '王五'},
]
const WEEKS = [
  {label: '周日', value: 'sunday'},
  {label: '周一', value: 'monday'},
  {label: '周二', value: 'tuesday'},
  {label: '周三', value: 'wednesday'},
  {label: '周四', value: 'thursday'},
  {label: '周五', value: 'friday'},
  {label: '周六', value: 'saturday'},
]
const TIMES = () => {
  let times = []
  for (let i = 0; i < 288; i++) {
    let min = (i * 5 % 60) + ''
    let hour = (Math.floor(i * 5 / 60)) + ''
    times.push({
      label: `${hour.padStart(2, '0')}:${min.padStart(2, '0')}`,
      value: `${i}`
    })
  }
  return times
}
export default {
  components: {},
  props: {
    index: {
      type: Number,
      default: 0
    },
    form: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      PERSONS,
      WEEKS,
      TIMES: TIMES()
    }
  },
  computed: {},
  methods: {
    onDelete() {
      this.$emit('deleteNote', this.index)
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.remind-fill-note {
  padding: 12px 12px 0;
  margin-bottom: 8px;
  border: 1px solid rgba(17, 31, 44, 0.08);
  box-shadow: 0 2px 8px 0 rgba(17, 31, 44, 0.04);
  border-radius: 8px;

  .remind-fill-note-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 12px;
    color: rgba(17, 31, 44, 0.4);
  }

  .remind-fill-note-form {
    /deep/ .ant-form-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f2f2f4;
      margin-bottom: 12px;

      > div {
        flex-grow: 1;

        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

    }
  }
}

</style>
