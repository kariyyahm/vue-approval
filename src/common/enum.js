export const nodeTypes = [
  {label: '审批人', value: 'approver'},
  {label: '抄送人', value: 'copyer'},
  {label: '办理', value: 'handler'},
  {label: '条件分支', value: 'router'}
]

export const PERSONS = [
  {id: '001', name: '赵大'},
  {id: '002', name: '陈二'},
  {id: '003', name: '张三'},
  {id: '004', name: '李四'},
  {id: '005', name: '王五'},
]

export const WEEKS = [
  {label: '周日', value: 'sunday'},
  {label: '周一', value: 'monday'},
  {label: '周二', value: 'tuesday'},
  {label: '周三', value: 'wednesday'},
  {label: '周四', value: 'thursday'},
  {label: '周五', value: 'friday'},
  {label: '周六', value: 'saturday'},
]

export const FORM_TYPES = [
  {label: '假勤管理', value: 'attendance'},
  {label: '人事管理', value: 'personnel'},
  {label: '财务管理', value: 'finance'},
  {label: '业务管理', value: 'business'},
  {label: '行政管理', value: 'administrative'},
  {label: '法务管理', value: 'legal'},
  {label: '安全复工', value: 'safe'},
  {label: '其他', value: 'other'}
]

export const BASIC_CONTROLS = [
  {name: '单行输入框', type: 'inputOneLine',  },
  {name: '多行输入框', type: 'inputMultipleLines',  },
  {name: '数字输入框', type: 'inputNumbers',  },
  {name: '单选框', type: 'selectOneBox',  },
  {name: '多选框', type: 'MultiCheckBoxes',  },
  {name: '日期', type: 'Date',  },
  {name: '日期区间', type: 'timeIntervals',  },
  {name: '说明文字', type: 'description',  },
  {name: '身份证', type: 'id',  },
  {name: '电话', type: 'phone',  },
]

export const ENHANCED_CONTROLS = [
  {name: '图片', type: 'image',  },
  {name: '明细/表格', type: 'details',  },
  {name: '金额', type: 'amount',  },
  {name: '附件', type: 'attachments',  },
  {name: '手写签名', type: 'handWrittenSignature',  },
  {name: '外部联系人', type: 'externalContacts',  },
  {name: '联系人', type: 'contacts',  },
  {name: '部门', type: 'department',  },
  {name: '地点', type: 'location',  },
  {name: '计算公式', type: 'formula',  },
  {name: '电子发票', type: 'invoice',  },
  {name: '关联审批单', type: 'relatedApproval',  },
  {name: '省市区', type: 'provinceCityDistrict',  },
  {name: '评分', type: 'score',  },
  {name: '收款账户', type: 'accountReceivable',  },
]

export const ATTENDANCE_SUITES = [
  {name: '请假/调休套件', type: 'leave', },
  {name: '补卡套件', type: 'adjustment', },
  {name: '加班套件', type: 'overtime', },
  {name: '外出套件', type: 'officeKit', },
  {name: '出差套件', type: 'businessTrip', },
  {name: '换班套件', type: 'shiftSwap', },
]

export const HR_SUITES = [
  {name: '转正套件', type: 'conversion', },
  {name: '离职套件', type: 'resignation', },
  {name: '离职和交接套件', type: 'resignationAndHandover', },
  {name: '离职交接套件', type: 'resignationHandover', },
  {name: '调岗套件', type: 'postAdjustment', },
  {name: '入职套件', type: 'onBoarding', },
  {name: '批量转账套件', type: 'bulkTransfer', },
]

export const SOME_DEFAULT_FORM = [
  {name: '物品领用', type: 'itemRequisition'},
  {name: '通用审批', type: 'generalApproval'},
  {name: '采购', type: 'purchasing'},
  {name: '付款', type: 'payment'},
  {name: '绩效自评', type: 'performanceSelf'},
  {name: '合同审批', type: 'contractApproval'},
  {name: '立项申请', type: 'projectApplication'},
  {name: '招聘', type: 'recruitment'},
]
