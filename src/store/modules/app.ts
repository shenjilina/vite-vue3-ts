/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-08-09 17:58:54
 * @LastEditTime: 2023-08-09 18:58:09
 * @Author: shenjilin
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
	const pageLoading = ref(false);
	const openPageLoading = () => {
		pageLoading.value = true;
	};
	const closePageLoading = () => {
		pageLoading.value = false;
	};
	return {
		pageLoading,
		openPageLoading,
		closePageLoading
	};
});
