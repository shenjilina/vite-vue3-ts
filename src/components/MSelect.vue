<template>
	<div class="multiple-select" :style="{ width: props.width, height: props.height }">
		<div class="multiple-select-title">
			<input type="text" :placeholder="props.placeholder" v-model="selectCon" @click.stop="handleShow" />
			<i class="icon" @click.stop="handleShow">∨</i>
		</div>
		<ul class="multiple-select-popup" v-show="isShow" @click.stop="handleShow">
			<li class="multiple-select-popup-li" v-for="item in options" :key="item.value">
				<label :id="item.value" @change.stop="handleCheckedData(item)">
					<input type="checkbox" v-model="item.check" />
					{{ item.label }}
				</label>
			</li>
		</ul>
	</div>
</template>
<script setup>
import { ref, watch } from "vue";
const props = defineProps({
	options: {
		type: Array,
		default: () => []
	},
	placeholder: {
		type: String,
		default: "请选择.."
	},
	width: {
		type: String,
		default: "300px"
	},
	height: {
		type: String,
		default: "38px"
	}
});
const emit = defineEmits(["change"]);

// 选项框显示与隐藏
const isShow = ref(false);
const handleShow = () => {
	isShow.value = true;
};
document.addEventListener("click", () => {
	isShow.value = false;
});

const selectCon = ref("");
const checkedData = ref([]);
watch(
	checkedData,
	() => {
		let text = "";
		if (checkedData.value && checkedData.value.length > 0) {
			checkedData.value.forEach(v => (text += v.label + "，"));
		}
		selectCon.value = text;
	},
	{
		deep: true
	}
);

const handleCheckedData = item => {
	if (item.check) {
		checkedData.value.push(item);
	} else {
		const index = checkedData.value.findIndex(v => v.value === item.value);
		checkedData.value.splice(index, 1);
	}
	emit("change", {
		checkedData: checkedData.value,
		value: checkedData.value.map(v => v.value),
		name: checkedData.value.map(v => v.label)
	});
};
</script>
<style scoped lang="scss">
.multiple-select {
	position: relative;
	.multiple-select-title {
		height: 100%;
		input[type="text"] {
			/* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			padding: 0 5px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			border-radius: 3px;
			border-radius: 3px;

			/* Firefox */

			/* Safari 和 Chrome */
			border-radius: 3px;
		}
		i {
			position: absolute;
			top: 1px;
			right: -12px;
			width: 30px;
			height: 40px;
			line-height: 38px;
			text-align: center;
			cursor: pointer;
		}
	}
	.multiple-select-popup {
		position: absolute;
		top: 40px;
		left: 0;
		z-index: 999;
		width: 100%;
		padding: 5px 0;
		margin: 0;
		background-color: #ffffff;
		border: 1px solid #e4e7ed;
		border-radius: 5px;
		box-shadow: 0 0 12px rgb(0 0 0 / 12%);
		.multiple-select-popup-li {
			&:hover {
				background: #fafafa;
			}
			label {
				display: inline-block;
				width: 100%;
				padding: 8px 20px;
			}
		}
	}
}
</style>
