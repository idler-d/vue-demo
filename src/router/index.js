import { createRouter, createWebHashHistory } from 'vue-router'
import routerData from '@/utils/routerData.js'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
]

// 加载路由数据到路由
routerData.forEach(item => {
  routes.push({
    path: item.path,
    name: item.title,
    component: () => import('../views/' + item.component)
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
