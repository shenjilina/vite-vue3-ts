import type { Router } from "vue-router";
import { unref } from "vue";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();
export function setupRouterGuard(router: Router) {
	createPageLoadingGuard(router);
}

/**
 * Used to handle page loading status
 * 用于处理页面加载状态
 */
function createPageLoadingGuard(router: Router) {
	router.beforeEach(async () => {
		if (unref(appStore.pageLoading)) {
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
