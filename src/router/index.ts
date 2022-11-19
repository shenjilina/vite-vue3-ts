/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-08-07 23:26:20
 * @LastEditTime: 2022-08-07 23:29:31
 * @Author: shenjilin
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "Login",
		meta: {
			title: "登录"
		},
		component: () => import("@/views/Login/index.vue")
	},
	{
		path: "/home",
		name: "Home",
		meta: {
			title: "首页"
		},
		component: () => import("@/views/Home/index.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(), // createWebHistory 历史路由
	routes
});

export default router;
