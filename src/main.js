import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

let instance = null

function render(props){
  // 这里的props 就可实现和父组件之间的通讯
  const { container } = props;

  console.log(props)

  instance =  new Vue({
            router,
            store,
            render: h => h(App)
          }).$mount(container ? container.querySelector('#app') : '#app')  // 这里是挂载到自己的HTML中, 基座会拿到这个挂载后的HTML, 将其引入
}

// 使用 webpack 运行时 publicPath 配置
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}


// 判断是的独立运行应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 启动
export async function bootstrap(props){

}

// 应用加载
export async function mount(props){
  // 这里的 props为和父应用通讯的内容
  render(props)
}
// 应用卸载
export async function unmount(props) {
  instance.$destroy()

}