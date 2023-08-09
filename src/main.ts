/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-08-07 23:12:17
 * @LastEditTime: 2023-08-09 19:00:22
 * @Author: shenjilin
 */
import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import router from "./router/index";
import { setupRouterGuard } from "./router/guard";
import store from "./store/index";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import "@/styles/index.scss";
import "uno.css";

const app = createApp(App);

app.use(router).use(store);
// 路由守卫
setupRouterGuard(router);
app.mount("#app");
