/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-08-07 23:12:17
 * @LastEditTime: 2022-08-08 00:23:40
 * @Author: shenjilin
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(router).mount('#app')
