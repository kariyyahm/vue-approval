<!-- index.vue -->
<template>
  <div class="index">
    <div class="index-background"></div>
    <div class="approval-logo">
      <a-button shape="circle" style="margin-right: 10px; z-index: 1;" @click="onBack">
        <a-icon type="left"/>
      </a-button>
      <a-icon type="github" style="font-size: 30px; margin-right: 10px;"/>
      <span class="approval-name">{{ name }}</span>
    </div>
    <div class="approval-buttons">
      <a-button type="danger" shape="round" @click="onDelete">删除</a-button>
      <a-button shape="round" @click="onPreview">预览</a-button>
      <a-button type="primary" shape="round" @click="onSubmit">发布</a-button>
    </div>
    <a-tabs default-active-key="Base" :animated="false">
      <a-tab-pane key="Base" tab="基础设置">
        <Base @changeName="getName"/>
      </a-tab-pane>
      <a-tab-pane key="Form" tab="表单设计">
        <Form/>
      </a-tab-pane>
      <a-tab-pane key="Process" tab="流程设计">
        <Process/>
      </a-tab-pane>
      <a-tab-pane key="Settings" tab="高级设置">
        <Settings/>
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
    return {
      name: '',
      res: '11'
    }
  },
  computed: {},
  methods: {
    getName(val) {
      this.name = val
    },
    onDelete() {

    },
    onPreview() {

    },
    onSubmit() {
      this.$message.info('请在控制台查看输出')
      console.log('====================')
      console.log(`发布数据：${this.res}`)
    },
    onBack() {
      this.$message.info('此路不通')
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.index {
  display: flex;
  position: relative;
  justify-content: center;

  .approval-logo {
    height: 45px;
    line-height: 45px;
    position: absolute;
    top: 0;
    left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .approval-icon {
      min-width: 32px;
      min-height: 32px;
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }

    .approval-name {
      width: 240px;
      font-size: 16px;
      font-weight: bold;
      color: #111f2c;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
    }
  }

  .approval-buttons {
    height: 45px;
    position: absolute;
    top: 0;
    right: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;

    button {
      margin-left: 10px;
    }
  }

  /deep/ .ant-tabs-bar {
    border-bottom: none;
    margin: 0;
  }

  /deep/ .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
  }

  /deep/ .ant-tabs-nav-scroll {
    width: 460px;
    display: flex;
    justify-content: center;
  }
}
</style>
