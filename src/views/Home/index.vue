<template>
	<div>
		{{ msg }}
		<p class="number">1234567890</p>
		<el-button>click</el-button>
		<el-color-picker v-model="color" show-alpha />

		<div>
			结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。结合以上两者有助于我们在开发过程中保持代码风格统一以及代码质量检查。
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
const msg = ref("这里是首页");
const color = ref("rgba(19, 206, 102, 0.8)");
</script>
<style lang="scss" scoped>
.number {
	color: $sjl-color;
	background: #ffff00;
}
</style>
