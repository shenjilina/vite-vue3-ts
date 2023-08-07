/*
 * @LastEditors: shenjilin-home
 * @Description: ...
 * @Date: 2022-08-07 23:12:17
 * @LastEditTime: 2023-08-06 15:51:42
 * @Author: shenjilin
 */
import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import router from "./router/index";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import "@/styles/index.scss";
import "uno.css";

const app = createApp(App);

app.use(router).mount("#app");
