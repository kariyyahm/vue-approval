<!-- 流程高级设置 -->
<template>
  <div class="process-settings">
    <SettingsHeader>
      <template v-slot:main>流程高级设置</template>
    </SettingsHeader>

    <div class="process-settings-label">审批人去重</div>
    <div class="h40">
      <a-select v-model="processSettings.killRepeatType" style="width: 390px;">
        <a-select-option v-for="item in KILL_REPEAT_TYPES" :key="item.value" :value="item.value">
          {{ item.label }}
        </a-select-option>
      </a-select>
      <span class="kill-repeat-msg" @click="watchKillRepeatMsg">
        <a-icon type="question-circle"/>
        自动去重规则说明
      </span>
    </div>
    <a-checkbox v-model="processSettings.sponsorAutoPass" class="h40">
      发起人审批时自动通过
      <a-tooltip :overlayStyle="{'fontSize': '12px'}">
        <template slot="title">
          审批人和发起人是同一个人时，将自动通过。设置为发起人的审批节点不会自动通过
        </template>
        <a-icon type="exclamation-circle"/>
      </a-tooltip>
    </a-checkbox>

    <div class="process-settings-label">添加规则</div>
    <div class="h40">
      <a-select v-model="processSettings.addaApprovalType" style="width: 390px;">
        <a-select-option v-for="item in ADD_APPROVAL_TYPES" :key="item.value" :value="item.value">
          {{ item.label }}
        </a-select-option>
      </a-select>
    </div>

    <div class="process-settings-label">审批意见填写提示</div>
    <a-input placeholder="请输入" :maxLength="100"/>

    <div class="process-settings-label">自动提醒/转交/同意：</div>
    <a-checkbox v-model="processSettings.limitedTimeApproval" class="h40">
      启用限时审批
    </a-checkbox>

    <div class="process-settings-label">审批意见</div>
    <a-checkbox v-model="processSettings.approvalRequireOpinion" class="h40">
      必填
      <a-tooltip :overlayStyle="{'fontSize': '12px'}">
        <template slot="title">
          如勾选，审批人必须填写意见才可提交审批结果
        </template>
        <a-icon type="exclamation-circle"/>
      </a-tooltip>
    </a-checkbox>
    <a-checkbox v-model="processSettings.showSponsorOpinion" class="h40">
      对发起人不可见
      <a-tooltip :overlayStyle="{'fontSize': '12px'}">
        <template slot="title">
          如勾选，评语仅审批人和管理员可见
        </template>
        <a-icon type="exclamation-circle"/>
      </a-tooltip>
    </a-checkbox>
    <div>
      <a-checkbox v-model="processSettings.othersSubmitOpinion" class="h40">
        允许代他人提交
      </a-checkbox>
    </div>

    <div class="process-settings-label">手写签名</div>
    <a-checkbox v-model="processSettings.approvalRequireSignature" class="h40">
      同意时必须签名
    </a-checkbox>
    <div>
      <a-radio-group v-show="processSettings.approvalRequireSignature" v-model="processSettings.useSignatureType"
                     name="radioGroup" class="h40" style="margin-top: 6px;">
        <a-radio value="last">
          使用上次签名
        </a-radio>
        <a-radio value="every">
          每次重新签名
        </a-radio>
      </a-radio-group>
      <div v-show="!processSettings.approvalRequireSignature" class="h40"></div>
    </div>
  </div>
</template>

<script>
import SettingsHeader from './components/SettingsHeader'

const KILL_REPEAT_TYPES = [
  {label: '同一个审批人在流程中出现多次时，仅保留第一个', value: 'saveFirstKillRepeat'},
  {label: '同一个审批人仅在连续出现时，自动去重', value: 'appearAlwaysKillRepeat'},
  {label: '不启用自动去重', value: 'dontKillRepeat'}
]

const ADD_APPROVAL_TYPES = [
  {label: '审批人允许加签', value: 'approvalCanAdd'},
  {label: '审批人不允许加签', value: 'approvalCantAdd'},
]

export default {
  components: {
    SettingsHeader
  },
  props: {},
  data() {
    return {
      KILL_REPEAT_TYPES,
      ADD_APPROVAL_TYPES,
      processSettings: {
        killRepeatType: 'saveFirstKillRepeat',
        sponsorAutoPass: false,
        addaApprovalType: 'approvalCanAdd',
        limitedTimeApproval: false,
        approvalRequireOpinion: false,
        showSponsorOpinion: false,
        othersSubmitOpinion: false,
        approvalRequireSignature: false,
        useSignatureType: 'last'
      }
    }
  },
  computed: {},
  methods: {
    watchKillRepeatMsg() {
      this.$message.info('规则走丢了，请稍后再试')
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
.process-settings {
  color: rgba(0, 0, 0, 0.85);

  .process-settings-label {
    height: 40px;
    line-height: 40px;
    margin-top: 12px;

    :first-child {
      margin-top: -2px;
    }
  }

  .kill-repeat-msg {
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    color: rgb(87, 106, 149);
    cursor: pointer;
  }
}

</style>
