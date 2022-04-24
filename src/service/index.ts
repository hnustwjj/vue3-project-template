//统一出口
import { wjjRequest } from '@/service/request'
const isLoading = ref(false)
//创建axios实例
let timer: any = null
const request_util = new wjjRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptor: {
    // 请求成功拦截
    requestOnFulfilled(config) {
      isLoading.value = true
      return config
    },
    // 响应成功拦截
    responseOnFulfilled(res) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        isLoading.value = false
      }, 500)
      return res.data
    }
  },
  timeout: 5000
})

export { request_util, isLoading }
