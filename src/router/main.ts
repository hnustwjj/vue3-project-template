import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    children: []
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
