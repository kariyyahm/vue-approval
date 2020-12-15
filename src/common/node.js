import uuid from 'uuid/dist/v4'
/**
 * 流程节点
 */
export class SponsorNode {
  /**
   * 发起人
   * @param {String} type 类型
   * @param {String} name 节点名称
   */
  constructor() {
    this.id = uuid()
    this.type = 'sponsor'
    this.name = '发起人'
    const approverNode = new ApproverNode()
    approverNode.childNode = new CopyerNode()
    this.childNode = approverNode
  }
}
export class ApproverNode {
  /**
   * 审批人
   * @param {String} type 类型
   * @param {String} name 节点名称
   */
  constructor() {
    this.id = uuid()
    this.type = 'approver'
    this.name = '审批人'
    this.childNode = null
  }
}
export class HandlerNode {
  /**
   * 办理人
   * @param {String} type 类型
   * @param {String} name 节点名称
   */
  constructor() {
    this.id = uuid()
    this.type = 'handler'
    this.name = '办理人'
    this.childNode = null
  }
}
export class CopyerNode {
  /**
   * 抄送人
   * @param {String} type 类型
   * @param {String} name 节点名称
   */
  constructor() {
    this.id = uuid()
    this.type = 'copyer'
    this.name = '抄送人'
    this.childNode = null
  }
}

/**
 * 条件节点
 */
export class RouteNode {
  /**
   * 条件节点
   * @param {String} type 类型
   * @param {String} name 节点名称
   * @param {Array} conditions 条件数组
   * @param {String} priority 优先级
   */
  constructor(index) {
    const priority = `${index + 1}`
    this.id = uuid()
    this.type = 'route'
    this.priority = priority
    this.name = `条件${priority}`
    this.conditions = []
    this.childNode = null
  }
}
export class RouterNode {
  /**
   * 条件分支
   * @param {String} type 类型
   * @param {Array} routes 条件节点数组

   */
  constructor() {
    this.id = uuid()
    this.type = 'router'
    this.routes = [new RouteNode(0), new RouteNode(1)]
    this.childNode = null
  }
}


/**
 * 节点类型
 */
export const nodeType = {
  sponsor: 'sponsor', // 发起节点
  approver: 'approver', // 审批节点
  handler: 'handler', // 办理节点
  copyer: 'copyer', // 抄送节点
  router: 'router', // 条件分支的父容器节点
  route: 'route', // 条件分支的各个条件
  routes: 'routes', // 包含条件分支的数组
}
