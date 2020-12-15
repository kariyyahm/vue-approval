import Vue from 'vue'
import Vuex from 'vuex'
import {SponsorNode, ApproverNode, HandlerNode, CopyerNode, RouteNode, RouterNode, nodeType} from '@/common/node'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    basicSettings: {},
    formList: [],
    formDetail: {},
    processData: {
      childNode: new SponsorNode()
    },
    advancedSettings: {}
  },
  getters: {},
  mutations: {
    addNode(state, {node, childNode}) {
      if (childNode.type === nodeType.router) {
        Vue.set(childNode.routes[0], 'childNode', node.childNode)
        Vue.set(node, 'childNode', childNode)
      } else {
        Vue.set(childNode, 'childNode', node.childNode)
        Vue.set(node, 'childNode', childNode)
      }
    },
    delNode(state, {node, childNode}) {
      if (childNode.type === nodeType.route) {
        // 条件节点整条线删除
        const index = node.routes.findIndex(route => route === childNode)
        node.routes.splice(index, 1)
      } else if (childNode.type === nodeType.router) {
        // 条件分支中的条件数量为1时触发，删除条件分支，将最后一条支线合并到主流
        console.log('我进来了')
        const router = childNode
        const lastRoute = router.routes[0]
        if (lastRoute.childNode) {
          let leafNode = lastRoute.childNode
          while (leafNode && leafNode.childNode) {
            leafNode = leafNode.childNode
          }
          leafNode.childNode = router.childNode
          node.childNode = lastRoute.childNode
        } else {
          node.childNode = router.childNode
        }
      } else {
        // 普通节点直接删除
        node.childNode = childNode.childNode
      }
    },
    addRoute(state, { router, route }) {
      router.routes.push(route)
    },
    resetPriority(state, node) {
      node.routes.forEach((item, index) => {
        item.priority = index + 1
      })
    },
  },
  actions: {
    addNode({commit}, {node, type}) {
      let childNode
      switch (type) {
        case nodeType.approver:
          childNode = new ApproverNode()
          break
        case nodeType.copyer:
          childNode = new CopyerNode()
          break
        case nodeType.handler:
          childNode = new HandlerNode()
          break
        case nodeType.router:
          childNode = new RouterNode()
          break
        default:
          break
      }
      // 将当前节点原本的子节点衔接到刚创建的子节点下面
      commit('addNode', {node, childNode})
    },
    delNode({commit}, {node, childNode}) {
      commit('delNode', {node, childNode})
      if (childNode.type === nodeType.route) {
        commit('resetPriority', node)
      }
    },
    addRoute({commit}, router) {
      const route = new RouteNode(router.routes.length)
      commit('addRoute', {router, route})
    },
  },

})
