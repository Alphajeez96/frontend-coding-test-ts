import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import Pokedex from '../views/Pokedex.vue'
import Details from '../views/Details.vue'
import DashboardLayout from '../components/layout/Dashboard.vue'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },

  {
    path: '/Pokedex',
    name: 'Pokedex',
    component: Pokedex,
    meta: { layout: DashboardLayout },
  },

  {
    path: '/Pokedex/:name',
    name: 'Details',
    component: Details,
    meta: { layout: DashboardLayout },
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
