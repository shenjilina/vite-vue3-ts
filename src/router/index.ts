/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-08-07 23:26:20
 * @LastEditTime: 2023-08-09 17:04:48
 * @Author: shenjilin
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

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
	routes,
	// 是否应该禁止尾部斜杠。默认为假
	strict: true,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
