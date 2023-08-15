<template>
	<div v-loading="getPageLoading">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, watch } from "vue";
import { useAppStore } from "@/store/modules/app";
const app = useAppStore();
const getPageLoading = computed(() => app.pageLoading);
watch(
	getPageLoading,
	val => {
		console.log("val", val);
	},
	{ deep: true }
);
</script>

<style scoped></style>
