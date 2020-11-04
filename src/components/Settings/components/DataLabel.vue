<!-- 数据标题 -->
<template>
  <div class="data-label">
    <SettingsHeader>
      <template v-slot:main>数据标题</template>
      <template v-slot:subtitle>通过设置数据的显示标题，快速识别一条数据</template>
    </SettingsHeader>
    <a-radio-group v-model="dataLabelType" name="radioGroup" class="data-label-radio-group">
      <a-radio value="default">
        默认（提交人+表单名称）
      </a-radio>
      <div class="default-example"><span>示例：</span><span>陈德言的业绩上报</span><span>陆宜的业绩上报</span></div>
      <a-radio value="custom">
        自定义
      </a-radio>
      <a-textarea v-model="customLabel" v-show="dataLabelType === 'custom'" :maxLength="200"
                  :auto-size="{ minRows: 4, maxRows: 5 }" style="margin-top: 4px;"/>
      <a-popover v-model="tagVisible" trigger="click" placement="bottomRight">
        <div slot="content">
          <div class="tags-item">单行输入框</div>
          <div class="tags-item">发起人</div>
        </div>
        <a-button class="add-tag" v-show="dataLabelType === 'custom'" shape="round" size="small" icon="tag">置入字段
        </a-button>
      </a-popover>
    </a-radio-group>
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
      dataLabelType: 'default',
      customLabel: '',
      tagVisible: false
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
.data-label {
  .data-label-radio-group {
    display: flex;
    flex-direction: column;
    position: relative;

    label {
      height: 30px;
    }

    .default-example {
      display: flex;
      flex-direction: column;
      width: 285px;
      margin-left: 24px;
      padding: 6px 12px;
      margin-bottom: 20px;
      background: #f2f4f5;
      border-radius: 4px;
      font-size: 12px;
      color: rgba(17, 31, 44, 0.56);
      line-height: 20px;
    }

    .add-tag {
      font-size: 12px;
      position: absolute;
      right: 4px;
      bottom: 4px;
      z-index: 1;
    }
  }
}

.tags-item {
  cursor: pointer;
  line-height: 30px;
  height: 30px;
  width: 160px;
  padding-left: 10px;
}

.tags-item:hover {
  background-color: rgba(17, 32, 44, 0.04);
}
</style>
