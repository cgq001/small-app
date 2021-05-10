import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10001' , //(子应用地址)
    container: '#vue' , // 挂在节点
    activeRule: '/vue'  , // 激活规则
    props: {              // 通讯
      a: 1
    }
  }
]

// 注册基座
registerMicroApps(apps)
// 启动基座
start({
  prefetch: false // 开启预加载(默认为开启状态)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
