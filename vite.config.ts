/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-08-07 23:12:17
 * @LastEditTime: 2022-11-14 23:39:38
 * @Author: shenjilin
 */
import { defineConfig } from "vite";

import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	// 别名设置
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)) // 把 @ 指向到 src 目录去
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/variables.scss";'
			}
		}
	}
});
