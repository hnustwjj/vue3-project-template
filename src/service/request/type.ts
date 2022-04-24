import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface interceptor {
  requestOnFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestOnRejected?: (err: any) => any
  responseOnFulfilled?: (config: AxiosResponse) => AxiosResponse
  responseOnRejected?: (err: any) => any
}

//实例也可以传入自定义的interceptor拦截器，这个对象的类型是自定义的interceptor类型
export interface wjjRequestConfig extends AxiosRequestConfig {
  interceptor?: interceptor
}
