<!-- BaseNode.vue -->
<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    delNode() {
    },
    editNode() {
    }
  },
  watch: {},
  created() {
  }
}
</script>

<style lang="less" scoped>
@import '../../../index';

.arrow-down() {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -8px;
  width: 0;
  height: 4px;
  border-style: solid;
  border-width: 8px 6px 4px;
  border-color: @connect-line transparent transparent;
}

.collapse-text() {
  display: -webkit-box;
  max-height: 60px;
  text-align: left;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.node {
  .node-wrapper {
    min-height: 160px;
    color: @font-color;

    .node-box {
      position: relative;
      width: 220px;
      min-height: 74px;
      border-radius: 3px;
      background-color: #fff;
      margin: 0 auto;
      box-shadow: 1px 2px 10px @connect-line;
      border: 1px solid #cacaca;
      z-index: 10;

      &:hover {
        cursor: pointer;
        border: 1px solid @copyer-color;

        .node-box-title .icon-close {
          opacity: 1;
        }

        .route .icon-close {
          color: #cacaca;
        }
      }

      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 26px;
        padding: 0 10px 0 8px;
        color: #fff;
        text-align: left;
        border-radius: 3px 3px 0 0;
        box-sizing: border-box;

        .icon-close {
          font-size: 12px;
          opacity: 0;
        }
      }

      .sponsor {
        background-color: @sponsor-color;

        .icon-close {
          display: none;
        }
      }

      .approver {
        position: relative;
        background-color: @approver-color;

        &::before {
          content: '';
          .arrow-down();
        }
      }

      .copyer {
        position: relative;
        background-color: @copyer-color;

        &::before {
          content: '';
          .arrow-down();
        }
      }

      .handler {
        position: relative;
        background-color: @handler-color;

        &::before {
          content: '';
          .arrow-down();
        }
      }

      .route {
        &-title {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-right: 10px;
          font-size: 14px;
          color: @gray-text;

          input {
            width: 100px;
            height: 18px;
            border: none;
            color: @router-color;

            &:hover {
              cursor: pointer;
              border-bottom: 1px dashed @router-color;
            }

            &:focus {
              cursor: auto;
            }
          }
        }
      }

      &-conditions {
        padding: 0 12px 10px;
        min-height: 57px;
        .collapse-text();
      }

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 30px 8px 16px;

        &-persons {
          padding: 0 5px 3px 0;
          font-size: 14px;
          .collapse-text();
        }

        &-choose {
          padding: 0 5px 8px 0;
          color: @gray-text;
          font-size: 14px;
        }

        .icon-close {
          margin-right: -18px;
        }
      }

      .node-icon {
        font-size: 14px;
      }
    }

    .node-addBtn {
      margin: 0 auto;
      text-align: center;
    }
  }

  .node-wrapper.route {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      width: 2px;
      height: 30px;
      background-color: @connect-line;
    }
  }
}
</style>
