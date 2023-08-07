import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Consulta from '../views/Consulta.vue'
import NotFound from '../views/NotFound.vue'
import Usuarios from '../views/Usuarios.vue'
import Configuracoes from '../views/Configuracoes.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
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
    },
    {
      path: '/usuarios', 
      name: 'usuarios', 
      component: Usuarios
    },
    {
      path: '/configuracoes', 
      name: 'configuracoes', 
      component: Configuracoes
    }
  ]
})

export default router
