/*
 * @LastEditors: shenjilin-home
 * @Description: ...
 * @Date: 2022-08-07 23:12:17
 * @LastEditTime: 2023-08-06 15:50:07
 * @Author: shenjilin
 */
import path from "path";
import { defineConfig } from "vite";

// import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	// 别名设置
	resolve: {
		alias: {
			"@": `${pathSrc}/` // 把 @ 指向到 src 目录去
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 配置公共的scss变量
				additionalData: '@use "@/styles/variables.scss" as *;'
			}
		}
	},
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			// allow auto load markdown components under `./src/components/`
			extensions: ["vue"],
			include: [/\.vue$/, /\.vue\?vue/],
			resolvers: [
				ElementPlusResolver({
					importStyle: "sass"
				})
			],
			dts: "components.d.ts"
		}),
		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		Unocss({
			presets: [
				presetUno(),
				presetAttributify(),
				presetIcons({
					scale: 1.2,
					warn: true
				})
			],
			transformers: [transformerDirectives(), transformerVariantGroup()]
		})
	]
});
