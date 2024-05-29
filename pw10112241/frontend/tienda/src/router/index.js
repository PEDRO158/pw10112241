import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from '../views/ClientesView.vue'
import ClientesCreateView from '../views/ClientesCreateView.vue'
import ClientesEditarView from '../views/ClientesEditarView.vue'
import RegistroView from '../views/RegistroView.vue'
import EntradaView from '../views/EntradaView.vue'
import NoAutorizaView from '../views/NoAutorizaView.vue'

import { getAuth } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView,
      meta:{
        requireAuth: true,
      }
    },
    {
      path: '/clientes/create',
      name: 'clientescreate',
      component: ClientesCreateView
    },
    {
      path: '/clientes/:id/edit',
      name: 'clienteseditar',
      component: ClientesEditarView
    },
    {
      path: '/clientes/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/clientes/entrada',
      name: 'entrada',
      component: EntradaView
    },
    {
      path: '/clientes/NoAutorizaView',
      name: 'NoAutorizaView',
      component: NoAutorizaView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  //si hay alguna ruta tiene .meta
  if (to.matched.some((record) => record.meta.requireAuth)) {
    //si hay un usuario registrado
    if (getAuth.currentUser) {
      next();//continuar
    }else{
      //alert("Acceso no autorizado")
      next("/clientes/NoAutorizaView");
    }
  } else{
      next();
  }
})

export default router
