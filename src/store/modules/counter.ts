/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-08-09 17:58:54
 * @LastEditTime: 2023-08-09 18:50:49
 * @Author: shenjilin
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
	// 避坑： 如果在pinia中，使用ref 声明几个基础数据类型变量，在页面中使用的时候千万不要使用解构的方式
	// 解构获取参数会使变量失去响应式。建议使用方式：const app = useAppStore();
	const counter = ref(0);
	const addCounter = () => {
		counter.value = counter.value + 1;
		console.log(counter, "counter");
		return counter;
	};
	return {
		counter,
		addCounter
	};
});
