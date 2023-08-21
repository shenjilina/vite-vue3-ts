<!--
 * @Author: shenjilin-home
 * @Date: 2023-08-21 21:39:26
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-08-21 23:08:11
 * @Description: 
-->
<template>
	<div>
		{{ msg }}
		<p class="number">1234567890</p>
		<el-button @click="clickfun">click</el-button>
		<el-color-picker v-model="color" show-alpha />
		<div>
			结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。
		</div>
		<h2>{{ app.counter }}</h2>
		<button @click="toLogin">to login</button>
		<hr />
		<MSelect :options="listData" @change="change"></MSelect>
		<div>my name</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/store/modules/counter";
import MSelect from "@/components/MSelect.vue";

const router = useRouter();
const app = useCounterStore();
const clickfun = () => {
	app.addCounter();
};
const msg = ref("这里是首页");
const color = ref("rgba(19, 206, 102, 0.8)");

const toLogin = () => {
	router.push("/login");
};
// 下拉多选
const listData = ref([
	{
		value: 1,
		label: "孙小胖1",
		check: false
	},
	{
		value: 2,
		label: "孙小胖2",
		check: false
	},
	{
		value: 3,
		label: "孙小胖3",
		check: false
	},
	{
		value: 4,
		label: "孙小胖4",
		check: false
	},
	{
		value: 5,
		label: "孙小胖5",
		check: false
	},
	{
		value: 6,
		label: "孙小胖6",
		check: false
	}
]);
const selectName = ref("");
const change = options => {
	console.log(options.name);
	selectName.value = options.name;
};
</script>
<style lang="scss" scoped>
.number {
	color: $sjl-color;
	background: #ffff00;
}
</style>
