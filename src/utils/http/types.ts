/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2022-11-14 23:36:47
 * @LastEditTime: 2022-11-14 23:36:51
 * @Author: shenjilin
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface RequestInterceptors<T> {
	// 请求拦截
	requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestInterceptorsCatch?: (err: any) => any;
	// 响应拦截
	responseInterceptors?: (config: T) => T;
	responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
	[index: string]: () => void;
}
