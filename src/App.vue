<script setup lang="ts">
import { ElLoading } from 'element-plus'
const itemclick = () => {
  ElLoading.service({
    text: '正在请求数据',
    lock: true // 蒙版，不能与页面交互
  })
}
</script>

<template>
  <ElButton type="primary" @click="itemclick" />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
