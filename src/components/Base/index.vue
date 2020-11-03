<!-- 基础设置 -->
<template>
  <div class="base">
    <a-form-model class="base-form" :model="form">
      <div style="display: flex;">
        <a-icon type="github" style="font-size: 48px; margin: 10px 16px 0 0;" />
        <a-form-model-item prop="fakeName" style="min-width: 546px;" required>
          <span slot="label">
            <span>表单名称</span>
            <span class="form-label-msg">最多50字</span>
          </span>
          <a-input v-model="form.formName" :maxLength="50"/>
        </a-form-model-item>
      </div>

      <a-form-model-item label="所在分组" prop="formType" required>
        <a-select v-model="form.formType">
          <a-select-option v-for="item in FORM_TYPES" :key="item.value" :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item prop="formDescription">
        <span slot="label">
          <span>表单说明</span>
          <span class="form-label-msg">最多100字</span>
        </span>
        <a-textarea v-model="form.formDescription" :maxLength="100" placeholder="请输入" :rows="3"
                    style="margin-top: 4px;"/>
      </a-form-model-item>
      <a-form-model-item label="谁可以发起提交" prop="whoSubmitData">
        <a-select v-model="form.whoSubmitData">
          <a-select-option v-for="item in PERSONS" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="谁可以管理这个模版并导出数据" prop="whoExportData">
        <a-select v-model="form.whoExportData">
          <a-select-option v-for="item in PERSONS" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="谁可以查看所有数据" prop="whoWatchData">
        <a-select v-model="form.whoWatchData">
          <a-select-option v-for="item in PERSONS" :key="item.id" :value="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
const FORM_TYPES = [
  {label: '假勤管理', value: 'attendance'},
  {label: '人事管理', value: 'personnel'},
  {label: '财务管理', value: 'finance'},
  {label: '业务管理', value: 'business'},
  {label: '行政管理', value: 'administrative'},
  {label: '法务管理', value: 'legal'},
  {label: '安全复工', value: 'safe'},
  {label: '其他', value: 'other'}
]
const PERSONS = [
  {id: '001', name: '赵大'},
  {id: '002', name: '陈二'},
  {id: '003', name: '张三'},
  {id: '004', name: '李四'},
  {id: '005', name: '王五'},
]
export default {
  components: {},
  props: {},
  data() {
    return {
      FORM_TYPES,
      PERSONS,
      form: {
        fakeName: 'always',
        formName: '',
        formType: '',
        formDescription: '',
        whoSubmitData: '',
        whoExportData: '',
        whoWatchData: ''
      }
    }
  },
  computed: {},
  methods: {},
  watch: {
    'form.formName'(val) {
      this.$emit('changeName', val)
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.base {
  background-color: rgb(238, 241, 243);
  width: 100vw;
  min-height: 100vh;
  padding: 10px 0 30px;

  .base-form {
    width: 660px;
    background-color: #fff;
    margin: 0 auto;
    padding: 25px;
    border-radius: 8px;

    .form-label-msg {
      font-weight: normal;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
      margin-left: 10px;
    }

    /deep/ .ant-form-item-label {
      line-height: normal;

      label {
        font-weight: bold;
      }

      label::after {
        content: '';
      }
    }

  }
}
</style>
