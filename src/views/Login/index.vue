<template>
	<div class="page text-[20px]">
		{{ msg }}
		<el-button @click="openVn">click</el-button>
	</div>
</template>
<script setup>
import { ref } from "vue";
const msg = ref("这里是登录页");
const openVn = () => {
	ElMessage({
		message: "Warning, this is a warning message.",
		type: "warning"
	});
};
</script>
<style lang="scss" scoped>
.page {
	color: $sjl-color;
}
</style>
