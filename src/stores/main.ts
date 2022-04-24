import { defineStore } from 'pinia'

// main是store的名字，这必须是独一无二的。
export const useMainStore = defineStore('main', {
  // 一个返回响应式状态的函数
  state: () => ({
    counter: 0,
    name: 'Eduardo'
  }),
  // 可选
  getters: {
    //第一个参数是state
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne(): number {
      return this.doubleCount + 1
    }
  },
  // 可选
  actions: {
    reset() {
      // this指向的是store实例
      this.counter = 0
    }
  }
})
