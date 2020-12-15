<!-- 条件容器节点 -->
<template>
  <div class="route">
    <div class="route-wrapper">
      <div class="route-wrapper-add" @click="addRoute(currentNode.routes)">
        <span>添加条件</span>
      </div>
      <!-- 分支条件 -->
      <div v-for="(route, index) in currentNode.routes" :key="route.id" class="route-col">
        <div v-if="index === 0" class="cover-top-left"></div>
        <div v-if="index === 0" class="cover-bottom-left"></div>
        <component :is="getNodeComponent(route)" :currentNode="route" :parentNode="currentNode" v-on="$listeners"/>
        <div v-if="index === currentNode.routes.length - 1" class="cover-top-right"></div>
        <div v-if="index === currentNode.routes.length - 1" class="cover-bottom-right"></div>
      </div>
      <AddButton :current-node="currentNode" class="add-btn"/>
    </div>
    <!-- 条件分支子节点 -->
    <div v-if="currentNode.childNode">
      <component :is="getNodeComponent(currentNode.childNode)" :currentNode="currentNode.childNode"
                 :parentNode="currentNode" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import BaseNode from './BaseNode'

export default {
  mixins: [BaseNode],
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    addRoute() {
      this.$store.dispatch('addRoute', this.currentNode)
    }
  },
  watch: {
    'currentNode.routes.length': function (newValue) {
      if (newValue === 1) {
        this.$store.dispatch('delNode', {
          node: this.parentNode,
          childNode: this.currentNode
        })
      }
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
@import '../../../index';

/*使用和背景同色的线遮盖条件分支多出来的边框*/
.coverLine() {
  position: absolute;
  width: 50%;
  height: 10px;
  background: rgb(238, 241, 243);
}

.route {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;

  .route-wrapper {
    position: relative;
    display: flex;
    padding: 30px 0 0;
    margin-bottom: 82px;
    border-top: 2px solid @connect-line;
    border-bottom: 2px solid @connect-line;
    background: rgb(238, 241, 243);
    z-index: 20;

    &-add {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      font-size: 14px;
      color: @copyer-color;
      padding: 3px 8px;
      background: #f9f9f9;
      border-radius: 13px;
      cursor: pointer;
      transition: all 0.3s;
      z-index: 30;
      box-shadow: 1px 1px 5px @gray-text;

      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
        transform-origin: center;
        box-shadow: 1px 1px 10px @gray-text;
      }
    }

    .route-col {
      position: relative;
      display: inline-block;
      padding: 0 30px;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%);
        width: 2px;
        height: 100%;
        background-color: @connect-line;
        z-index: 0;
      }

      .cover-top-left {
        .coverLine();
        left: -1px;
        top: -32px;
      }

      .cover-bottom-left {
        .coverLine();
        left: -1px;
        bottom: -2px;
      }

      .cover-top-right {
        .coverLine();
        right: -1px;
        top: -32px;
      }

      .cover-bottom-right {
        .coverLine();
        right: -1px;
        bottom: -2px;
      }
    }

    .add-btn {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 100%);
    }
  }
}
</style>

