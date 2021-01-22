import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './index.less'
import store from './store'
import draggable from 'vuedraggable'

Vue.use(Antd)
Vue.component('Draggable', draggable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
