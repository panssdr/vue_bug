import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListView from '../views/ListView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listview',
    name: 'listview',
    component:ListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
