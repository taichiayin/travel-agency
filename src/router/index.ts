import { createRouter, createWebHistory } from 'vue-router'
import layout from './modules/layout'

const routes: any[] = []
routes.push(layout)

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
