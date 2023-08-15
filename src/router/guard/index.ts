/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-08-09 17:38:56
 * @LastEditTime: 2023-08-14 16:13:06
 * @Author: shenjilin
 */
import type { Router } from "vue-router";
import { unref } from "vue";
import store from "@/store/index";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore(store);

export function setupRouterGuard(router: Router) {
	createPageLoadingGuard(router);
}

/**
 * Used to handle page loading status
 * 用于处理页面加载状态
 */
function createPageLoadingGuard(router: Router) {
	router.beforeEach(async () => {
		if (!unref(appStore.pageLoading)) {
			appStore.openPageLoading();
		}
		return true;
	});

	router.afterEach(async () => {
		if (unref(appStore.pageLoading)) {
			setTimeout(() => {
				appStore.closePageLoading();
			}, 220);
		}
		return true;
	});
}
