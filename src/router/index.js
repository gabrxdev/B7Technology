import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Central from '../views/Central.vue'
import Consulta from '../views/Consulta.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/central',
      name: 'central',
      component: Central
    },
    {
      path: '/consulta',
      name: 'consulta',
      component: Consulta
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'notfound', 
      component: NotFound
    }
  ]
})

export default router
